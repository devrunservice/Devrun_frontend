import { styled } from "styled-components";
import * as I from "types";

export const DefaultWidth = styled.div`
  width: 1280px;
  margin: 0 auto;
`;

export const Title = styled.p`
  color: ${(props) => props.theme.black};
  margin-bottom: 0.6rem;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

// 회원가입, 로그인 input
export const Input = styled.input`
  text-indent: 0.5rem;
  border-radius: 5px;
  padding: 0.8rem 0;
  width: 100%;
  border: ${(props) => props.theme.borderC} 1px solid;
`;

// 에러 메세지
export const ErrorMessage = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.textRed};
  margin: 0.25rem 0;
`;

// 성공 메세지
export const SuccessMessage = styled(ErrorMessage)`
  color: ${(props) => props.theme.mainColor};
`;

export const Inner = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 3.75rem 0 6.25rem;
`;

// 마이페이지 화면 분할
export const AppSection = styled.div`
  display: flex;
  padding: 4rem 0;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  > div:first-child {
    flex: 2;
  }
  > div:last-child {
    flex: 8;
  }
`;
export const ButtonWrap = styled.div<I.Active>`
  display: flex;
  justify-content: flex-end;
  margin-top: ${(props: any) => (props.$active ? "1.25rem" : "1.875rem")};
  gap: 0.625rem;
`;
export const Button = styled.button<I.Active>`
  width: 5.625rem;
  border-radius: 0.3125rem;
  height: 3rem;
  font-size: 0.875rem;
  color: ${(props: any) =>
    props.$active ? props.theme.textWhite : props.theme.mainColor};
  background: ${(props: any) =>
    props.$active ? props.theme.mainColor : props.theme.bgColor};
  border: 1px solid
    ${(props: any) => (props.$active ? "" : props.theme.mainColor)};
`;
export const TitleTop = styled.h4`
  margin-bottom: 1.875rem;
  font-size: 1.5625rem;
  font-weight: 700;
  color: ${(props: any) => props.theme.black};
`;