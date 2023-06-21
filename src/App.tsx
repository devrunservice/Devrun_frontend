import { Footer, Header } from 'components';
import {Outlet, useLocation} from 'react-router-dom';

function App() {
  const location = useLocation();
  const hideHeader =
    location.pathname === '/signup' ||
    location.pathname === '/login' ||
    location.pathname === '/findid';
  const hideFooter =
    location.pathname === '/signup' ||
    location.pathname === '/login' ||
    location.pathname === '/findid';

  return (
    <>
      {!hideHeader && <Header />}
      <Outlet />
      {!hideFooter && <Footer />}
    </>
  );
}

export default App;
