class MyStorage {
  static setAccessToken(value) {
    localStorage.setItem('access_token', value);
  }

  static getAccessToken() {
    const val = localStorage.getItem('access_token');
    return val;
  }
}

export default MyStorage;
