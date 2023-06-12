import SearchBar from './components/SearchBar/SearchBar';
import {Outlet} from 'react-router-dom';

function App() {
  return (
    <>
      <SearchBar />
      <Outlet />
    </>
  );
}

export default App;
