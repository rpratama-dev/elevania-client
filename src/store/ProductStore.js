/* eslint-disable no-unused-vars */
import { action, computed, makeObservable, observable, autorun, runInAction } from 'mobx';
import CallServer from '../utils/CallServer';
import ServerApi from '../utils/ServerApi';

class ProductStore {
  constructor() {
    this.finished = false;
    this.page = 1;
    this.products = [];
    this.loading = false;
    makeObservable(this, {
      products: observable,
      loading: observable,
      finished: observable,
      page: observable,
    });
    // autorun(this.logStoreDetails());
    runInAction(this.prefetchData());
  }

  async loadData(page) {
    try {
      console.log('loaded');
      this.loading = true;
      const url = `${ServerApi.URL_PRODUCT}?last_id=${page}`;
      const { response } = await CallServer({ method: 'get', url });
      const temps = [...this.products, ...response.slice(0)];
      if (temps.length >= 1) {
        this.products = temps;
      }
      if (response.length < 1) this.finished = true;
    } catch (error) {
      console.log(error);
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
