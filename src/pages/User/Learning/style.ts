import {styled} from 'styled-components';
 import {Arrow} from 'asset';
import * as I from 'types';

export const LearnCon = styled.div`
  width: 100%;
`;
// export const TapWrap = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 20px;
// `;
export const Left = styled.div`
  display: flex;
  gap: 0.625rem;
  align-items: center;
  margin-bottom: 20px;
`;
export const Btn = styled.button<I.Active>`
  border-radius: 5px;
  width: 5.3125rem;
  color: ${(props: any) =>
    props.$active ? props.theme.textWhite : props.theme.mainColor};
  border: 1px solid ${(props: any) => props.theme.mainColor};

  background: ${(props: any) =>
    props.$active ? props.theme.mainColor : props.theme.textWhite};
  height: 2.5rem;
`;
export const Tap = styled.div<I.Active>`
  width: 5.9375rem;
  border: 1px solid ${(props: any) => props.theme.borderC};
  height: 2.5rem;
  position: relative;
  box-sizing: content-box;
  border-radius: ${(props: any) => (props.$active ? '5px 5px 0 0' : '5px')};
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
  transform: ${(props: any) => (props.$active ? 'rotatez(-180deg)' : '')};
  transition: all 0.3s;
`;
export const TapUl = styled.ul`
  position: absolute;
  border: 1px solid ${(props: any) => props.theme.borderC};
  width: 100%;
  top: 2.5rem;
  padding: 0.625rem 0;
  box-sizing: content-box;
  left: -1px;
`;
export const TapLi = styled.li`
  font-size: 0.875rem
  cursor: pointer;
  height: 2rem;
  line-height: 2rem;
  padding-left: 0.625rem;
`;

export const LearnUl = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.875rem;
  min-height: 53.8125rem;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 1.875rem;
`;
export const Title = styled.h4`
  line-height: 1;
  font-size: 1.5625rem;
  font-weight: 700;
  color: ${(props: any) => props.theme.black};
  display: flex;
  align-items: flex-end;
`;
