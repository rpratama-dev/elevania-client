class MyStorage {
  static setAccessToken(value) {
    localStorage.setItem('access_token', value);
  }

  static getAccessToken() {
    const val = localStorage.getItem('access_token');
    return val;
  }

  static setUser(value) {
    localStorage.setItem('user', JSON.stringify(value));
  }

  static getUser() {
    const val = localStorage.getItem('user');
    return JSON.parse(val);
  }

  static clear() {
    localStorage.clear();
  }
}

export default MyStorage;
