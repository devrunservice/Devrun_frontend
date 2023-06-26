import "styled-components";

declare module "styled-components"{
    export interface DefaultTheme {
      // 임의의 문자열 키를 추가
      [key: string]: string;
    }
}