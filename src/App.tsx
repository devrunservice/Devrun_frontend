import React from "react";
import { Footer, Header } from "components";
import { Outlet, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const hideHeader =
    location.pathname === "/signup" ||
    location.pathname === "/login" ||
    location.pathname === "/findid" ||
    location.pathname === "/findpassword";

  const hideFooter =
    location.pathname === "/signup" ||
    location.pathname === "/login" ||
    location.pathname === "/findid" ||
    location.pathname === "/findpassword";

  return (
    <>
      {!hideHeader && <Header />}
      <Outlet />
      {!hideFooter && <Footer />}
    </>
  );
};

export default App;
