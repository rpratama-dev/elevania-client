import axios from 'axios';
import MyStorage from './MyStorage';

const defaultHeaders = (isFormData) => {
  const headers = {
    access_token: MyStorage.getAccessToken(),
  };
  if (isFormData) {
    headers['Content-Type'] = 'multipart/form-data';
  }
  return headers;
};

const instanceAxios = axios.create({
  // baseURL: '/api/v1',
  baseURL: 'http://localhost:3000/api/v1',
  headers: defaultHeaders(),
  timeout: 180000, // 3 Menit,
  // withCredentials: false,
});

/**
 * @param {{
 * method: 'post' | 'get' | 'put' | 'patch' | 'delete',
 * url: String,
 * data: Object,
 * isFormData: Boolean,
 * cbUpProgress: (progress: number) => void,
 * cbDnProgress: (progress: number) => void,
 * }} options
 * @returns
 */
const CallServer = (options) => {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const { method, url, isFormData, data } = options;
        const config = { method, url, headers: defaultHeaders(isFormData || false) };

        // config.onUploadProgress = (progressEvent) => {
        //   let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        //   if (options.cbUpProgress) options.cbUpProgress(percentCompleted);
        // };
        // config.onDownloadProgress = (progressEvent) => {
        //   let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        //   if (options.cbDnProgress) options.cbDnProgress(percentCompleted);
        // };
        if (data) config.data = data;
        const { data: result } = await instanceAxios(config);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    })();
  });
};

export default CallServer;
