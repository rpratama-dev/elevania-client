import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import Element from '../../components/element';
import MyComp from '../../components/MyComp';

function Login({ userStore }) {
  const navigate = useNavigate();

  /**
   *
   * @param {string} value
   * @param {string} name
   */
  const handleChange = (value, name) => {
    userStore.setPayload(value, name);
  };

  const fields = MyComp.login(userStore.loginPayload, handleChange);

  const handleLogin = async () => {
    try {
      await userStore.handleLogin();
      if (userStore.userLogin) {
        if (userStore.userLogin.role === 'admin') {
          navigate('/admin');
        } else navigate('/');
      }
    } catch (error) {
      console.error('error login', error);
    }
  };

  return (
    <section className="login_area section--padding2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <form action="#">
              <div className="cardify login">
                <div className="login--header">
                  <h3>Welcome Back</h3>
                  <p>You can sign in with your email</p>
                </div>
                <div className="row login--form">
                  <div className="col-md-12">
                    {userStore.errMsg && <p className="text-danger">{userStore.errMsg}</p>}
                  </div>
                  {fields.map((el, i) => Element[el.comp]({ ...el.data, index: i }))}
                  <div className="col-md-12">
                    <button
                      onClick={handleLogin}
                      className="btn btn--md btn--round float-right"
                      disabled={userStore.loading}
                      type="submit">
                      {userStore.loading && <i className="fas fa-spinner fa-spin mr-2"></i>}
                      Login Sekarang
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default observer(Login);
