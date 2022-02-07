import { AdmManageProduct } from '../..';

export default function Dashboard(props) {
  const config = {
    isCustomer: true,
  };

  return (
    <>
      <section className="products">
        <AdmManageProduct config={config} {...props} />
      </section>
    </>
  );
}
