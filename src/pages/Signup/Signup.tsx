/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'redux/store';
import useValid from 'hooks/useValid';
import useCheckbox from 'hooks/useCheckbox';
import {signup} from 'utils/api';
import {crypto} from 'utils/crypto';
import {
  PasswordInput,
  AuthenticationNumber,
  Modal,
  DuplicationForm,
} from 'components';
import {SignupFormType} from 'types';
import {Title, ErrorMessage, Input, SuccessMessage} from 'style/Common';
import * as St from './styles';
import {openModal, setSignupSuccess} from '../../redux/reducer/modalReducer';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signupForm, setSignupForm] = useState<SignupFormType>({
    id: '',
    password: '',
    passwordConfirm: '',
    name: '',
    email: '',
    birthday: '',
    phonenumber: '',
    code: '',
    allChecked: false,
    ageConsent: false,
    termsOfService: false,
    privacyConsent: false,
    marketConsent: false,
  });

  useValid(signupForm);

  const validState = useSelector(
    (state: RootState) => state.validationReducer.validState
  );
  const messageState = useSelector(
    (state: RootState) => state.validationReducer.messageState
  );

  const {checkboxes, handleCheckAll, handleCheckSingle} = useCheckbox({
    allChecked: false,
    ageConsent: false,
    termsOfService: false,
    privacyConsent: false,
    marketConsent: false,
  });

  // console.log(isValid);

  // 만 19세 이상 가입
  // hooks로 빼기
  const currentDate = new Date();
  const minDate = new Date(
    currentDate.getFullYear() - 19,
    currentDate.getMonth(),
    currentDate.getDate() + 1
  )
    .toISOString()
    .split('T')[0];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(signupForm);
    try {
      const response = await signup.createUser(signupForm.code || '', {
        id: signupForm.id,
        password: signupForm.password,
        name: signupForm.name,
        email: signupForm.email,
        birthday: signupForm.birthday,
        phonenumber: signupForm.phonenumber,
        ageConsent: signupForm.ageConsent,
        termsOfService: signupForm.termsOfService,
        privacyConsent: signupForm.privacyConsent,
        marketConsent: signupForm.marketConsent,
      });
      console.log(response);
      if (response.status === 200) {
        dispatch(setSignupSuccess(true));
        // dispatch(openModal('회원가입이 완료되었습니다.'));
        const params = crypto.encryptedUserData({
          id: signupForm.id,
          email: signupForm.email,
        });
        navigate(`/signupconfirm/${params}`);
      }
    } catch (error: any) {
      console.error(error);
      dispatch(openModal(error.message));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('비밀번호 수정');
    const {name, value} = e.target;
    setSignupForm({...signupForm, [name]: value});
  };

  // 이메일 아이디 값 가져오기
  const getDuplicationForm = (value: SignupFormType) => {
    Object.keys(value).forEach((name) => {
      if (name === 'id') {
        signupForm.id = value.id;
      } else if (name === 'email') {
        signupForm.email = value.email;
      }
    });
  };

  // 비밀번호, 비밀번호 확인 값 가져오기
  const getPassword = (value: SignupFormType) => {
    Object.keys(value).forEach((name) => {
      if (name === 'password') {
        signupForm.password = value.password;
      } else if (name === 'passwordConfirm') {
        signupForm.passwordConfirm = value.passwordConfirm;
      }
    });
  };

  // 휴대폰 번호 및 인증번호 값 가져오기
  const getAuthenticationForm = (values: SignupFormType) => {
    signupForm.phonenumber = values.phonenumber;
    signupForm.code = values.code;
  };

  // 생년월일 값 가져오기
  const handleChangeBday = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = new Date(e.target.value);
    const year = value.getFullYear();
    const month = String(value.getMonth() + 1).padStart(2, '0');
    const day = String(value.getDate()).padStart(2, '0');

    setSignupForm({...signupForm, birthday: `${year}-${month}-${day}`});
    // setIsValid((prev) => ({ ...prev, birthday: true }));
  };

  // 약관 동의
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {id, checked} = e.target;

    if (id === 'allChecked') {
      handleCheckAll(checked);
      setSignupForm((prev) => ({
        ...prev,
        ageConsent: checked,
        termsOfService: checked,
        privacyConsent: checked,
        marketConsent: checked,
      }));
    } else {
      handleCheckSingle(id, checked);
      setSignupForm((prev) => ({...prev, [id]: checked}));
    }
  };

  useEffect(() => {
    const params = crypto.encryptedUserData({
      id: signupForm.id,
      email: signupForm.email,
    });
    console.log(params);
    console.log(params && crypto.decryptedUserData(params));
  }, [signupForm.id, signupForm.email]);

  return (
    <St.Section page="signup">
      <St.Container>
        <St.H1>회원가입</St.H1>
        <form onSubmit={handleSubmit}>
          {/* 아이디 input */}
          <DuplicationForm
            title="아이디"
            inputName="id"
            placeholder="영문, 숫자 5-13자"
            getDuplicationForm={getDuplicationForm}
          />

          {/* 비밀번호 input */}
          <St.InputField>
            <Title>비밀번호</Title>
            <PasswordInput
              name="password"
              value={signupForm.password}
              placeholder="숫자, 영문, 특수문자 조합 최소 8자"
              onChange={handleChange}
            />
            {signupForm.password && !validState.password && (
              <ErrorMessage>{messageState.passwordMessage}</ErrorMessage>
            )}
            <PasswordInput
              name="passwordConfirm"
              value={signupForm.passwordConfirm}
              placeholder="비밀번호 재입력"
              onChange={handleChange}
            />
            {!validState.passwordConfirm && (
              <ErrorMessage>{messageState.passwordConfirmMessage}</ErrorMessage>
            )}
          </St.InputField>
          {/* 이름 input */}
          <St.InputField>
            <Title>이름</Title>
            <Input
              type="text"
              name="name"
              value={signupForm.name}
              placeholder="홍길동"
              onChange={handleChange}
              required
            />
          </St.InputField>

          {/* 이메일 input */}
          <DuplicationForm
            title="이메일"
            inputName="email"
            placeholder="이메일 입력"
            getDuplicationForm={getDuplicationForm}
          />

          {/* 생년월일 input */}
          <St.InputField>
            <Title>생년월일</Title>
            <St.Birthday
              type="date"
              name="birthday"
              value={signupForm.birthday}
              max={minDate}
              onChange={handleChangeBday}
              required
            />
          </St.InputField>
          {/* 휴대폰 번호 input */}
          <AuthenticationNumber
            option="phonenumber"
            page="signup"
            getAuthenticationForm={getAuthenticationForm}
          />
          {/* 약관 동의 */}
          <St.Ul>
            <St.Li>
              <St.Checkbox
                type="checkbox"
                id="allChecked"
                checked={checkboxes.allChecked}
                onChange={handleChecked}
              />
              <label htmlFor="allChecked">전체동의</label>
            </St.Li>
            <hr />
            <St.Li>
              <St.Checkbox
                type="checkbox"
                id="ageConsent"
                checked={checkboxes.ageConsent}
                onChange={handleChecked}
                required
              />
              <label htmlFor="ageConsent">만 19세 이상입니다. (필수)</label>
            </St.Li>
            <St.Li>
              <St.Checkbox
                type="checkbox"
                id="termsOfService"
                checked={checkboxes.termsOfService}
                onChange={handleChecked}
                required
              />
              <label htmlFor="termsOfService">
                서비스 이용약관 동의 (필수)
              </label>
            </St.Li>
            <St.Li>
              <St.Checkbox
                type="checkbox"
                id="privacyConsent"
                checked={checkboxes.privacyConsent}
                onChange={handleChecked}
                required
              />
              <label htmlFor="privacyConsent">
                개인정보 수집 및 이용 동의 (필수)
              </label>
            </St.Li>
            <St.Li>
              <St.Checkbox
                type="checkbox"
                id="marketConsent"
                checked={checkboxes.marketConsent}
                onChange={handleChecked}
              />
              <label htmlFor="marketConsent">
                마케팅 활용 동의 및 광고 수신 동의 (선택)
              </label>
            </St.Li>
          </St.Ul>
          {/* 회원가입 버튼 */}
          <St.SignupBtn type="submit">회원가입</St.SignupBtn>
          <St.CancelBtn type="button" onClick={() => navigate('/')}>
            취소
          </St.CancelBtn>
        </form>
        <Modal page="signup" />
      </St.Container>
    </St.Section>
  );
};

export default Signup;
/* eslint-disable @typescript-eslint/no-unused-vars */
