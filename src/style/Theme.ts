import { DefaultTheme, createGlobalStyle } from "styled-components";

import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    
    //폰트
    @font-face {
        font-family: 'Pretendard';
        src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff");
        font-weight: 400;
    }
    @font-face {
        font-family: 'Pretendard';
        src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff");
        font-weight: 500;
    }
    @font-face {
        font-family: 'Pretendard';
        src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff");
        font-weight: 600;
    }
    @font-face {
        font-family: 'Pretendard';
        src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff");
        font-weight: 700;
    }
    *{
        box-sizing: border-box;
        margin: 0;
        font-family: 'Pretendard';
        line-height: 1.5;
    }
    body {
        color: ${({ theme }) => theme.textColor};
        background-color: ${({ theme }) => theme.bgColor};
        font-size:1rem;
        font-weight:400;
        font-family: 'Pretendard';
        display: flex;
        flex-direction: column;
        list-style: none;
        line-height: 1.5;
    }

    #root {
        width: 100%;
    }
    button{
        cursor: pointer;
        font-size:0.875rem;
        color: ${({ theme }) => theme.black};
        border: 0;
    }
`;

export const defaultTheme: DefaultTheme = {
  bgColor: "#fff",
  bgGrayColor: "#f7f7f7",
  bgBlack: "#333",
  bgNavcolor: "#DBD3EB",
  mainColor: "#604B8E",
  brandColor: "#5F4B8B",
  textColor: "#676767",
  textRed: "#F03B43",
  textYello: "#FFC821",
  textWhite: "#fff",
  borderC: "#ccc",
  borderD: "#ddd",
  black: "#171717",
  border49: "#494949",
};
