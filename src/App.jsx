import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/main';
// import AuthStore from './store/auth.store';
import { AdmDashboard, AdmManageProduct, AdmSyncProduct, Login } from './pages';
import { ProductDashboard } from './pages';
import ProductStore from './store/ProductStore';
import UserStore from './store/UserStore';
import SyncStore from './store/SyncStore';

function App() {
  // const authSstore = new AuthStore();

  const productStore = new ProductStore();
  const userStore = new UserStore();
  const syncStore = new SyncStore();

  return (
    <>
      <MainLayout store={userStore} />
      <Routes>
        <Route path="login" element={<Login store={userStore} />} />
        <Route path="admin" element={<AdmDashboard store={productStore} />}>
          <Route index element={<AdmManageProduct store={productStore} />} />
          <Route path="product" element={<AdmManageProduct store={productStore} />} />
          <Route path="product/sync" element={<AdmSyncProduct store={syncStore} />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route index element={<ProductDashboard store={productStore} />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

function NoMatch() {
  return <h1>NoMatch</h1>;
}

export default App;
