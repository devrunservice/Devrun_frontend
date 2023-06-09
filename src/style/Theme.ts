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
        font-size:${({ theme }) => theme.fontSize16px};
        font-weight:${({ theme }) => theme.fontRegular};
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
        font-size:${({ theme }) => theme.fontSize14px};
        color: ${({ theme }) => theme.textBlack};
        border: 0;
    }
`;

export const defaultTheme: DefaultTheme = {
  fontRegular: "400",
  fontMedium: "500",
  fontSemiBold: "600",
  fontBold: "700",
  fontSize12px: "12px",
  fontSize14px: "14px",
  fontSize16px: "16px",
  fontSize18px: "18px",
  fontSize20px: "20px",
  fontSize25px: "25px",
  width85: "85px",
  width100: "100%",
  brandColor: "#5F4B8B",
  bgColor: "#fff",
  bgGrayColor: "#f7f7f7",
  bgBlack: "#333",
  bgNavcolor :"#DBD3EB",
  mainColor: "#604B8E",
  textBlack: "#171717",
  textColor: "#676767",
  textRed: "#F03B43",
  textPoint: "#5F4B8B",
  textWhite: "#fff",
  textGrayC: "#ccc",
  borderBlack: "#171717",
  border83: "#838383",
  border49: "#494949",
  borderGray: "#ddd",
};
