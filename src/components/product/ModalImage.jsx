import { observer } from 'mobx-react-lite';
import { Button, Modal } from 'react-bootstrap';
import CardImage from './CardImage';

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
function ModalImage(props) {
  const { show, handleClose, title, product, productStore } = props;
  const { currentImages } = productStore.myState;

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
              {currentImages.map((el, i) => (
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
            disabled={false}>
            Close
          </Button>
          <Button
            onClick={console.log}
            variant="primary"
            className="btn btn--round btn--sm"
            disabled={false}>
            {false && <i className="fas fa-spinner fa-spin mr-2"></i>}
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default observer(ModalImage);
