import SearchBar from './components/SearchBar/SearchBar';
import {Outlet, useLocation} from 'react-router-dom';

function App() {
  const location = useLocation();
  const hideSearchBar = location.pathname === '/signup';

  return (
    <>
      {!hideSearchBar && <SearchBar />}
      <Outlet />
    </>
  );
}

export default App;
