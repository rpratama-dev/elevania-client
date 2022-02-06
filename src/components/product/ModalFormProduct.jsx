import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Element from '../element';
import MyComp from '../MyComp';

const init = {
  name: '',
  sku: '',
  price: '',
  description: '',
  image_url: '',
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
  const { show, handleClose, title, product = {} } = props;
  const [payload, setPayload] = useState({ ...init });

  const handleChange = (value, name) => {
    setPayload({ ...payload, [name]: value });
  };

  const fields = MyComp.product(payload, handleChange);

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
          <h6>{product.name}</h6>
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
            disabled={false}>
            Close
          </Button>
          <Button
            onClick={handleChange}
            variant="primary"
            className="btn btn--round btn--sm"
            disabled={false}>
            {/* {loading && <i className="fas fa-spinner fa-spin mr-2"></i>} */}
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
