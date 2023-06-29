import { styled } from "styled-components";

export const DefaultWidth = styled.div`
  width: 1280px;
  margin: 0 auto;
`;

// 회원가입, 로그인 input
export const Input = styled.input`
  text-indent: 0.5rem;
  border-radius: 5px;
  padding: 0.8rem 0;
  width: 100%;
  border: ${(props) => props.theme.borderGray} 1px solid;
`;

// 에러 메세지
export const ErrorMessage = styled.p`
  font-size: ${(props) => props.theme.fontSize14px};
  color: ${(props) => props.theme.textRed};
  margin: 0.25rem 0;
`;

// 성공 메세지
export const SuccessMessage = styled(ErrorMessage)`
  color: ${(props) => props.theme.brandColor};
`;


export const WhiteBg = styled.div`
  padding: 60px 0 100px;
  background: ${(props: any) => props.theme.WhiteBg};
`;
export const GaryBg = styled.div`
  background: ${(props: any) => props.theme.bgGrayColor};
  padding: 60px 0 100px;
`;

export const Inner = styled.div`
  width: 1200px;
  margin: 0 auto;
`;