import React from "react";
import { Footer, Header, MypageNav } from "components";
import { Outlet, useLocation } from "react-router-dom";
import * as St from "styles";

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
    location.pathname === "/studymanage" ||
    location.pathname === "/notes" ||
    location.pathname === "/questions" ||
    location.pathname === "/coupon" ||
    location.pathname === "/receipt" ||
    location.pathname === "/save";

  return (
    <>
      {!hideHeader && <Header />}
      {!myPage ? (
        <Outlet />
      ) : (
        <St.AppSection>
          <div className="left-panel">
            <MypageNav />
          </div>
          <div className="right-panel">
            <Outlet />
          </div>
        </St.AppSection>
      )}

      {!hideFooter && <Footer />}
    </>
  );
};

export default App;
