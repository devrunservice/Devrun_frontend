import {styled} from 'styled-components';

// Gray 배경 컴포넌트
export const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: ${(props) => props.theme.bgGrayColor};
  overflow: auto;
`;

// white 배경 컴포넌트
export const StyledContent = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 2rem;
  margin: 3rem 0;
  background: ${(props) => props.theme.bgColor};
  border-radius: 10px;
  border: ${(props) => props.theme.borderGray} 1px solid;
`;

// 회원가입
export const StyledH1 = styled.h1`
  color: ${(props) => props.theme.textBlack};
  text-align: center;
  padding-bottom: 1.5rem;
`;

// p 태그
export const StyledP = styled.p`
  color: ${(props) => props.theme.textBlack};
  margin-bottom: 0.6rem;
`;

// input 태그
export const StyledInput = styled.input`
  text-indent: 0.5rem;
  border-radius: 5px;
  padding: 0.8rem 0;
  /* margin-bottom: 0.6rem; */
  border: ${(props) => props.theme.borderGray} 1px solid;
`;

// 버튼 태그
export const StyledButton = styled.button`
  /* width: 100%; */
  border: none;
  border-radius: 5px;
`;

// 아이디, 비밀번호, 이름, 이메일, 휴대폰 번호
export const StyledInputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.6rem;

  &:nth-child(2) ${StyledInput} {
    margin-bottom: 0.6rem;
  }
`;

// 휴대폰 번호 input, button
export const StyledPhoneField = styled.div`
  display: flex;
  margin-bottom: 0.6rem;

  & > ${StyledInput} {
    width: 75%;
    margin: 0 1.5rem 0 0;
  }

  & > ${StyledButton} {
    width: 25%;
    color: ${(props) => props.theme.textWhite};
    background-color: ${(props) => props.theme.brandColor};
  }
`;

// 약관 동의
export const StyledUl = styled.ul`
  margin-bottom: 1.5rem;
`;

export const StyledLi = styled.li`
  margin-bottom: 0.5rem;
`;

// 간편 회원가입
export const StyledSocialLogin = styled.div`
  margin-bottom: 1.25rem;
`;

// 간편 회원가입 카카오, 네이버, 구글 버튼
export const StyledSocialLoginBtn = styled.div`
  display: flex;
  justify-content: center;

  & > ${StyledButton}:nth-child(-n+3) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.3rem 0.4rem;
    margin: 0 0.25rem;
  }

  & > ${StyledButton}:nth-child(1) {
    background-color: #fee500;
  }

  & > ${StyledButton}:nth-child(2) {
    background-color: #1ec800;
  }

  & > ${StyledButton}:nth-child(3) {
    background-color: #f8f8f8;
  }
`;

export const StyledSocialLoginTitle = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  text-align: center;
  margin: 0.5rem 0;

  &::after,
  &::before {
    content: '';
    flex-grow: 1;
    background: rgba(103, 103, 103, 0.8);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 1rem;
  }
`;

export const StyledSignupBtn = styled(StyledButton)`
  color: ${(props) => props.theme.textWhite};
  background-color: ${(props) => props.theme.brandColor};
  padding: 0.8rem 0;
`;
