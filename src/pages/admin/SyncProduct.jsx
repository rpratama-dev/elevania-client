/* eslint-disable no-unused-vars */
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyCheckbox from '../../components/element/MyCheckbox';
import { formatNumber } from '../../helper/formatNumber';

function SyncProduct({ store }) {
  const { loading, page, finished, handleChange } = store.syncState;
  const { selectedIds, importeds, products } = store.syncState;

  const navigate = useNavigate();

  useEffect(() => {
    store.loadProduct();
    store.loadImported();
  }, []);

  const bodyTable = document.getElementById('tb-product');
  if (bodyTable)
    bodyTable.onscroll = () => {
      if (Math.ceil(bodyTable.scrollTop) + bodyTable.clientHeight >= bodyTable.scrollHeight) {
        store.setSyncState('page', page + 1);
        if (!finished && !loading) store.loadProduct();
      }
    };

  const handleSubmit = () => {
    store.handleSubmit((response) => {
      const { message } = response;
      alert(message);
      navigate('/admin/product');
    });
  };

  const handleImport = () => {
    let isConfirm = confirm(`Impor ${selectedIds.length} product`);
    if (isConfirm) handleSubmit();
  };

  const getChecked = (prod_no) => {
    const isSelected = selectedIds.indexOf(prod_no);
    const isImported = importeds.indexOf(prod_no);
    return isSelected > -1 || isImported > -1;
  };

  return (
    <section className="section--padding2 bgcolor">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="">
              <div className="modules__content">
                <div className="withdraw_module withdraw_history">
                  <div className="withdraw_table_header">
                    <button
                      onClick={handleImport}
                      disabled={selectedIds.length < 1}
                      className="btn btn--icon btn-sm btn-primary float-right">
                      <span className="lnr lnr-download"></span>Import To MyStore
                    </button>
                    <div>
                      <h3>Produk Pada Elevenia</h3>
                      <p className="mb-0">Pilih produk yang akan di impor ke MyStore</p>
                    </div>
                  </div>
                  <div
                    id="tb-product"
                    className="table-responsive"
                    style={{ height: 'calc(100vh - 250px)' }}>
                    <table className="table table-sm withdraw__table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Nomor</th>
                          <th className="">Nama Product</th>
                          <th>Harga</th>
                          <th>SKU</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((el, i) => (
                          <tr key={i}>
                            <td>
                              <MyCheckbox
                                id={`id-${el.no}`}
                                name="product_no"
                                label=""
                                description=""
                                value={el.no}
                                checked={getChecked(el.no)}
                                handleChange={handleChange}
                              />
                            </td>
                            <td>{el.no}</td>
                            <td>{el.name}</td>
                            <td className="bold">Rp {formatNumber.format(+el.price)}</td>
                            <td className="">
                              <span>{el.sku}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4">
                    {loading && <h3 className="text-center">Loading....</h3>}
                    {finished && <h3 className="text-center">Semua Data Sudah Ditampilkan</h3>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end .col-md-6 */}
        </div>
        {/* end .row */}
      </div>
      {/* end .container */}
    </section>
  );
}

export default observer(SyncProduct);
