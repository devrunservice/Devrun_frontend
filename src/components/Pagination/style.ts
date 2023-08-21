import { styled } from "styled-components";
import * as I from "types";

export const PagingWrap = styled.div`
    margin:40px auto 0;
    display:flex;
    justify-content: center;
    align-items: center;
    gap:10px;
`
export const PagingArr = styled.button`
  width: ${(props: any) => props.theme.size40};
  height: ${(props: any) => props.theme.size40};
  border-radius: 3px;
  font-size: ${(props: any) => props.theme.size12};

  &:hover {
    background: ${(props: any) => props.theme.brandColor};
    color: ${(props: any) => props.theme.textWhite};
  }
  > svg {
    fill: ${(props: any) => props.theme.textColor};
  }
  &:hover svg {
    fill: ${(props: any) => props.theme.textWhite};
  }
`;
export const Paging = styled.button<I.Active>`
  background: ${(props) =>
    props.$active ? props.theme.brandColor : props.theme.bgGrayColor};
  color: ${(props) =>
    props.$active ? props.theme.textWhite : props.theme.textColor};
  width: ${(props: any) => props.theme.size40};
  height: ${(props: any) => props.theme.size40};
  border-radius: 3px;
  font-size: ${(props: any) => props.theme.size12};
`;
