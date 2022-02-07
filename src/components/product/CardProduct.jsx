/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/role-supports-aria-props */

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import checkImageURL from '../../helper/checkImageURL';
import { formatNumber } from '../../helper/formatNumber';
import CallServer from '../../utils/CallServer';
import ServerApi from '../../utils/ServerApi';
import ModalFormProduct from './ModalFormProduct';

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
 * }} props
 * @returns
 */
export default function CardProduct(props) {
  const { product } = props;
  const [imgUrl, setImsgUrl] = useState(product.image_url);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    checkLogo(product.image_url);
  }, []);

  const checkLogo = (url) => {
    checkImageURL(url, (newUrl, isValid) => {
      setImsgUrl(newUrl);
    });
  };

  const handleEdit = () => {
    handleShow();
  };

  const handleConfirm = async () => {
    try {
      const url = `${ServerApi.URL_PRODUCT}/${product.prod_no}`;
      const { message } = await CallServer({ method: 'delete', url });
      if (message) alert(message);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = () => {
    const isConfirm = confirm(`Hapus ${product.name}?`);
    if (isConfirm) handleConfirm();
  };

  return (
    <>
      {show && (
        <ModalFormProduct
          show={show}
          handleClose={handleClose}
          title="Edit Produk"
          product={product}
        />
      )}
      <div className="product product--card">
        <div className="product__thumbnail">
          <img src={imgUrl} height="300" alt="Product Images" />
          <div className="prod_option">
            <a
              href="#test"
              id="drop2"
              className="dropdown-trigger"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true">
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
                  <Link to="#" onClick={handleDelete} className="delete">
                    <span className="lnr lnr-trash" />
                    Delete
                  </Link>
                </li>
              </ul>
            </div>
          </div>
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
