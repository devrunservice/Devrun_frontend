import React, {useEffect} from 'react';
import {Outlet, useLocation, useParams} from 'react-router-dom';
import {Footer, Header, MypageNav} from 'components';
import * as St from 'style/Common';
import MetaTag from './MetaTag';

const App = () => {
  const params = useParams();

  const location = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);
  const hideHeader =
    location.pathname === '/signup' ||
    location.pathname === '/signupconfirm' ||
    location.pathname === '/signupcompletion' ||
    location.pathname === '/login' ||
    location.pathname === '/auth/kakao/callback' ||
    location.pathname === '/kakaologin' ||
    location.pathname === '/findaccount/id' ||
    location.pathname === '/findaccount/password' ||
    location.pathname === `/videoView/${params.lectureId}/${params.videoId}`;

  const hideFooter =
    location.pathname === '/signup' ||
    location.pathname === '/signupconfirm' ||
    location.pathname === '/signupcompletion' ||
    location.pathname === '/login' ||
    location.pathname === '/auth/kakao/callback' ||
    location.pathname === '/kakaologin' ||
    location.pathname === '/findaccount/id' ||
    location.pathname === '/findaccount/password' ||
    location.pathname === `/videoView/${params.lectureId}/${params.videoId}`;

  const myPage =
    location.pathname === '/profile' ||
    location.pathname === '/profileupdate' ||
    location.pathname === '/certifications' ||
    location.pathname === `/certifications/${params.lectureId}` ||
    location.pathname === '/dashboard' ||
    location.pathname === '/learning' ||
    location.pathname === '/notes' ||
    location.pathname === `/notes/${params.lectureId}` ||
    location.pathname === `/notes/${params.lectureId}/${params.noteId}` ||
    location.pathname === '/questions' ||
    location.pathname === `/questions/${params.questionId}` ||
    location.pathname === '/coupon' ||
    location.pathname === '/receipt' ||
    location.pathname === '/createcoupon' ||
    location.pathname === '/point' ||
    location.pathname === '/createVideo' ||
    location.pathname ===
      `/lecture/${encodeURIComponent(`${params.lectureBigCategory}`)}`;

  return (
    <>
      <MetaTag/>
      {!hideHeader && <Header />}
      {!myPage ? (
        <Outlet />
      ) : (
        <St.AppSection>
          <div>
            <MypageNav />
          </div>
          <div>
            <Outlet />
          </div>
        </St.AppSection>
      )}

      {!hideFooter && <Footer />}
    </>
  );
};

export default App;
