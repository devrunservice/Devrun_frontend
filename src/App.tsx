import Footer from 'components/Footer/index';
import SearchBar from './components/SearchBar/SearchBar';
import {Outlet, useLocation} from 'react-router-dom';

function App() {
  const location = useLocation();
  const hideSearchBar = location.pathname === '/signup';
  const hideFooter = location.pathname === '/signup';

  return (
    <>
      {!hideSearchBar && <SearchBar />}
      <Outlet />
      {!hideFooter && <Footer />}
    </>
  );
}

export default App;
