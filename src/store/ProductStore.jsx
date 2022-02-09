import { action, makeObservable, observable } from 'mobx';
import checkImageURL from '../helper/checkImageURL';
import CallServer from '../utils/CallServer';
import ServerApi from '../utils/ServerApi';

class ProductStore {
  constructor() {
    this.myState = {
      finished: false,
      products: [],
      loading: false,
      show: false,
      errorInfo: '',

      // For Dashboar Product
      pageDashboard: 'manage_item',

      // For Card Product
      imgUrl: '',
      modalCard: { product: false, image: false },

      // For Modal Product
      payload: { name: '', sku: '', price: '', description: '' },
      errMsg: { name: '', sku: '', price: '', description: '' },

      // For Modal Image
      currentImages: [],
    };

    makeObservable(this, {
      myState: observable,
      setMyState: action,
    });

    // autorun(this.prefetchData());
    // runInAction(this.prefetchData());
  }

  /**
   *
   * @param {'finished' | 'products' | 'loading' | 'show'} key
   * @param {*} value
   */
  setMyState(key, value) {
    const keys = Object.keys(this.myState);
    if (!keys.includes(key)) return false;
    this.myState[key] = value;
  }

  async setCurrentImages(images) {
    const newImages = await Promise.all(
      images.map(async (el) => {
        const newUrl = await checkImageURL(el.image_url);
        el.image_url = newUrl;
        return el;
      }),
    );
    this.setMyState('currentImages', newImages);
  }

  async deleteProduct(prod_no, cb) {
    try {
      const url = `${ServerApi.URL_PRODUCT}/${prod_no}`;
      const { response, message } = await CallServer({ method: 'delete', url });
      if (response.id) {
        const newProduccts = [...this.myState.products];
        const index = this.myState.products.map((el) => el.prod_no).indexOf(response.prod_no);
        newProduccts.splice(index, 1);
        this.setMyState('products', newProduccts);
      }
      if (message && cb) cb(message);
    } catch (error) {
      console.error(error);
    }
  }

  async addProduct(isEdit, payload, cb) {
    try {
      this.setMyState('loading', true);
      const tempUrl = ServerApi.URL_PRODUCT;
      const url = isEdit ? `${tempUrl}/${payload.prod_no}` : tempUrl;
      const method = isEdit ? 'put' : 'post';
      const { response, message } = await CallServer({ method, url, data: payload });

      const newUrl = await checkImageURL(response.image_url);
      response.image_url = newUrl;
      if (isEdit) {
        const index = this.myState.products
          .map((el) => el.prod_no)
          .indexOf(String(response.prod_no));
        if (index > -1) {
          const newProduccts = JSON.parse(JSON.stringify(this.myState.products));
          const temps = newProduccts[index].images;
          newProduccts.splice(index, 1, { ...response, images: temps });
          this.setMyState('products', newProduccts);
        }
      } else {
        const newProducts = [response, ...JSON.parse(JSON.stringify(this.myState.products))];
        this.setMyState('products', newProducts);
      }
      if (cb) cb(message, null);
    } catch (error) {
      console.error(error);
      this.setMyState('loading', false);
    } finally {
      this.setMyState('loading', false);
    }
  }

  async loadData(page) {
    try {
      // TODO: Only Load in component product
      this.setMyState('loading', true);
      const url = `${ServerApi.URL_PRODUCT}?last_id=${page}`;
      const { response = [] } = await CallServer({ method: 'get', url });
      // Validate Image URL
      const newResponse = await Promise.all(
        response.map(async (el) => {
          const newUrl = await checkImageURL(el.image_url);
          el.image_url = newUrl;
          return el;
        }),
      );
      const temps = [...this.myState.products, ...newResponse.slice(0)];
      if (temps.length >= 1) {
        this.setMyState('products', temps);
      }
      if (response.length < 1) this.setMyState('finished', true);
    } catch (error) {
      console.error(error);
    } finally {
      this.setMyState('loading', false);
    }
  }

  fetchData(p) {
    if (!this.finished) this.loadData(p);
  }

  prefetchData() {
    return () => this.loadData();
  }
}

export default ProductStore;
