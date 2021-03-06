import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import CardProduct from '../../components/product/CardProduct';
import ModalFormProduct from '../../components/product/ModalFormProduct';

/* eslint-disable jsx-a11y/role-supports-aria-props */
/**
 *
 * @param {{
 *  config: {
 *    isCustomer: boolean,
 *  }
 * }} props
 * @returns
 */
function ManageProduct(props) {
  const { config = {}, productStore } = props;
  const { show, products } = productStore.myState;

  useEffect(() => {
    productStore.fetchData();
  }, []);

  const handleShow = () => productStore.setMyState('show', true);
  const handleClose = () => productStore.setMyState('show', false);

  const bodyTable = document.getElementById('data-prd');
  if (bodyTable)
    bodyTable.onscroll = function onscroll() {
      if (Math.ceil(bodyTable.scrollTop) + bodyTable.clientHeight >= bodyTable.scrollHeight) {
        const las_prd = products.slice(-1)[0];
        productStore.fetchData(las_prd.id);
      }
    };

  const handleBtnAdd = () => {
    productStore.setMyState('payload', { name: '', sku: '', price: '', description: '' });
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
          {...props}
        />
      )}
      <div className="container dashboard-edit">
        {!config.isCustomer && (
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
          </div>
        )}
        {products.length < 1 && (
          <div className="row">
            <div className="col-md-12">
              <h4 className="text-center">Kami sedang Menyiapkan Produk</h4>
            </div>
            <div className="col-md-12">
              <img
                className="my-4"
                src={`${process.env.PUBLIC_URL}/assets/images/prepare.svg`}
                alt="images/prepare.jpg"></img>
            </div>
          </div>
        )}
        <div
          className="row infinity_scroll"
          id="data-prd"
          style={{ height: 'calc(100vh - 150px)', overflow: 'auto' }}>
          {products.map((el, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <CardProduct product={el} {...props} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default observer(ManageProduct);
