import {useState} from 'react';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import * as St from './styles';
import {BrandLogo} from 'asset';
import {useNavigate} from 'react-router-dom';

const LoginForm = () => {
  const [showPwd, setShowPwd] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleChange = () => {
    setShowPwd(!showPwd);
  };

  return (
    <St.Section>
      <St.Container>
        <St.LogoWrapper>
          <BrandLogo />
        </St.LogoWrapper>
        <St.InputField>
          <St.Input type="text" placeholder="아이디" />
          <St.PwdWrapper>
            <St.Input
              type={showPwd ? 'text' : 'password'}
              placeholder="비밀번호"
            />
            <St.Icons onClick={handleChange}>
              {showPwd ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </St.Icons>
          </St.PwdWrapper>
        </St.InputField>
        <St.LoginBtn>로그인</St.LoginBtn>
        <St.Finder>
          <St.Button
            onClick={() => {
              navigate('/findId');
            }}
          >
            아이디 찾기
          </St.Button>
          <p>|</p>
          <St.Button
            onClick={() => {
              navigate('/findPwd');
            }}
          >
            비밀번호 찾기
          </St.Button>
          <p>|</p>
          <St.Button
            onClick={() => {
              navigate('/signup');
            }}
          >
            회원가입
          </St.Button>
        </St.Finder>
      </St.Container>
    </St.Section>
  );
};

export default LoginForm;
