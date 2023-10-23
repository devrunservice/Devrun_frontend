import React from 'react';
import { Outlet, useLocation } from "react-router-dom";
import {Footer, Header, MypageNav} from 'components';
import MetaTag from 'utils/MetaTag';
import * as St from 'style/Common';

const App = () => {
  const location = useLocation();
  const hideHeader =
    location.pathname === '/signup' ||
    location.pathname === '/signupconfirm' ||
    location.pathname === '/signupcompletion' ||
    location.pathname === '/login' ||
    location.pathname === '/auth/kakao/callback/login' ||
    location.pathname === '/findaccount/id' ||
    location.pathname === '/findaccount/password' ||
    location.pathname === '/auth/kakao/callback'||
    location.pathname === '/videoView';

  const hideFooter =
    location.pathname === "/signup" ||
    location.pathname === "/signupconfirm" ||
    location.pathname === "/signupcompletion" ||
    location.pathname === "/login" ||
    location.pathname === "/auth/kakao/callback/login" ||
    location.pathname === "/findaccount/id" ||
    location.pathname === "/findaccount/password" ||
    location.pathname === "/auth/kakao/callback" ||
    location.pathname === "/videoView";

  const myPage =
    location.pathname === '/profile' ||
    location.pathname === '/profileupdate' ||
    location.pathname === '/cert' ||
    location.pathname === '/CertDetail' ||
    location.pathname === '/dashboard' ||
    location.pathname === '/learning' ||
    location.pathname === '/notes' ||
    location.pathname === '/questions' ||
    location.pathname === '/coupon' ||
    location.pathname === '/receipt' ||
    location.pathname === '/createcoupon' ||
    location.pathname === '/point';

  return (
    <>
      <MetaTag
        content="개발, 강의, 포트폴리오, 공부, 링크, 링크모음"
        title="DevRun"
        description="개발자 공부를 위한 강의사이트 입니다."
        img=""
        url="/home"
      />
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
