/* eslint-disable no-unused-vars */
import { action, computed, makeObservable, observable, autorun, runInAction } from 'mobx';
import CallServer from '../utils/CallServer';
import ServerApi from '../utils/ServerApi';

class ProductStore {
  constructor() {
    this.finished = false;
    this.products = [];
    this.loading = false;
    makeObservable(this, {
      products: observable,
      loading: observable,
      finished: observable,
      actionSetLoading: action,
      actionSetFinish: action,
      loadData: action,
      actionSetProduct: action,
    });
    autorun(this.prefetchData());
    // runInAction(this.prefetchData());
  }

  actionSetLoading(val) {
    this.loading = val;
  }

  actionSetProduct(prd) {
    this.products = prd;
  }

  actionSetFinish(val) {
    this.finished = val;
  }

  async deleteProduct(prod_no, cb) {
    try {
      const url = `${ServerApi.URL_PRODUCT}/${prod_no}`;
      const { response, message } = await CallServer({ method: 'delete', url });
      if (response.id) {
        const newProduccts = [...this.products];
        const index = this.products.map((el) => el.prod_no).indexOf(response.prod_no);
        newProduccts.splice(index, 1);
        this.actionSetProduct(newProduccts);
      }
      if (message && cb) cb(message);
    } catch (error) {
      console.error(error);
    }
  }

  async addProduct(isEdit, payload, cb) {
    try {
      this.actionSetLoading(true);
      const tempUrl = ServerApi.URL_PRODUCT;
      const url = isEdit ? `${tempUrl}/${payload.prod_no}` : tempUrl;
      const method = isEdit ? 'put' : 'post';
      const { response, message } = await CallServer({ method, url, data: payload });
      if (isEdit) {
        const index = this.products.map((el) => el.prod_no).indexOf(String(response.prod_no));
        if (index > -1) {
          const newProduccts = JSON.parse(JSON.stringify(this.products));
          const temps = newProduccts[index].images;
          newProduccts.splice(index, 1, { ...response, images: temps });
          this.actionSetProduct(newProduccts);
        }
      } else {
        const newProducts = [response, ...JSON.parse(JSON.stringify(this.products))];
        this.actionSetProduct(newProducts);
      }
      if (cb) cb(message, null);
    } catch (error) {
      console.error(error);
      this.actionSetLoading(false);
    } finally {
      this.actionSetLoading(false);
    }
  }

  async loadData(page) {
    try {
      // TODO: Only Load in component product
      this.actionSetLoading(true);
      const url = `${ServerApi.URL_PRODUCT}?last_id=${page}`;
      const { response } = await CallServer({ method: 'get', url });
      const temps = [...this.products, ...response.slice(0)];
      if (temps.length >= 1) {
        this.actionSetProduct(temps);
      }
      if (response.length < 1) this.actionSetFinish(true);
    } catch (error) {
      console.log(error);
    } finally {
      this.actionSetLoading(false);
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
