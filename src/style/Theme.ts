import { DefaultTheme,createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    
    //폰트
    @font-face {
    font-family: 'SUIT-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Bold.woff2') format('woff2');
    font-weight: Bold;
    font-style: normal;
    }
    @font-face {
        font-family: 'SUIT-SemiBold';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-SemiBold.woff2') format('woff2');
        font-weight: SemiBold;
        font-style: normal;
    }
    @font-face {
        font-family: 'SUIT-Regular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'SUIT-Medium';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Medium.woff2') format('woff2');
        font-weight: Medium;
        font-style: normal;
    }

    body {
        color: ${({ theme }) => theme.textColor};
        background-color: ${({ theme }) => theme.bgColor};
        font-size:${({ theme }) => theme.fontSize14px};
        font-weight:${({ theme }) => theme.fontRegular};
        font-family: 'SUIT';
    }
`;

export const defaultTheme: DefaultTheme = {
  bgColor: "#fff",
  bgGrayColor: "#f7f7f7",
  mainColor: '#604B8E',
  fontRegular: "400",
  fontMedium: "500",
  fontSemiBold: "600",
  fontBold: "700",
  fontSize14px: "14px",
  fontSize16px: "16px",
  fontSize18px: "18px",
  textBlack: "#171717",
  textColor: "#676767",

};