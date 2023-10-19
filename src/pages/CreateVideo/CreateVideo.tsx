/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from "react";
import { CreateNewVideo, CreateVideoTwo } from "components";
import { useDispatch /* , useSelector */ } from "react-redux";
// import { RootState } from 'redux/store';
import GoogleLoginButton from "components/GoogleLogin/GoogleLogin";
import { getCookie, setCookie } from "utils/cookies";
// import axios from 'axios';
// import { setGoogleLogin, getGoogleToken} from '../../redux/reducer/googleLoginReducer'

export interface ButtonProps {
  ChangePage: React.ButtonHTMLAttributes<HTMLButtonElement>;
  onClick: () => void;
}

const CreateVideo = () => {
  const dispatch = useDispatch();
  // const googleStore = useSelector((state:RootState)=>state.googleLoginSlice)
  const [createPage, setCreatePage] = useState<number>(1);
  const ChangePage = () => {
    setCreatePage(2);
  };
  const PrevPage = () => {
    setCreatePage(1);
  };

  const successGoogleLogin = (res: any) => {
    const token = res.credential;
    const googleAuthUrl = "https://accounts.google.com/o/oauth2/auth";
    // const redirectUri = 'http://localhost:3000/auth/google/callback';
    const redirectUri = "http://localhost:3000/createVideo";
    const clientId =
      "385481592077-6irgmtusl13jsreqis43b8e76pck582a.apps.googleusercontent.com";
    const scope = "https://www.googleapis.com/auth/youtube.upload";
    // const scope = 'openid profile email https://www.googleapis.com/auth/youtube.upload';

    const authUrl = `${googleAuthUrl}?client_id=${clientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&response_type=token&scope=${encodeURIComponent(scope)}`;
    window.location.href = authUrl;
    setCookie("googleToken", token);
  };
  const hasToken = !!getCookie("googleToken");

  console.log("ttttt", hasToken);
  const showComponent = () => {
    if (createPage === 1) return <CreateNewVideo ChangePage={ChangePage} />;
    if (createPage === 2) return <CreateVideoTwo PrevPage={PrevPage} />;
  };
  return (
    <div>
      {!hasToken ? (
        <GoogleLoginButton successGoogleLogin={successGoogleLogin} />
      ) : (
        showComponent()
      )}
    </div>
    // showComponent()
  );
};

export default CreateVideo;
