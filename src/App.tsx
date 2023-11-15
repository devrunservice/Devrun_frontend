import React, { useEffect } from 'react';
import { Outlet, useLocation, useParams } from "react-router-dom";
import {Footer, Header, MypageNav} from 'components';
import MetaTag from 'MetaTag';
import * as St from 'style/Common';

const App = () => {
  const params = useParams();

  const location = useLocation();
  useEffect(() => {
    window.scroll(0,0)
  }, [location]);
  const hideHeader =
    location.pathname === "/signup" ||
    location.pathname === "/signupconfirm" ||
    location.pathname === "/signupcompletion" ||
    location.pathname === "/login" ||
    location.pathname === "/auth/kakao/callback/login" ||
    location.pathname === "/findaccount/id" ||
    location.pathname === "/findaccount/password" ||
    location.pathname === "/auth/kakao/callback" ||
    location.pathname ===
      `/videoView/${params.lectureId}/${params.videoId}`;

  const hideFooter =
    location.pathname === "/signup" ||
    location.pathname === "/signupconfirm" ||
    location.pathname === "/signupcompletion" ||
    location.pathname === "/login" ||
    location.pathname === "/auth/kakao/callback/login" ||
    location.pathname === "/findaccount/id" ||
    location.pathname === "/findaccount/password" ||
    location.pathname === "/auth/kakao/callback" ||
    location.pathname ===
      `/videoView/${params.lectureId}/${
        params.videoId
      }`;

  const myPage =
    location.pathname === "/profile" ||
    location.pathname === "/profileupdate" ||
    location.pathname === "/cert" ||
    location.pathname === "/CertDetail" ||
    location.pathname === "/dashboard" ||
    location.pathname === "/learning" ||
    location.pathname === '/notes' ||
    location.pathname === `/notes/${params.lectureId}` ||
    location.pathname === `/notes/${params.lectureId}/${params.noteId}` ||
    location.pathname === "/questions" ||
    location.pathname === "/coupon" ||
    location.pathname === "/receipt" ||
    location.pathname === "/createcoupon" ||
    location.pathname === "/point" ||
    location.pathname === "/createVideo" ||
    location.pathname ===
      `/lecture/${encodeURIComponent(`${params.lectureBigCategory}`)}`;




  return (
    <>
      <MetaTag
        content="개발, 강의, 포트폴리오, 공부, 링크, 링크모음"
        title="DevRun"
        description="개발자 공부를 위한 강의사이트 입니다. 강의결제, 강의등록등 여타 다른 사이트들과 같이 서비스를 이용해보세요"
        img=""
        url="/"
      />
      {!hideHeader && <Header />}
      {!myPage ? (
        <Outlet />
      ) : (
        <St.AppSection>
          <div >
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
