import { Outlet } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="dashboard-area">
      <div className="dashboard_menu_area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="dashboard_menu">
                <li className="active">
                  <a href="dashboard.html">
                    <span className="lnr lnr-home" />
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="dashboard-setting.html">
                    <span className="lnr lnr-cog" />
                    Setting
                  </a>
                </li>
                <li>
                  <a href="dashboard-purchase.html">
                    <span className="lnr lnr-cart" />
                    Purchase
                  </a>
                </li>
                <li>
                  <a href="dashboard-add-credit.html">
                    <span className="lnr lnr-dice" />
                    Add Credits
                  </a>
                </li>
                <li>
                  <a href="dashboard-statement.html">
                    <span className="lnr lnr-chart-bars" />
                    Statements
                  </a>
                </li>
                <li>
                  <a href="dashboard-upload.html">
                    <span className="lnr lnr-upload" />
                    Upload Items
                  </a>
                </li>
                <li>
                  <a href="dashboard-manage-item.html">
                    <span className="lnr lnr-briefcase" />
                    Manage Items
                  </a>
                </li>
                <li>
                  <a href="dashboard-withdrawal.html">
                    <span className="lnr lnr-briefcase" />
                    Withdrawals
                  </a>
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
