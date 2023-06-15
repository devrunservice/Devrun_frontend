import { Footer,Header } from 'components';
import {Outlet, useLocation} from 'react-router-dom';

function App() {
  const location = useLocation();
  const hideHeader =
    location.pathname === "/signUp" || location.pathname === "/login";
  const hideFooter =
    location.pathname === "/signUp" || location.pathname === "/login";

  return (
    <>
      {!hideHeader && <Header />}
      <Outlet />
      {!hideFooter && <Footer />}
    </>
  );
}

export default App;
