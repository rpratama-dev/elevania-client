import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/main';
// import AuthStore from './store/auth.store';
import { AdmDashboard, AdmManageProduct, AdmSyncProduct, Login } from './pages';
import { ProductDashboard } from './pages';

function App() {
  // const authSstore = new AuthStore();
  return (
    <>
      <MainLayout />

      <Routes>
        <Route path="login" element={<Login />} />

        <Route path="admin" element={<AdmDashboard />}>
          <Route index element={<AdmSyncProduct />} />
          <Route path="product" element={<AdmManageProduct />} />
          <Route path="product/sync" element={<AdmSyncProduct />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route index element={<ProductDashboard />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

function NoMatch() {
  return <h1>NoMatch</h1>;
}

export default App;
