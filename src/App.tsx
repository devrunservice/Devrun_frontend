import Footer from 'components/Footer';
import SearchBar from './components/SearchBar/SearchBar';
import { Outlet } from "react-router-dom";
import Main from 'pages/Main/Main';

function App() {
  return (
    <>
      {/* <SearchBar /> */}
      {/* <Outlet /> */}
      <Main />
      {/* <Footer/> */}
    </>
  );
}

export default App;
