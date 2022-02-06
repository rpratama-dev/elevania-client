/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import parseEditorHtml from '../../helper/parseEditorHtml';
import CallServer from '../../utils/CallServer';
import ServerApi from '../../utils/ServerApi';
import Element from '../element';
import MyComp from '../MyComp';

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
export default function ModalFormProduct(props) {
  const { show, handleClose, title, product } = props;
  const [payload, setPayload] = useState({ ...init });
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

  const handleTextEditor = (content, name) => {
    let temp = content;
    if (parseEditorHtml(content)) {
      temp = '';
    }
    setPayload({ ...payload, [name]: temp });
    return true;
  };

  const handleChange = (value, name) => {
    if (name === 'description') {
      console.log(value, name);
      handleTextEditor(value, name);
    } else setPayload({ ...payload, [name]: value });
  };

  const fields = MyComp.product(payload, handleChange);

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
    const isConfirm = confirm('Simpan Perubahan?');
    if (isConfirm) handleConfirm();
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
