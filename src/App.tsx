import SearchBar from './components/SearchBar/SearchBar';
import { Outlet } from "react-router-dom";
// import HomePage from 'components/Homes/Home';

function App() {
  return (
    <>
      {/* <SearchBar /> */}
      <Outlet />
      {/* <HomePage /> */}
    </>
  );
}

export default App;
