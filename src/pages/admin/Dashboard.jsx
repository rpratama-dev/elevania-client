import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../../routes/CustomeLink';

function Dashboard({ productStore }) {
  const { pageDashboard } = productStore;

  useEffect(() => {
    const { pathname } = window.location;
    if (pathname.split('/').includes('sync'))
      productStore.setMyState('pageDashboard', 'import_item');
    else productStore.setMyState('pageDashboard', 'manage_item');
  }, []);

  const handlePage = (p) => productStore.setMyState('pageDashboard', p);

  return (
    <div className="dashboard-area">
      <div className="dashboard_menu_area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="dashboard_menu">
                <li className={pageDashboard === 'manage_item' ? 'active' : ''}>
                  <CustomLink onClick={() => handlePage('manage_item')} to="/admin/product">
                    <span className="lnr lnr-briefcase" />
                    Manage Item
                  </CustomLink>
                </li>
                <li className={pageDashboard === 'import_item' ? 'active' : ''}>
                  <CustomLink onClick={() => handlePage('import_item')} to="/admin/product/sync">
                    <span className="lnr lnr-download" />
                    Impor Item
                  </CustomLink>
                </li>
              </ul>
              {/* end /.dashboard_menu */}
            </div>
            {/* end /.col-md-12 */}
          </div>
          {/* end /.row */}
        </div>
        {/* end /.container */}
      </div>
      <div className="dashboard_contents">
        <Outlet />
      </div>
    </div>
  );
}

export default observer(Dashboard);
