import { styled } from "styled-components";
import { Input } from "style/Common";

// Gray 배경 컴포넌트
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${(props) => props.theme.bgGrayColor};
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
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 10px;
  border: ${(props) => props.theme.borderGray} 1px solid;
`;

// 회원가입
export const H1 = styled.h1`
  color: ${(props) => props.theme.textBlack};
  text-align: center;
  padding-bottom: 1.5rem;
`;

// p 태그
export const P = styled.p`
  color: ${(props) => props.theme.textBlack};
  margin-bottom: 0.6rem;
`;

// 버튼 태그
export const Button = styled.button`
  /* width: 100%; */
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

// 아이디, 비밀번호, 이름, 이메일, 생년월일, 휴대폰 번호
export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.6rem;
`;

// 휴대폰 번호 input, button
export const Field = styled.div`
  display: flex;
  margin-bottom: 0.6rem;

  & > ${Input} {
    width: 75%;
    margin: 0 1.5rem 0 0;
  }

  & > ${Button} {
    width: 25%;
    color: ${(props) => props.theme.textWhite};
    background-color: ${(props) => props.theme.brandColor};
  }
`;

export const Birthday = styled(Input)`
  text-indent: 0.2rem;
  color: ${(props) => props.theme.textColor};

  &::-webkit-calendar-picker-indicator {
    color: ${(props) => props.theme.textWhite};
  }
`;

// 약관 동의
export const Ul = styled.ul`
  margin-bottom: 1.5rem;

  & hr {
    margin-bottom: 0.5rem;
  }
`;

export const Li = styled.li`
  margin-bottom: 0.5rem;
  display: flex;
`;

export const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

export const CancelBtn = styled(Button)`
  padding: 0.8rem 0;
  margin-top: 0.5rem;
  width: 100%;
`;

export const SignupBtn = styled(Button)`
  color: ${(props) => props.theme.textWhite};
  background-color: ${(props) => props.theme.brandColor};
  padding: 0.8rem 0;
  width: 100%;
`;
