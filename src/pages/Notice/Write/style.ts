import { styled } from "styled-components";
import * as I from "types";


export const Title = styled.h4`
  margin-bottom: 30px;
  font-size: ${(props: any) => props.theme.size25};
  font-weight: ${(props: any) => props.theme.bold};
  color: ${(props: any) => props.theme.black};
`;
export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  gap: 10px;
`;
export const Button = styled.button<I.Active>`
  width: ${(props: any) => props.theme.size85};
  border-radius: 5px;
  height: 40px;

  font-size: ${(props: any) => props.theme.size14};
  color: ${(props: any) =>
    props.$active ? props.theme.textWhite : props.theme.brandColor};
  background: ${(props: any) =>
    props.$active ? props.theme.brandColor : props.theme.bgColor};
  border: 1px solid
    ${(props: any) => (props.$active ? "" : props.theme.brandColor)};
`;