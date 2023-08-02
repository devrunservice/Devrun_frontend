import { styled } from "styled-components";
import { Input } from "style/Common";

// Gray 배경 컴포넌트
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${(props) => props.theme.bgGrayColor};
  overflow: auto;
`;

// white 배경 컴포넌트
export const Container = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 2rem;
  margin: 3rem 0;
  background: ${(props) => props.theme.bgColor};
  border-radius: 10px;
  border: ${(props) => props.theme.borderC} 1px solid;
`;

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.bgColor};
  cursor: pointer;
`;

export const LogoBtn = styled.button`
  text-align: center;
  margin-bottom: 1.5rem;
  background: none;
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.6rem;

  & > ${Input} {
    margin-bottom: 0.6rem;
  }
`;

// 로그인 버튼
export const LoginBtn = styled(Button)`
  width: 100%;
  padding: 0.8rem 0;
  margin-bottom: 1.25rem;
  color: ${(props) => props.theme.textWhite};
  background-color: ${(props) => props.theme.brandColor};
`;

// 아이디 찾기, 비밀번호 찾기, 회원가입
export const Finder = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

// 간편 회원가입
export const SocialLogin = styled.div`
  margin-top: 1rem;
`;

// 간편 회원가입 카카오, 네이버, 구글 버튼
export const SocialLoginBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  & > ${Button}:nth-child(-n+3) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.3rem 0.4rem;
    margin: 0 0.25rem;
  }

  & > ${Button}:nth-child(1) {
    background-color: #fee500;
  }

  & > ${Button}:nth-child(2) {
    background-color: #1ec800;
  }

  & > ${Button}:nth-child(3) {
    background-color: #f8f8f8;
  }
`;

export const SocialLoginTitle = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  text-align: center;
  margin: 0.5rem 0;

  &::after,
  &::before {
    content: "";
    flex-grow: 1;
    background: rgba(103, 103, 103, 0.8);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 1rem;
  }
`;
