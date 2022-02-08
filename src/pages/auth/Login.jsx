import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import Element from '../../components/element';
import MyComp from '../../components/MyComp';

function Login({ store }) {
  // const [payload, setPayload] = useState({ email: '', password: '' });
  // const [errMsg, setErrMsg] = useState('');
  // const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  /**
   *
   * @param {string} value
   * @param {string} name
   */
  const handleChange = (value, name) => {
    store.setPayload(value, name);
  };

  const fields = MyComp.login(store.loginPayload, handleChange);

  const handleLogin = async () => {
    try {
      await store.handleLogin();
      if (store.userLogin) {
        if (store.userLogin.role === 'admin') {
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
                    {store.errMsg && <p className="text-danger">{store.errMsg}</p>}
                  </div>
                  {fields.map((el, i) => Element[el.comp]({ ...el.data, index: i }))}
                  <div className="col-md-12">
                    <button
                      onClick={handleLogin}
                      className="btn btn--md btn--round float-right"
                      disabled={store.loading}
                      type="submit">
                      {store.loading && <i className="fas fa-spinner fa-spin mr-2"></i>}
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
