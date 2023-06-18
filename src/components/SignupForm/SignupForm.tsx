import * as St from './styles';
import {Input} from 'style/Common';
import PasswordInput from 'components/Login/PasswordInput/PasswordInput';

const SignupForm = () => {
  return (
    <St.Section>
      <St.Container>
        <St.H1>회원가입</St.H1>
        <form>
          <St.InputField>
            <St.P>아이디</St.P>
            <Input type="text" placeholder="영문, 숫자 5-11자" />
          </St.InputField>
          <St.InputField>
            <St.P>비밀번호</St.P>
            <PasswordInput placeholder="숫자, 영문, 특수문자 조합 최소 8자" />
            <PasswordInput placeholder="비밀번호 재입력" />
          </St.InputField>
          <St.InputField>
            <St.P>이름</St.P>
            <Input type="text" placeholder="홍길동" />
          </St.InputField>
          <St.InputField>
            <St.P>이메일</St.P>
            <Input type="email" placeholder="이메일" />
          </St.InputField>
          <St.InputField>
            <St.P>휴대폰 번호</St.P>
            <St.PhoneField>
              <Input type="text" placeholder="휴대폰 번호 '-' 제외하고 입력" />
              <St.Button>인증번호</St.Button>
            </St.PhoneField>
            <St.PhoneField>
              <Input type="text" placeholder="인증번호 입력" />
              <St.Button>확인</St.Button>
            </St.PhoneField>
          </St.InputField>
          <St.Ul>
            <St.Li>
              <St.Checkbox type="checkbox" id="all-agree" />
              <label htmlFor="all-agree">전체동의</label>
            </St.Li>
            <hr />
            <St.Li>
              <St.Checkbox type="checkbox" id="terms-of-service" />
              <label htmlFor="terms-of-service">
                서비스 이용약관 동의 (필수)
              </label>
            </St.Li>
            <St.Li>
              <St.Checkbox type="checkbox" id="privacy-consent" />
              <label htmlFor="privacy-consente">
                개인정보 수집 및 이용 동의 (필수)
              </label>
            </St.Li>
          </St.Ul>
        </form>
        <St.SignupBtn>회원가입</St.SignupBtn>
      </St.Container>
    </St.Section>
  );
};

export default SignupForm;
