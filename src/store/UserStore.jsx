/* eslint-disable no-unused-vars */
import { action, computed, makeObservable, observable, autorun, runInAction } from 'mobx';
import CallServer from '../utils/CallServer';
import errorHandler from '../utils/errorHandler';
import MyStorage from '../utils/MyStorage';
import ServerApi from '../utils/ServerApi';

class UserStore {
  constructor() {
    this.payload = { email: '', password: '' };
    this.errMsg = '';
    this.loading = false;
    this.userLogin = { isLogin: false };
    makeObservable(this, {
      payload: observable,
      errMsg: observable,
      loading: observable,
      userLogin: observable,
      user: computed,
      loginPayload: computed,
      setPayload: action,
      setLoading: action,
      setErrMsg: action,
      setUserLogin: action,
      handleLogin: action,
    });
    // autorun(this.logUserLogin());
    runInAction(this.prefetchUser());
  }

  get user() {
    if (this.userLogin.user) return this.userLogin.user;
    return null;
  }

  get loginPayload() {
    return this.payload;
  }

  /**
   *
   * @param {string} value
   * @param {string} name
   */
  setPayload(value, name) {
    this.payload = { ...this.payload, [name]: value };
  }

  setLoading(val) {
    this.loading = val;
  }

  setErrMsg(val) {
    this.errMsg = val;
  }

  /**
   *
   * @param {{
   *  token: string,
   *  user: {
   *    email: string,
   *    full_name: string,
   *    role: string,
   *    is_login: number
   * }
   * }} response
   */
  setUserLogin(response) {
    if (response) {
      this.userLogin = { isLogin: response.user.is_login === 1, user: response.user };
    }
  }

  logUserLogin() {
    return () => {
      console.log('run', this.user);
    };
    // return () => {
    //   if (this.userLogin.user) console.log(`Now, Your login as ${this.user.full_name}`);
    //   else `Waiting for verification token`;
    // };
  }

  prefetchUser() {
    return async () => {
      try {
        const url = ServerApi.URL_LOGIN;
        const { response } = await CallServer({
          method: 'get',
          url,
        });
        MyStorage.setUser(response);
        this.setUserLogin({ user: response });
        console.log('setUserLogin', response);
      } catch (error) {
        const msg = errorHandler(error);
        if (typeof msg === 'string') {
          this.setErrMsg(msg);
        } else console.log('Login Error', error);
      } finally {
        this.setLoading(false);
      }
    };
  }

  handleLogot() {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const url = ServerApi.URL_LOGIN;
          const { response } = await CallServer({ method: 'delete', url, data: this.loginPayload });
          MyStorage.clear();
          this.setUserLogin({ user: response });
          resolve(response);
        } catch (error) {
          const msg = errorHandler(error);
          if (typeof msg === 'string') {
            this.setErrMsg(msg);
          } else console.log('Login Error', error);
          reject(error);
        }
      })();
    });
  }

  handleLogin() {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          this.setLoading(true);
          const url = ServerApi.URL_LOGIN;
          const { response } = await CallServer({ method: 'post', url, data: this.loginPayload });
          MyStorage.setAccessToken(response.token);
          MyStorage.setUser(response.user);
          resolve(response);
          this.setUserLogin(response);
        } catch (error) {
          const msg = errorHandler(error);
          if (typeof msg === 'string') {
            this.setErrMsg(msg);
          } else console.log('Login Error', error);
          reject(error);
        } finally {
          this.setLoading(false);
        }
      })();
    });
  }
}

export default UserStore;
