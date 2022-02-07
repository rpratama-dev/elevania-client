/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import parseEditorHtml from '../../helper/parseEditorHtml';
import CallServer from '../../utils/CallServer';
import ServerApi from '../../utils/ServerApi';
import Element from '../element';
import MyComp from '../MyComp';
import CardImage from './CardImage';

const init = {
  name: '',
  sku: '',
  price: '',
  description: '',
  // image_url: '',
};

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
export default function ModalImage(props) {
  const { show, handleClose, title, product } = props;
  const [payload, setPayload] = useState({ ...init });
  const [errMsg, setErrMsg] = useState({ ...init });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (product) {
      const { id, prod_no, name, sku, price, description } = product;
      const newPyd = { id, prod_no, name, sku, price };
      setPayload(newPyd);
      setTimeout(() => {
        setPayload({ ...newPyd, description });
      }, 1000);
    }
  }, []);

  const handleCheckSKU = async (sku) => {
    let msg = '';
    try {
      const url = `${ServerApi.URL_PRODUCT}/${sku}/sku`;
      const { response } = await CallServer({ method: 'get', url });
      if (response.id) msg = 'SKU Sudah Terdaftar';
      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      setErrMsg({ ...errMsg, sku: msg });
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
    keys.forEach((el, i) => {
      const msg = validation(el, payload[el]);
      if (msg) isValid = false;
      newErrMsg[el] = msg;
    });
    if (errMsg.sku) isValid = false;
    setErrMsg(newErrMsg);
    return isValid;
  };

  const handleTextEditor = (content, name) => {
    let temp = content;
    if (parseEditorHtml(content)) {
      temp = '';
    }
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
    setErrMsg({ ...errMsg, [name]: msg });
    setPayload({ ...payload, [name]: value });
  };

  const fields = MyComp.product(payload, errMsg, handleChange);

  const handleConfirm = async () => {
    try {
      setLoading(true);
      const tempUrl = ServerApi.URL_PRODUCT;
      const url = product ? `${tempUrl}/${product.prod_no}` : tempUrl;
      const method = product ? 'put' : 'post';
      const { response, message } = await CallServer({ method, url, data: payload });
      if (message) alert(message);
      handleClose();
      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
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
      <Modal size="xl" show={show} onHide={handleClose} backdrop="static" keyboard={false}>
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
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="shortcode_module_title">
                  <div className="dashboard__title">
                    <h3>Gambar Produk</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {product.images.map((el, i) => (
                <div key={i} className="col-lg-3 col-md-4">
                  <CardImage image={el} />
                </div>
              ))}
            </div>
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
            disabled={loading}>
            Close
          </Button>
          <Button
            onClick={handleSubmit}
            variant="primary"
            className="btn btn--round btn--sm"
            disabled={loading}>
            {loading && <i className="fas fa-spinner fa-spin mr-2"></i>}
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
