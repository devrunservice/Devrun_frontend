import Footer from 'components/Footer/index';
import SearchBar from './components/SearchBar/SearchBar';
import {Outlet, useLocation} from 'react-router-dom';
import Main from 'pages/Main/Main';

function App() {
  const location = useLocation();
  const hideSearchBar =
    location.pathname === '/signup' || location.pathname === '/login';
  const hideFooter =
    location.pathname === '/signup' || location.pathname === '/login';

  return (
    <>
      {!hideSearchBar && <SearchBar />}
      <Outlet />
      {!hideFooter && <Footer />}
    </>
  );
}

export default App;
