import React, { useState } from 'react';
import { CreateNewVideo,CreateVideoTwo } from 'components';
import { useDispatch/* , useSelector */ } from 'react-redux';
// import { RootState } from 'redux/store';
import GoogleLoginButton from 'components/GoogleLogin/GoogleLogin';
import { getCookie, setCookie } from 'utils/cookies';
import axios from 'axios';
import { setGoogleLogin, getGoogleToken} from '../../redux/reducer/googleLoginReducer'

export interface ButtonProps {
  ChangePage: React.ButtonHTMLAttributes<HTMLButtonElement>
  onClick: () => void;
}

const CreateVideo = () => {
  const dispatch = useDispatch()
  // const googleStore = useSelector((state:RootState)=>state.googleLoginSlice)
  const [createPage, setCreatePage] = useState<number>(1)
  const ChangePage = () => {
    setCreatePage(2)
  }
  const PrevPage = () => {
    setCreatePage(1)
  }
  // const successGoogleLogin = (res:any) => {
  //   console.log('res',res)
  //   const googleAuthUrl = 'https://accounts.google.com/o/oauth2/auth';
  //   const redirectUrl = 'http://localhost:3000/auth/google/callback'
  //   const clientId = '385481592077-6irgmtusl13jsreqis43b8e76pck582a.apps.googleusercontent.com'
  //   const scope = 'openid profile email https://www.googleapis.com/auth/youtube'

  //   window.location.href= `${googleAuthUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=code&scope=${scope};`
  //   // // const url = 'https://devrun.site/api/auth/googlelogin'
  //   // const token = res.credential
  //   // setCookie('googleToken', token ,{path:'/createVideo'})
  //   // dispatch(getGoogleToken(res.data))
  //   // // window.location.href ='https://accounts.google.com/o/oauth2/auth'
  //   // console.log('여기',getCookie('googleToken'))
  //   // // axios.post(url, {token}).then((response)=>{
  //   //   //   setCookie('googleToken', token ,{path:'/createVideo'})
  //   // //   console.log('response',response.data)
  //   // //   dispatch(setGoogleLogin(true))
  //   // //   // window.location.reload()
  //   // // })
  // }
  const successGoogleLogin = (res: any) => {
    const token = res.credential
    const googleAuthUrl = 'https://accounts.google.com/o/oauth2/auth';
    // const redirectUri = 'http://localhost:3000/auth/google/callback';
    const redirectUri = 'http://localhost:3000/createVideo';
    const clientId = '385481592077-6irgmtusl13jsreqis43b8e76pck582a.apps.googleusercontent.com';
    const scope = 'https://www.googleapis.com/auth/youtube.upload';
    // const scope = 'openid profile email https://www.googleapis.com/auth/youtube.upload';
    
    const authUrl =
    `${googleAuthUrl}?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=token&scope=${encodeURIComponent(scope)}`;
    window.location.href = authUrl;
    setCookie('googleToken', token)
  };
  const hasToken = !! getCookie('googleToken')
  
  console.log('ttttt',hasToken)
  const showComponent = () => {
    if(createPage === 1) return <CreateNewVideo ChangePage={ChangePage} />
    if(createPage === 2) return <CreateVideoTwo PrevPage={PrevPage} />
  }
  return (
    <div>
      {!hasToken ? <GoogleLoginButton successGoogleLogin={successGoogleLogin} /> : showComponent()}
    </div>
    // showComponent()
  );
};

export default CreateVideo;