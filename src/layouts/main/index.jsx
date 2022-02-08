import { observer } from 'mobx-react-lite';
import MainMenu from '../partials/MainMenu';
import MenuBar from '../partials/MenuBar';

function MainLayout(props) {
  return (
    <>
      <MainMenu {...props} />
      <MenuBar {...props} />
    </>
  );
}

export default observer(MainLayout);
