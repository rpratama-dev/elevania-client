/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyCheckbox from '../../components/element/MyCheckbox';
import { formatNumber } from '../../helper/formatNumber';
import CallServer from '../../utils/CallServer';
import errorHandler from '../../utils/errorHandler';
import ServerApi from '../../utils/ServerApi';

export default function SyncProduct() {
  const [finished, setFinished] = useState(false);
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const bodyTable = document.getElementById('tb-product');
    bodyTable.onscroll = () => {
      if (Math.ceil(bodyTable.scrollTop) + bodyTable.clientHeight >= bodyTable.scrollHeight) {
        setPage(page + 1);
      }
    };
  }, [products]);

  useEffect(() => {
    if (!finished && !loading) loadData();
  }, [page]);

  const loadData = async () => {
    try {
      setLoading(true);
      const url = `${ServerApi.URL_PRODUCT}/sync?pageNumber=${page}`;
      const { response } = await CallServer({ method: 'get', url });
      const temps = [...products, ...response.slice(0)];
      const selfs = temps.map((el) => el.sku);
      if (temps.length > 0) {
        const newProducts = temps.filter((value, index) => {
          return selfs.indexOf(value.sku) === index;
        });
        setProducts(newProducts);
      } else setProducts(temps);
      console.log(response);
      if (response.length < 1) setFinished(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  /**
   *
   * @param {string} value
   * @param {string} name
   * @param {boolean} checked
   */
  const handleChange = (value, _, checked) => {
    const newIDs = [...selectedIds];
    const index = newIDs.indexOf(value);
    console.log(index, checked);
    if (index > -1) newIDs.splice(index, 1);
    if (index < 0) newIDs.push(value);
    console.log(newIDs);
    setSelectedIds(newIDs);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const url = `${ServerApi.URL_PRODUCT}/sync`;
      const data = { selectedProducts: selectedIds };
      const { response } = await CallServer({ method: 'post', url, data });
      const msg = response.message;
      alert(msg);
      navigate('/admin/product');
    } catch (error) {
      const msg = errorHandler(error);
      if (typeof msg === 'string') alert(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleImport = () => {
    let isConfirm = confirm(`Impor ${selectedIds.length} product`);
    if (isConfirm) handleSubmit();
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
                      <span className="lnr lnr-alarm"></span>Import To MyStore
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
                                checked={selectedIds.indexOf(el.no) > -1}
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
