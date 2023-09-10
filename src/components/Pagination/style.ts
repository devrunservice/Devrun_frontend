import { styled } from "styled-components";
import * as I from "types";

export const PagingWrap = styled.div`
  margin: 2.5rem auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
`;
export const PagingArr = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.1875rem;
  font-size: 0.75rem;

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
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.1875rem;
  font-size: 0.75rem;
`;
