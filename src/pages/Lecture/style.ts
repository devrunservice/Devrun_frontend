import { styled } from "styled-components";
import {Arrow} from 'asset';
import * as I from "types";


export const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Title = styled.em`
  font-weight: 600;
  > span {
    color: ${(props: any) => props.theme.mainColor};
  }
`;


export const Tap = styled.div<I.Active>`
  width: 5.9375rem;
  border: 1px solid ${(props: any) => props.theme.borderC};
  height: 2.5rem;
  position: relative;
  box-sizing: content-box;
  border-radius: ${(props: any) => (props.$active ? "5px 5px 0 0" : "5px")};
`;
export const TapLabel = styled.p`
  font-size: 0.875rem;
  line-height: 2.5rem;
  padding-left: 0.625rem;
  cursor: pointer;
`;
export const Arr = styled(Arrow)<I.Active>`
  position: absolute;
  right: 0.625rem;
  bottom: 0;
  top: 0;
  margin: auto 0;
  transform: ${(props: any) => (props.$active ? "rotatez(-180deg)" : "")};
  transition: all 0.3s;
`;
export const TapUl = styled.ul`
  position: absolute;
  border: 1px solid ${(props: any) => props.theme.borderC};
  background: ${(props: any) => props.theme.bgColor};
  width: 100%;
  top: 2.5rem;
  padding: 0.625rem 0;
  box-sizing: content-box;
  left: -1px;
`;
export const TapLi = styled.li`
  font-size: 0.875rem;
  cursor: pointer;
  height: 2rem;
  line-height: 2rem;
  padding-left: 0.625rem;
`;


export const LectureCardUl = styled.ul`
    display:flex;
    gap:20px;
`