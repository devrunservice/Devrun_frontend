/* eslint-disable @typescript-eslint/no-unused-vars */
import { login } from "utils/api";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

// 쿠키에 값을 저장할 때
export const setCookie = (name: string, value: string, option?: any) =>
  cookies.set(name, value, { ...option });

// 쿠키에 있는 값을 꺼낼 때
export const getCookie = (name: string) => cookies.get(name);

// 쿠키를 지울 때
export const removeCookie = (name: string) => cookies.remove(name);

