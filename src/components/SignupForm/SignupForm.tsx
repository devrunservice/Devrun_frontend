import {Kakao, Naver, Google} from 'asset';
import * as St from './styles';

const SignupForm = () => {
  return (
    <St.Section>
      <St.Container>
        <St.H1>회원가입</St.H1>
        <form>
          <St.InputField>
            <St.P>아이디</St.P>
            <St.Input type="text" placeholder="영문, 숫자 5-11자" />
          </St.InputField>
          <St.InputField>
            <St.P>비밀번호</St.P>
            <St.Input
              type="password"
              placeholder="숫자, 영문, 특수문자 조합 최소 8자"
            />
            <St.Input type="password" placeholder="비밀번호 재입력" />
          </St.InputField>
          <St.InputField>
            <St.P>이름</St.P>
            <St.Input type="text" placeholder="홍길동" />
          </St.InputField>
          <St.InputField>
            <St.P>이메일</St.P>
            <St.Input type="email" placeholder="이메일" />
          </St.InputField>
          <St.InputField>
            <St.P>휴대폰 번호</St.P>
            <St.PhoneField>
              <St.Input
                type="text"
                placeholder="휴대폰 번호 '-' 제외하고 입력"
              />
              <St.Button>인증번호</St.Button>
            </St.PhoneField>
            <St.PhoneField>
              <St.Input type="text" placeholder="인증번호 입력" />
              <St.Button>확인</St.Button>
            </St.PhoneField>
          </St.InputField>
          <St.Ul>
            <St.Li>
              <St.Input type="checkbox" id="all-agree" />
              <label htmlFor="all-agree">전체동의</label>
            </St.Li>
            <hr />
            <St.Li>
              <St.Input type="checkbox" id="terms-of-service" />
              <label htmlFor="all-agree">서비스 이용약관 동의 (필수)</label>
            </St.Li>
            <St.Li>
              <St.Input type="checkbox" id="privacy-consent" />
              <label htmlFor="all-agree">
                개인정보 수집 및 이용 동의 (필수)
              </label>
            </St.Li>
          </St.Ul>
        </form>
        {/* <St.SocialLogin>
          <St.SocialLoginTitle>간편 회원가입</St.SocialLoginTitle>
          <St.SocialLoginBtn>
            <St.Button>
              <Kakao />
            </St.Button>
            <St.Button>
              <Naver />
            </St.Button>
            <St.Button>
              <Google />
            </St.Button>
          </St.SocialLoginBtn>
        </St.SocialLogin> */}
        <St.SignupBtn>회원가입</St.SignupBtn>
      </St.Container>
    </St.Section>
  );
};

export default SignupForm;
