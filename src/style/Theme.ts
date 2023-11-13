import {DefaultTheme, createGlobalStyle} from 'styled-components';

import reset from 'styled-reset';

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
      /* latin */
        @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
    *{
        box-sizing: border-box;
        margin: 0;
        font-family: 'Pretendard';
        line-height: 1.5;
    }

    body {
        color: ${({ theme }: any) => theme.textColor};
        background-color: ${({ theme }: any) => theme.bgColor};
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
        color: ${({ theme }: any) => theme.textColor};
        border: 0;
        background:none
    }
`;

export const defaultTheme: DefaultTheme = {
    bgColor: "#fff",
    bgGrayColor: "#f7f7f7",
    bgBlack: "#333",
    bgNavcolor: "#DBD3EB",
    bg1c1c1c:"#1c1c1c",
    bg343a40: "#343a40",
    bg444: "#444",
    mainColor: "#604B8E",
    textColor: "#676767",
    textRed: "#F03B43",
    textYello: "#FFC821",
    textWhite: "#fff",
    text999:"#999",
    borderC: "#ccc",
    borderD: "#ddd",
    black: "#171717",
    border49: "#494949",
};
