import { styled,css } from "styled-components";
import { IButton } from "types";
export const Button = styled.button<IButton>`
  font-size: ${(props) => props.theme.fontSize14px};
  border-radius: 5px;
  height: 40px;
  
`;


export const Size: { [key: string]: any } = {
  ms: css`
    width: 85px;
  `,
  md: css`
    width: 100px;
  `,
  lg: css`
    width: 100%;
  `,
};
export const Color: { [key: string]: any } = {
  point: css`
    background: ${(props: any) => props.theme.textPoint};
    color: ${(props: any) => props.theme.textWhite};
  `,
  gray: css`
    background: ${(props: any) => props.theme.bgGrayColor};
    color: ${(props: any) => props.theme.textBlack};
  `,
};