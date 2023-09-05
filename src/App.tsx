import React from 'react';
import {Footer, Header, MypageNav} from 'components';
import {Outlet, useLocation} from 'react-router-dom';
import * as St from 'style/Common';

const App = () => {
  const location = useLocation();
  const hideHeader =
    location.pathname === '/signup' ||
    location.pathname === '/signupconfirm' ||
    location.pathname === '/login' ||
    location.pathname === '/auth/kakao/callback/login' ||
    location.pathname === '/findaccount:id' ||
    location.pathname === '/findaccount:password' ||
    location.pathname === '/auth/kakao/callback';

  const hideFooter =
    location.pathname === '/signup' ||
    location.pathname === '/signupconfirm' ||
    location.pathname === '/login' ||
    location.pathname === '/auth/kakao/callback/login' ||
    location.pathname === '/findaccount:id' ||
    location.pathname === '/findaccount:password' ||
    location.pathname === '/auth/kakao/callback';

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
    location.pathname === '/createcoupon';

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
