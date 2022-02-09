/* eslint-disable no-unused-vars */
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

function Dashboard({ store }) {
  const { pageDashboard } = store;

  useEffect(() => {
    const { pathname } = window.location;
    if (pathname.split('/').includes('sync')) store.setMyState('pageDashboard', 'import_item');
    else store.setMyState('pageDashboard', 'manage_item');
  }, []);

  const handlePage = (p) => store.setMyState('pageDashboard', p);

  return (
    <div className="dashboard-area">
      <div className="dashboard_menu_area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="dashboard_menu">
                <li className={pageDashboard === 'manage_item' ? 'active' : ''}>
                  <Link onClick={() => handlePage('manage_item')} to="/admin/product">
                    <span className="lnr lnr-briefcase" />
                    Manage Item
                  </Link>
                </li>
                <li className={pageDashboard === 'import_item' ? 'active' : ''}>
                  <Link onClick={() => handlePage('import_item')} to="/admin/product/sync">
                    <span className="lnr lnr-download" />
                    Impor Item
                  </Link>
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
