import { Cookies } from 'react-cookie';

const cookies = new Cookies();

// 쿠키에 값을 저장할 때
export const setCookie = (name: string, value: string, option?:{expires?:Date}) => {
    const date = new Date();
    // 우선 하루로 설정 
    const time = new Date(date.setDate(date.getDate() + 1))
    const defaultOption = {expires:new Date(time)}
    return cookies.set(name, value, option || defaultOption);
}

// 쿠키에 있는 값을 꺼낼 때
export const getCookie = (name:string) => (
     cookies.get(name)
)

// 쿠키를 지울 때
export const removeCookie = (name: string) => (
    cookies.remove(name)
)



// export const KakaoLoginBtn = () => {
//   const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
//   const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
//   const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
//   window.location.href = KAKAO_AUTH_URI;
// };
