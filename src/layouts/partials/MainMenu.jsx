import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const $ = window.$;
export default function MainMenu() {
  useEffect(() => {
    $('.close_menu').on('click', function () {
      $(this).parent('.offcanvas-menu').addClass('closed');
    });
    $('.menu_icon').on('click', function () {
      $(this).siblings('.offcanvas-menu').removeClass('closed');
    });
  }, []);

  const getUserName = () => 'Pengunjung';
  const isLogedIn = false;
  const handleClickMenu = () => {
    $('.close_menu').click();
  };
  const handleLogout = () => alert('Logout');

  return (
    <div className="menu-area menu--style1">
      <div className="top-menu-area">
        {/* start .container */}
        <div className="container">
          {/* start .row */}
          <div className="row">
            {/* start .col-md-3 */}
            <div className="col-lg-3 col-md-3 col-6 v_middle">
              <div className="logo">
                <Link to="/">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/logo-baru.png`}
                    alt="logo images"
                    className="img-fluid"
                  />
                </Link>
              </div>
            </div>
            {/* end /.col-md-3 */}
            {/* start .col-md-5 */}
            <div className="col-lg-8 offset-lg-1 col-md-9 col-6 v_middle">
              {/* start .author-area */}
              <div className="author-area">
                <div className="author-area not_logged_in py-2">
                  <NavLink to="/" className="logo">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/my_elevania.png`}
                      alt="logo images"
                      className="img-fluid"
                      style={{ height: '50px' }}
                    />
                  </NavLink>
                </div>
              </div>
              {/* end .author-area */}
              {/* author area restructured for mobile */}
              <div className="mobile_content d-flex h-100 justify-content-end ">
                <span
                  className="menu_icon bg-transparent align-self-center p-0"
                  style={{ lineHeight: 'unset' }}>
                  {getUserName() === 'Pengunjung' ? (
                    <img
                      className="rounded"
                      height="48"
                      src={`${process.env.PUBLIC_URL}/assets/images/usr_avatar.png`}
                      alt="user avatar"
                    />
                  ) : (
                    <img
                      className="rounded"
                      height="48"
                      src={`https://ui-avatars.com/api/?background=random&name=${getUserName()}`}
                      alt="user avatar"
                    />
                  )}
                </span>
                {/* offcanvas menu */}
                <div className="offcanvas-menu closed">
                  <span className="lnr lnr-cross close_menu" />
                  <div className="author-author__info">
                    <div className="author__avatar v_middle">
                      {getUserName() === 'Pengunjung' ? (
                        <img
                          className="rounded"
                          height="48"
                          src={`${process.env.PUBLIC_URL}/assets/images/usr_avatar.png`}
                          alt="user avatar"
                        />
                      ) : (
                        <img
                          className="rounded"
                          height="48"
                          src={`https://ui-avatars.com/api/?background=random&name=${getUserName()}`}
                          alt="user avatar"
                        />
                      )}
                    </div>
                    <div className="autor__info v_middle">
                      <p className="name">{getUserName()}</p>
                      {/* <p className="ammount">$20.45</p> */}
                    </div>
                  </div>
                  {/*end /.author-author__info*/}
                  {/* <div className="author__notification_area">
                  <ul>
                    <li>
                      <Link to="notification.html">
                        <div className="icon_wrap">
                          <span className="lnr lnr-alarm" />
                          <span className="notification_count noti">25</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="message.html">
                        <div className="icon_wrap">
                          <span className="lnr lnr-envelope" />
                          <span className="notification_count msg">6</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="cart.html">
                        <div className="icon_wrap">
                          <span className="lnr lnr-cart" />
                          <span className="notification_count purch">2</span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div> */}
                  {/*start .author__notification_area */}
                  <div className="dropdowns dropdown--author">
                    {isLogedIn ? (
                      <ul>
                        <li>
                          <Link to="/account?tab=purchase" onClick={handleClickMenu}>
                            <span className="lnr lnr-cart" />
                            Pesanan
                          </Link>
                        </li>
                        <li>
                          <Link to="/account?tab=policy" onClick={handleClickMenu}>
                            <span className="lnr lnr-license" />
                            Polis
                          </Link>
                        </li>
                        <li>
                          <Link to="/account?tab=claim" onClick={handleClickMenu}>
                            <span className="lnr lnr-briefcase" />
                            Klaim
                          </Link>
                        </li>
                        <li>
                          <Link to="/account?tab=profile" onClick={handleClickMenu}>
                            <span className="lnr lnr-user" />
                            Profil
                          </Link>
                        </li>
                        <li>
                          <Link to="#" onClick={() => handleLogout()}>
                            <span className="lnr lnr-exit" />
                            Keluar
                          </Link>
                        </li>
                      </ul>
                    ) : (
                      <ul>
                        <li>
                          <Link to="/login" onClick={handleClickMenu}>
                            <span className="lnr lnr-lock" />
                            Login
                          </Link>
                        </li>
                        <li>
                          <Link to="/register" onClick={handleClickMenu}>
                            <span className="lnr lnr-user" />
                            Register
                          </Link>
                        </li>
                      </ul>
                    )}
                  </div>
                  <div className="text-center">
                    <div className="col-12 v_middle p-0">
                      <div className="logo">
                        <Link to="/">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/images/my_elevania.png`}
                            alt="logo images"
                            className="img-fluid"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end /.mobile_content */}
            </div>
            {/* end /.col-md-5 */}
          </div>
          {/* end /.row */}
        </div>
        {/* end /.container */}
      </div>
    </div>
  );
}
