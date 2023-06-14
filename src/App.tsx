import Footer from 'components/Footer';
import SearchBar from './components/SearchBar/SearchBar';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <SearchBar />
      <Outlet />
      <Footer/>
    </>
  );
}

export default App;
