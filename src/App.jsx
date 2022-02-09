import './App.css';
import { useRoutes } from 'react-router-dom';
import MainLayout from './layouts/main';
import routes from './routes';
import { observer } from 'mobx-react-lite';

function App(props) {
  const routing = useRoutes(routes(props.userStore.userLogin.isLogin, props));
  return (
    <>
      <MainLayout {...props} />
      {routing}
      {/* <Routes>
        <Route path="login" element={<Login {...store} />} />
        <Route
          path="admin"
          element={<AuthRequired {...store} Component={AdmDashboard} scops={['admin']} />}>
          <Route path="product/sync" element={<AdmSyncProduct {...store} />} />
          <Route path="product" element={<AdmManageProduct {...store} />} />
          <Route index element={<AdmManageProduct {...store} />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route index element={<ProductDashboard {...store} />} />
        <Route path="*" element={<NoMatch />} />
      </Routes> */}
    </>
  );
}

export default observer(App);
