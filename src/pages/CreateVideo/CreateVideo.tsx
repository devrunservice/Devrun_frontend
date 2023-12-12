import React, { useEffect, useState } from 'react';
import { CreateNewVideo,CreateVideoTwo } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import GoogleLoginButton from 'components/Login/GoogleLogin/GoogleLogin';
// import googleLoginReducer from '../../redux/reducer/googleLoginReducer';
import { /* getCookie, */ setCookie } from 'utils/cookies';
import { /* setGoogleLogin, getGoogleToken, */ setUrlToken} from '../../redux/reducer/googleLoginReducer'

export interface ButtonProps {
  ChangePage: React.ButtonHTMLAttributes<HTMLButtonElement>;
  onClick: () => void;
}

const CreateVideo = () => {
  const dispatch = useDispatch();
  const googleStore = useSelector((state:RootState)=>state.googleLoginSlice)
  const [createPage, setCreatePage] = useState<number>(1);
  const ChangePage = () => {
    setCreatePage(2);
  };
  const PrevPage = () => {
    setCreatePage(1)
  }
  
  const successGoogleLogin = (res: any) => {
    console.log('res',res)
    const token = res.credential;
    const googleAuthUrl = "https://accounts.google.com/o/oauth2/auth";
    const redirectUri = "http://localhost:3000/createVideo";
    const clientId =
      "385481592077-6irgmtusl13jsreqis43b8e76pck582a.apps.googleusercontent.com";
    const scope = "https://www.googleapis.com/auth/youtube.upload";
    const authUrl = `${googleAuthUrl}?client_id=${clientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&response_type=token&scope=${encodeURIComponent(scope)}`;
    window.location.href = authUrl;
    setCookie("googleToken", token);
  };

  useEffect(()=> {
    const getUrl = window.location.href
    const urlParams = new URLSearchParams(getUrl.split('#')[1]);
    const accessToken = urlParams.get('access_token');
    const tokenType = urlParams.get('token_type');
    console.log('accessToken',accessToken)
    console.log('tokenType',tokenType)
    dispatch(setUrlToken(accessToken))
  },[])

  // const hasToken = !! getCookie('googleToken')
  
  const showComponent = () => {
    if (createPage === 1) return <CreateNewVideo ChangePage={ChangePage} />;
    if (createPage === 2) return <CreateVideoTwo PrevPage={PrevPage} />;
  };
  return (
    <div>
      {!googleStore.urlToken ? (
        <GoogleLoginButton successGoogleLogin={successGoogleLogin} />
      ) : (
        showComponent()
      )}
    </div>
  );
};

export default CreateVideo;
