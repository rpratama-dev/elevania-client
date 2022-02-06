/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import CardProduct from '../../components/product/CardProduct';
import ModalFormProduct from '../../components/product/ModalFormProduct';
import CallServer from '../../utils/CallServer';
import ServerApi from '../../utils/ServerApi';

/* eslint-disable jsx-a11y/role-supports-aria-props */
export default function ManageProduct() {
  const [finished, setFinished] = useState(false);
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    // const bodyTable = document.getElementById('tb-product');
    // bodyTable.onscroll = () => {
    //   if (Math.ceil(bodyTable.scrollTop) + bodyTable.clientHeight >= bodyTable.scrollHeight) {
    //     setPage(page + 1);
    //   }
    // };
  }, [products]);

  useEffect(() => {
    if (!finished && !loading) loadData();
  }, [page]);

  const loadData = async () => {
    try {
      setLoading(true);
      const url = ServerApi.URL_PRODUCT;
      const { response } = await CallServer({ method: 'get', url });
      const temps = [...products, ...response.slice(0)];
      if (temps.length > 0) {
        setProducts(temps);
      } else setFinished(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleBtnAdd = () => {
    handleShow();
  };

  return (
    <>
      {show && (
        <ModalFormProduct
          show={show}
          handleClose={handleClose}
          title="Tambah Produk"
          product={null}
        />
      )}
      <div className="container dashboard-edit">
        <div className="row">
          <div className="col-md-12">
            <div className="dashboard_title_area">
              <div className="">
                <div className="dashboard__title">
                  <button
                    onClick={handleBtnAdd}
                    className="btn btn--icon btn-sm btn-primary float-right">
                    <span className="lnr lnr-plus-circle"></span>Tambah Produk
                  </button>
                  <h3>Manage Produk</h3>
                </div>
              </div>
            </div>
          </div>
          {products.map((el, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <CardProduct product={el} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
