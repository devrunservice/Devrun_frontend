import React from 'react';
import kakaoImg from '../../asset/images/kakao.png';
import naverImg from '../../asset/images/naver.png';
import googleImg from '../../asset/images/google.png';
import {
  StyledButton,
  StyledContainer,
  StyledContent,
  StyledH1,
  StyledInput,
  StyledInputField,
  StyledLi,
  StyledP,
  StyledPhoneField,
  StyledSignupBtn,
  StyledSocialLogin,
  StyledSocialLoginBtn,
  StyledSocialLoginTitle,
} from './styles';

const SignupForm = () => {
  return (
    <StyledContainer>
      <StyledContent>
        <StyledH1>회원가입</StyledH1>
        <form>
          <StyledInputField>
            <StyledP>아이디</StyledP>
            <StyledInput type="text" placeholder="영문, 숫자 5-11자" />
          </StyledInputField>
          <StyledInputField>
            <StyledP>비밀번호</StyledP>
            <StyledInput
              type="password"
              placeholder="숫자, 영문, 특수문자 조합 최소 8자"
            />
            <StyledInput type="password" placeholder="비밀번호 재입력" />
          </StyledInputField>
          <StyledInputField>
            <StyledP>이름</StyledP>
            <StyledInput type="text" placeholder="홍길동" />
          </StyledInputField>
          <StyledInputField>
            <StyledP>이메일</StyledP>
            <StyledInput type="email" placeholder="이메일" />
          </StyledInputField>
          <StyledInputField>
            <StyledP>휴대폰 번호</StyledP>
            <StyledPhoneField>
              <StyledInput
                type="text"
                placeholder="휴대폰 번호 '-' 제외하고 입력"
              />
              <StyledButton>인증번호</StyledButton>
            </StyledPhoneField>
            <StyledPhoneField>
              <StyledInput type="text" placeholder="인증번호 입력" />
              <StyledButton>확인</StyledButton>
            </StyledPhoneField>
          </StyledInputField>
          <ul>
            <StyledLi>
              <StyledInput type="checkbox" id="all-agree" />
              <label htmlFor="all-agree">전체동의</label>
            </StyledLi>
            <hr />
            <StyledLi>
              <StyledInput type="checkbox" id="terms-of-service" />
              <label htmlFor="all-agree">서비스 이용약관 동의 (필수)</label>
            </StyledLi>
            <StyledLi>
              <StyledInput type="checkbox" id="privacy-consent" />
              <label htmlFor="all-agree">
                개인정보 수집 및 이용 동의 (필수)
              </label>
            </StyledLi>
          </ul>
        </form>
        <StyledSocialLogin>
          <StyledSocialLoginTitle>간편 회원가입</StyledSocialLoginTitle>
          <StyledSocialLoginBtn>
            <StyledButton>
              <img src={kakaoImg} alt="kakao signup" />
            </StyledButton>
            <StyledButton>
              <img src={naverImg} alt="naver signup" />
            </StyledButton>
            <StyledButton>
              <img src={googleImg} alt="google signup" />
            </StyledButton>
          </StyledSocialLoginBtn>
        </StyledSocialLogin>
        <StyledSignupBtn>회원가입</StyledSignupBtn>
      </StyledContent>
    </StyledContainer>
  );
};

export default SignupForm;
