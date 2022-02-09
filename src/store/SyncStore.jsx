import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import CallServer from '../utils/CallServer';
import errorHandler from '../utils/errorHandler';
import ServerApi from '../utils/ServerApi';

class SyncStore {
  constructor() {
    this.syncState = {
      finished: false,
      page: 1,
      products: [],
      importeds: [],
      loading: false,
      selectedIds: [],
      errorInfo: '',
    };

    makeObservable(this, {
      syncState: observable,
      setSyncState: action,
      products: computed,
    });
    runInAction(this.onRun());
  }

  get products() {
    return this.syncState.products;
  }

  onRun() {
    return () => {
      console.log('This auto run');
    };
  }

  /**
   *
   * @param {'finished' | 'page' | 'products' | 'importeds' | 'loading' | 'selectedIds'} key
   * @param {any} value
   * @returns
   */
  setSyncState(key, value) {
    const keys = Object.keys(this.syncState);
    if (!keys.includes(key)) this.syncState.errorInfo = 'Invalid Key SyncState';
    else this.syncState[key] = value;
  }

  handleChange(value, _, checked) {
    const isImported = this.syncState.importeds.indexOf(value);
    if (isImported > -1) return;
    const newIDs = [...this.syncState.selectedIds];
    const index = newIDs.indexOf(value);
    console.log(index, checked);
    if (index > -1) newIDs.splice(index, 1);
    if (index < 0) newIDs.push(value);
    this.setSyncState('selectedIds', newIDs);
  }

  async handleSubmit(callback) {
    try {
      this.setSyncState('loading', true);
      const url = `${ServerApi.URL_PRODUCT}/sync`;
      const data = { selectedProducts: this.syncState.selectedIds };
      const reponse = await CallServer({ method: 'post', url, data });
      if (callback) callback(reponse);
    } catch (error) {
      const msg = errorHandler(error);
      if (typeof msg === 'string') alert(msg);
    } finally {
      this.setSyncState('loading', false);
    }
  }

  async loadProduct() {
    try {
      console.log('load product');
      this.setSyncState('loading', true);
      const url = `${ServerApi.URL_PRODUCT}/sync?pageNumber=${this.syncState.page}`;
      const { response } = await CallServer({ method: 'get', url });
      const temps = [...this.syncState.products, ...response.slice(0)];

      console.log('load product', temps);
      const selfs = temps.map((el) => el.sku);
      if (temps.length > 0) {
        const newProducts = temps.filter((value, index) => {
          return selfs.indexOf(value.sku) === index;
        });
        this.setSyncState('products', newProducts);
      }
      if (response.length < 1) this.setSyncState('finished', true);
    } catch (error) {
      console.log(error);
    } finally {
      this.setSyncState('loading', false);
    }
  }

  async loadImported() {
    try {
      const url = `${ServerApi.URL_PRODUCT}/sync/imported`;
      const { response } = await CallServer({ method: 'get', url });
      this.setSyncState('importeds', response);
    } catch (error) {
      console.error(error);
    }
  }
}

export default SyncStore;
