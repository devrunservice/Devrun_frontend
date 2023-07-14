import React from "react";
import { Footer, Header, MypageNav } from "components";
import { Outlet, useLocation } from "react-router-dom";
import * as St from "style/Common";

const App = () => {
  const location = useLocation();
  const hideHeader =
    location.pathname === "/signup" ||
    location.pathname === "/login" ||
    location.pathname === "/findaccount:id" ||
    location.pathname === "/findaccount:password";

  const hideFooter =
    location.pathname === "/signup" ||
    location.pathname === "/login" ||
    location.pathname === "/findaccount:id" ||
    location.pathname === "/findaccount:password";

  const myPage =
    location.pathname === "/profile" ||
    location.pathname === "/profileupdate" ||
    location.pathname === "/certificate" ||
    location.pathname === "/dashboard" ||
    location.pathname === "/learning" ||
    location.pathname === "/certificate";

  return (
    <>
      {!hideHeader && <Header />}
      {!myPage ? (
          <Outlet />
      ) : (
        <St.AppSection>
          <MypageNav />
          <Outlet />
        </St.AppSection>
      )}

      {!hideFooter && <Footer />}
    </>
  );
};

export default App;
