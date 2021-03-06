import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatNumber } from '../../helper/formatNumber';
import ModalFormProduct from './ModalFormProduct';
import ModalImage from './ModalImage';

/**
 *
 * @param {{
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
 *  },
 *  config: {
 *    isCustomer: boolean,
 *  },
 * }} props
 * @returns
 */
function CardProduct(props) {
  const { product, config = {}, productStore } = props;
  const { modalCard } = productStore.myState;

  const handleShow = (key) =>
    productStore.setMyState('modalCard', { ...modalCard, [key]: `id_${product.id}` });
  const handleClose = () => productStore.setMyState('modalCard', { product: false, image: false });

  useEffect(() => {
    // productStore.setImageUrlProduct(product.image_url, product.id);
  }, []);

  const handleEdit = () => {
    handleShow('product');
  };

  const handleEditImage = () => {
    handleShow('image');
    productStore.setCurrentImages(product.images);
  };

  const handleConfirm = async () => {
    productStore.deleteProduct(product.prod_no, (msg) => {
      if (msg) alert(msg);
    });
  };

  const handleDelete = () => {
    const isConfirm = confirm(`Hapus ${product.name}?`);
    if (isConfirm) handleConfirm();
  };

  return (
    <>
      {modalCard.product === `id_${product.id}` && (
        <ModalFormProduct
          show={!!modalCard.product}
          handleClose={handleClose}
          title="Edit Produk"
          product={product}
          {...props}
        />
      )}
      {modalCard.image === `id_${product.id}` && (
        <ModalImage
          show={!!modalCard.image}
          handleClose={handleClose}
          title="Edit Image"
          {...props}
        />
      )}
      <div className="product product--card">
        <div className="product__thumbnail">
          <img src={product.image_url} height="300" alt="Product Images" />
          {!config.isCustomer && (
            <div className="prod_option">
              <a href="#test" id="drop2" className="dropdown-trigger" data-toggle="dropdown">
                <span className="lnr lnr-cog setting-icon" />
              </a>
              <div className="options dropdown-menu" aria-labelledby="drop2">
                <ul>
                  <li>
                    <Link to="#" onClick={handleEdit}>
                      <span className="lnr lnr-pencil" />
                      Edit
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={handleEditImage}>
                      <span className="lnr lnr-pencil" />
                      Edit Gambar
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={handleDelete} className="delete">
                      <span className="lnr lnr-trash" />
                      Delete
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="product-desc">
          <a href="#test" className="product_title">
            <h6 className="text--title">{product.name}</h6>
          </a>
          <ul className="titlebtm">
            <li className="product_cat">
              <a href="#a">
                <span className="lnr lnr-book" />
                {product.sku}
              </a>
            </li>
          </ul>

          <div
            className="text--overflow"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        </div>
        <div className="product-purchase">
          <div className="price_love">
            <span>Rp {formatNumber.format(product.price)}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default observer(CardProduct);
