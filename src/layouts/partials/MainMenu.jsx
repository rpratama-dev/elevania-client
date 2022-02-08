// import { observer } from 'mobx-react-lite';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const $ = window.$;
function MainMenu(props) {
  const navigate = useNavigate();
  const { store } = props;

  useEffect(() => {
    $('.close_menu').on('click', function () {
      $(this).parent('.offcanvas-menu').addClass('closed');
    });
    $('.menu_icon').on('click', function () {
      $(this).siblings('.offcanvas-menu').removeClass('closed');
    });
  }, []);

  const isLogedIn = store.userLogin.isLogin;
  const getUserName = () => {
    const { user } = store.userLogin || {};
    if (user) return user.full_name;
    else return 'Pengunjung';
  };

  const handleLogout = async () => {
    try {
      await store.handleLogot();
      navigate('/login');
    } catch (error) {
      console.error('Error Logout', error);
    }
  };

  const handleClickMenu = () => {
    $('.close_menu').click();
  };

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
                  <img
                    className="rounded"
                    height="48"
                    src={`https://ui-avatars.com/api/?background=random&name=${getUserName()}`}
                    alt="user avatar"
                  />
                </span>
                {/* offcanvas menu */}
                <div className="offcanvas-menu closed">
                  <span className="lnr lnr-cross close_menu" />
                  <div className="author-author__info">
                    <div className="author__avatar v_middle">
                      <img
                        className="rounded"
                        height="48"
                        src={`https://ui-avatars.com/api/?background=random&name=${getUserName()}`}
                        alt="user avatar"
                      />
                    </div>
                    <div className="autor__info v_middle">
                      <p className="name">{getUserName()}</p>
                      {/* <p className="ammount">$20.45</p> */}
                    </div>
                  </div>
                  <div className="dropdowns dropdown--author">
                    {isLogedIn ? (
                      <ul>
                        <li>
                          <Link to="/admin" onClick={handleClickMenu}>
                            <span className="lnr lnr-user" />
                            Admin
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default observer(MainMenu);
