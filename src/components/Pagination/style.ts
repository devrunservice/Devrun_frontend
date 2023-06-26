import { styled } from "styled-components";
import { IPageColor } from "types";

export const PagingWrap = styled.div`
    margin:40px auto 0;
    display:flex;
    justify-content: center;
    align-items: center;
    gap:10px;
`
export const Paging = styled.button<IPageColor>`
  width: 40px;
  height: 40px;
  border-radius: 3px;
  background: ${(props) => (props.isActive ? "blue" : "black")}
  text-align: center;
  line-height: 40px;
  font-size: ${(props: any) => props.theme.fontSize12px};
  cursor: pointer;

  &:hover {
    background: ${(props: any) => props.theme.textPoint};
    color: ${(props: any) => props.theme.textWhite};
  }
  > svg {
    fill: ${(props: any) => props.theme.textColor};
  }
  &:hover svg {
    fill: ${(props: any) => props.theme.textWhite};
  }
`;
