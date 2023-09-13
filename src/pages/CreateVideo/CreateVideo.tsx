import React, { useState } from 'react';
import { CreateNewVideo,CreateVideoTwo } from 'components';
import GoogleLoginButton from 'components/GoogleLogin/GoogleLogin';
import { authAxios } from 'utils/instance';

export interface ButtonProps {
  ChangePage: React.ButtonHTMLAttributes<HTMLButtonElement>
  onClick: () => void;
}

const CreateVideo = () => {
  const [createPage, setCreatePage] = useState<number>(1)
  const [isLogin, setIsLogin] = useState(false)
  const ChangePage = () => {
    setCreatePage(2)
  }
  console.log(setIsLogin)
  const PrevPage = () => {
    setCreatePage(1)
  }
  const successGoogleLogin = () => {
    const url = '/api/auth/googlelogin'
    authAxios.post(url).then(res=>console.log(res)).catch(err=>console.log(err))
  }

  const showComponent = () => {
    if(createPage === 1) return <CreateNewVideo ChangePage={ChangePage} />
    if(createPage === 2) return <CreateVideoTwo PrevPage={PrevPage} />
  }
    console.log(isLogin)
  return (
    <div>
      {!isLogin ? <GoogleLoginButton successGoogleLogin={successGoogleLogin} /> : showComponent()}
    </div>
  );
};

export default CreateVideo;