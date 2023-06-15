import {styled} from 'styled-components';

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
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 2rem;
  margin: 3rem 0;
  background: ${(props) => props.theme.bgColor};
  border-radius: 10px;
  border: ${(props) => props.theme.borderGray} 1px solid;
`;

export const Input = styled.input`
  text-indent: 0.5rem;
  border-radius: 5px;
  padding: 0.8rem 0;
  margin-bottom: 0.6rem;
  width: 100%;
  border: ${(props) => props.theme.borderGray} 1px solid;
`;

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.bgColor};
  cursor: pointer;
`;

export const LogoWrapper = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.6rem;
`;

// 비밀번호
export const PwdWrapper = styled.div`
  position: relative;
`;

// 비밀번호 눈 모양
export const Icons = styled.div`
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  cursor: pointer;
`;

// 로그인 버튼
export const LoginBtn = styled(Button)`
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
