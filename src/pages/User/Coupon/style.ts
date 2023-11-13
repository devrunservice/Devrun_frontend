import { styled } from "styled-components";
import * as I from "types";

export const Code = styled.div`
  background: ${(props: any) => props.theme.bgGrayColor};
  padding: 1.25rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  margin-top:1.875rem;
`;
export const CodeLabel = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${(props: any) => props.theme.black};
`;
export const InputWrap = styled.form`
  display: flex;
  align-items: center;
  gap: 0.625rem
`;
export const Input = styled.input`
  height: 2.5rem;
  border-radius: 5px;
  outline: 0;
  width: 30rem;
  padding: 0 0.625rem;
  border: 1px solid ${(props: any) => props.theme.borderC};
  &:focus {
    border: 1px solid ${(props: any) => props.theme.mainColor};
  }
`;
export const Tap = styled.div`
  display: flex;
  align-item: center;
  width: 100%;
  margin-top: 2.5rem;
  margin-bottom:1.875rem;
`;
export const TapBtn = styled.button<I.Active>`
  flex: 3.3;
  background: ${(props: any) =>
    props.$active ? props.theme.bgColor : props.theme.bgGrayColor};
  height: 3.125rem;
  border: 1px solid
    ${(props: any) =>
      props.$active ? props.theme.borderC : props.theme.bgGrayColor};
  border-bottom: 1px solid
    ${(props: any) =>
      props.$active ? props.theme.bgColor : props.theme.borderC};
`;
export const Content = styled.ul`
  flex-wrap: wrap;
  display:flex;
  gap: 1.3125rem;
 
`;
export const Section = styled.section`
  min-height: 38.25rem;
`;
export const CodeNum = styled.div`
  text-align: center;
  width: 100%;
  padding: 40px 0;
  display: flex;
  height: 300px;
  flex-direction: column;
  justify-content: center;
  > p {
    font-weight: 600;
    color: 1px solid ${(props: any) => props.theme.black};
    font-size: 1.125rem;
    margin-bottom: 20px;
  }
  > span {
    font-size: 0.875rem;
    font-weight: 500;
  }
  > em {
    font-size: 0.875rem;
    font-weight: 500;
    color: 1px solid ${(props: any) => props.theme.mainColor};
  }
`;