import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import parseEditorHtml from '../../helper/parseEditorHtml';
import CallServer from '../../utils/CallServer';
import ServerApi from '../../utils/ServerApi';
import Element from '../element';
import MyComp from '../MyComp';

/**
 *
 * @param {{
 *  show: boolean,
 *  handleClose: () => void,
 *  title: string,
 *  product: {
 *    id: number,
 *    prod_no: string,
 *    image_type: string,
 *    image_url: string,
 *    createdAt: string,
 *    updatedAt: string,
 *    name: string,
 *    sku: string,
 *    price: number,
 *    description: string,
 *    images: [
 *      {
 *        image_type: string,
 *        image_url: string,
 *      },
 *    ],
 *  }
 * }} props
 * @returns
 */
function ModalFormProduct(props) {
  const { show, handleClose, title, product, productStore } = props;
  const { payload, errMsg } = productStore.myState;

  useEffect(() => {
    if (product) {
      const { id, prod_no, name, sku, price, description } = product;
      const parseing = {};
      const newPyd = { id, prod_no, name, sku, price };
      Object.keys(newPyd).forEach((el) => {
        parseing[el] = product[el];
      });
      productStore.setMyState('payload', parseing);
      setTimeout(() => {
        productStore.setMyState('payload', { ...parseing, description: description });
      }, 1000);
    }
  }, []);

  const handleCheckSKU = async (sku) => {
    let msg = '';
    try {
      const url = `${ServerApi.URL_PRODUCT}/${sku}/sku`;
      const { response } = await CallServer({ method: 'get', url });
      if (response.id) {
        if (product && product.prod_no === response.prod_no) msg = '';
        else msg = 'SKU Sudah Terdaftar';
      }
    } catch (error) {
      console.error(error);
    } finally {
      productStore.setMyState('errMsg', { ...errMsg, sku: msg });
    }
  };

  const validation = (field, value) => {
    switch (field) {
      case 'name': {
        if (!value) return 'Nama produk wajin diisi';
        break;
      }
      case 'sku': {
        if (!value) return 'SKU Wajib disertakan';
        handleCheckSKU(value);
        break;
      }
      case 'price': {
        if (!value) return 'Harga produk wajib diisi';
        else if (Number.isNaN(+value)) return 'Harga tidak valid';
        break;
      }
      case 'description':
        break;
      default:
        break;
    }
    return '';
  };

  const validate = () => {
    const keys = ['name', 'sku', 'price'];
    if (payload.sku) keys.splice(1, 1);
    const newErrMsg = { ...errMsg };
    let isValid = true;
    keys.forEach((el) => {
      const msg = validation(el, payload[el]);
      if (msg) isValid = false;
      newErrMsg[el] = msg;
    });
    if (errMsg.sku) isValid = false;
    productStore.setMyState('errMsg', newErrMsg);
    return isValid;
  };

  const handleTextEditor = (content) => {
    let temp = content;
    if (parseEditorHtml(content)) temp = '';
    return temp;
  };

  const handleChange = (value, name) => {
    switch (name) {
      case 'sku':
        if (value) value = value.toUpperCase();
        break;
      case 'description':
        value = handleTextEditor(value);
        break;
      default:
        break;
    }
    const msg = validation(name, value);
    productStore.setMyState('errMsg', { ...errMsg, [name]: msg });
    productStore.setMyState('payload', { ...payload, [name]: value });
  };

  const fields = MyComp.product(payload, errMsg, handleChange);

  const handleConfirm = async () => {
    const newPayload = { ...payload };
    if (product && product.prod_no) newPayload.prod_no = product.prod_no;
    productStore.addProduct(!!product, newPayload, (message) => {
      if (message) {
        alert(message);
        handleClose();
      }
    });
  };

  const handleSubmit = () => {
    const isValid = validate();
    if (isValid) {
      const isConfirm = confirm('Simpan Perubahan?');
      if (isConfirm) handleConfirm();
    } else alert('Periksa kembali data yang kamu input');
  };

  return (
    <>
      <Modal size="lg" show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header className="py-3">
          <button
            onClick={handleClose}
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
          <h3 className="modal-title mb-0" id="rating_modal">
            {title}
          </h3>
          <h6>{product && product.name}</h6>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            {fields.map((el, i) => Element[el.comp]({ ...el.data, index: i }))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <button className="btn btn--round modal_close" data-dismiss="modal">
            Close
          </button> */}
          <Button
            variant="secondary"
            className="btn btn--round modal_close"
            onClick={handleClose}
            disabled={productStore.loading}>
            Close
          </Button>
          <Button
            onClick={handleSubmit}
            variant="primary"
            className="btn btn--round btn--sm"
            disabled={productStore.loading}>
            {productStore.loading && <i className="fas fa-spinner fa-spin mr-2"></i>}
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default observer(ModalFormProduct);
