import { Link } from 'react-router-dom';

export default function MenuBar() {
  const isLogedIn = false;
  const getUserName = () => 'Pengunjung';
  const handleLogout = () => alert('Logout');

  return (
    <div className="menu-area menu--style1 sticky-top">
      <div className="mainmenu">
        {/* start .container */}
        <div className="container">
          {/* start .row*/}
          <div className="row">
            {/* start .col-md-12 */}
            <div className="col-md-12">
              <div className="navbar-header" id="navbar">
                {/* start mainmenu__search */}
                <div className="author-area mt-1">
                  <nav className="navbar navbar-expand-md navbar-dark mainmenu__menu">
                    {isLogedIn && (
                      <div
                        className="author-author__info inline has_dropdown py-0 pt-2"
                        style={{ padding: '10px 0px' }}>
                        <div className="author__avatar">
                          <img
                            className="rounded"
                            height="48"
                            src={`https://ui-avatars.com/api/?background=random&name=${getUserName()}`}
                            alt="user avatar"
                          />
                        </div>
                        <div className="autor__info">
                          <p className="name text-white">{getUserName()}</p>
                          {/* <p className="ammount">$20.45</p> */}
                        </div>
                        <div className="dropdowns dropdown--author mt-2">
                          <ul>
                            <li>
                              <Link to="/account?tab=purchase">
                                <span className="lnr lnr-cart" />
                                Pesanan
                              </Link>
                            </li>
                            <li>
                              <Link to="/account?tab=policy">
                                <span className="lnr lnr-license" />
                                Polis
                              </Link>
                            </li>
                            <li>
                              <Link to="/account?tab=claim">
                                <span className="lnr lnr-briefcase" />
                                Klaim
                              </Link>
                            </li>
                            <li>
                              <Link to="/account?tab=profile">
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
                        </div>
                      </div>
                    )}
                    {!isLogedIn && (
                      <div
                        className="navbar-collapse collapse "
                        id="navbarNav"
                        style={{ maxHeight: '170px' }}>
                        <ul className="navbar-nav">
                          <li>
                            <Link to="/login">Masuk</Link>
                          </li>
                          <li>
                            <Link to="/register">Daftar</Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </nav>

                  {/* {isLogedIn ? (
                  <div className="autor__info">
                    <p className="name">{getUserName()}</p>
                    <p className="ammount">$20.45</p>
                  </div>
                ) : (
                  <>
                    <NavLink
                      to="/login"
                      // onClick={handleLogin}
                      className="btn btn--round btn--danger  btn--xs mr-2">
                      Login
                    </NavLink>
                    <NavLink to="/register" className="btn btn--round btn--secondary btn--xs">
                      Daftar
                    </NavLink>
                  </>
                )} */}
                </div>
                {/* start mainmenu__search */}
              </div>
              <nav className="navbar navbar-expand-md navbar-dark mainmenu__menu">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                {/* Collect the nav links, forms, and other content for toggling */}
                <div
                  className="navbar-collapse collapse "
                  id="navbarNav"
                  style={{ maxHeight: '170px' }}>
                  <ul className="navbar-nav">
                    <li>
                      <Link className="menu-link" to="/">
                        HOME
                      </Link>
                    </li>
                    <li>
                      <Link className="menu-link" to="/">
                        FASHION
                      </Link>
                    </li>
                    <li>
                      <Link className="menu-link" to="/">
                        GADGET
                      </Link>
                    </li>
                    <li>
                      <Link className="menu-link" to="/">
                        GROCERIES
                      </Link>
                    </li>
                    {isLogedIn && (
                      <li>
                        <Link className="menu-link" to="/account?tab=policy">
                          POLIS SAYA
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
                {/* /.navbar-collapse */}
              </nav>
            </div>
            {/* end /.col-md-12 */}
          </div>
          {/* end /.row*/}
        </div>
        {/* start .container */}
      </div>
    </div>
  );
}
