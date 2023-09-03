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
        font-size:${({ theme }) => theme.size16};
        font-weight:${({ theme }) => theme.regular};
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
        font-size:${({ theme }) => theme.size14};
        color: ${({ theme }) => theme.black};
        border: 0;
    }
`;

export const defaultTheme: DefaultTheme = {
  regular: "400",
  medium: "500",
  semiBold: "600",
  bold: "700",
  size12: "12px",
  size14: "14px",
  size16: "16px",
  size18: "18px",
  size20: "20px",
  size25: "25px",
  size35: "35px",
  size40: "40px",
  size45: "45px",
  size50: "50px",
  size85: "85px",
  size90: "90px",
  size95: "95px",
  size120: "120px",
  size100: "100%",
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
  black: "#171717",
  border49: "#494949",
};
