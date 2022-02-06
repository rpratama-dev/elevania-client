import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Element from '../../components/element';
import MyComp from '../../components/MyComp';
import CallServer from '../../utils/CallServer';
import errorHandler from '../../utils/errorHandler';
import MyStorage from '../../utils/MyStorage';
import ServerApi from '../../utils/ServerApi';

function Login() {
  const [payload, setPayload] = useState({ email: '', password: '' });
  const [errMsg, setErrMsg] = useState('');

  const navigate = useNavigate();
  /**
   *
   * @param {string} value
   * @param {string} name
   */
  const handleChange = (value, name) => {
    setPayload({ ...payload, [name]: value });
  };

  const fields = MyComp.login(payload, handleChange);

  const handleLogin = async () => {
    try {
      const url = ServerApi.URL_LOGIN;
      const { response } = await CallServer({ method: 'post', url, data: payload });
      MyStorage.setAccessToken(response.token);
      if (response.user.role === 'admin') {
        navigate('/admin');
      } else navigate('/');
      console.log('Reponse asd', response);
    } catch (error) {
      const msg = errorHandler(error);
      if (typeof msg === 'string') {
        setErrMsg(msg);
        alert(msg);
      } else console.log('Login Error', error);
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
                    {errMsg && <p className="text-danger">{errMsg}</p>}
                  </div>
                  {fields.map((el, i) => Element[el.comp]({ ...el.data, index: i }))}
                  <div className="col-md-12">
                    <button
                      onClick={handleLogin}
                      className="btn btn--md btn--round float-right"
                      type="submit">
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
