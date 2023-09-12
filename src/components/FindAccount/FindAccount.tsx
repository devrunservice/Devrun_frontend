/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'redux/store';
import {findAccount} from 'utils/api';
import {useValid} from 'hooks';
import {AuthenticationNumber, PasswordInput} from 'components';
import {SignupFormType} from 'types';
import {Input, ErrorMessage} from 'style/Common';
import * as St from './styles';
import {openModal} from '../../redux/reducer/modalReducer';

const FindAccount = ({findOption}: {findOption: string}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [findAccountForm, setFindAccountForm] = useState<SignupFormType>({
    id: '',
    password: '',
    passwordConfirm: '',
    phonenumber: '',
    email: '',
    code: '',
  });

  const [option, setOption] = useState('phonenumber');
  const [isChecked, setIsChecked] = useState({
    phonenumberRadioBox: true,
    emailRadioBox: false,
  });
  // state for whether authentication code btn was pressed or not
  const [isCheckBtnClicked, setIsCheckBtnClicked] = useState<boolean>(false);

  const validState = useSelector(
    (state: RootState) => state.validationReducer.validState
  );
  const messageState = useSelector(
    (state: RootState) => state.validationReducer.messageState
  );

  useValid(findAccountForm);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  // setting values for which radio box is selected
  const handleRadioBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'findIDByPhonenumber') {
      setOption('phonenumber');
      setIsChecked((prev) => ({...prev, phonenumberRadioBox: true}));
      setIsChecked((prev) => ({...prev, emailRadioBox: false}));
    } else {
      setOption('email');
      setIsChecked((prev) => ({...prev, phonenumberRadioBox: false}));
      setIsChecked((prev) => ({...prev, emailRadioBox: true}));
    }
  };

  // 휴대폰 번호 및 인증번호 값 가져오기
  const getAuthenticationForm = (
    values: SignupFormType,
    isClicked: boolean
  ) => {
    if (option === 'phonenumber') {
      findAccountForm.phonenumber = values.phonenumber;
      findAccountForm.code = values.code;
    } else {
      findAccountForm.email = values.email;
      findAccountForm.code = values.code;
    }
    setIsCheckBtnClicked(isClicked);
  };

  // getting values when input values are being changed
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setFindAccountForm({...findAccountForm, [name]: value});
    console.log(findAccountForm);
  };

  // pushing values to server
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const {name} = e.target as HTMLButtonElement;

    if (name === 'findIdBtn') {
      try {
        const response =
          option === 'phonenumber'
            ? await findAccount.findIdByPhonenumber({
                phonenumber: findAccountForm.phonenumber,
                code: findAccountForm.code,
              })
            : await findAccount.findIdByEmail({
                // id: findAccountForm.id,
                email: findAccountForm.email,
                code: findAccountForm.code,
              });
        console.log(response);
        if (response.status === 200) {
          if (option === 'phonenumber') {
            dispatch(openModal('휴대폰 번호로 아이디가 전송되었습니다.'));
          } else {
            dispatch(openModal('이메일로 아이디가 전송되었습니다.'));
          }
          navigate('/login');
        }
      } catch (error: any) {
        console.log(error);
        dispatch(openModal(error.message));
      }
    } else if (name === 'findPasswordBtn') {
      try {
        if (findAccountForm.id) {
          const response =
            option === 'phonenumber'
              ? await findAccount.findPasswordByPhonenumber(
                  findAccountForm.id,
                  {
                    password: findAccountForm.password,
                    phonenumber: findAccountForm.phonenumber,
                    code: findAccountForm.code,
                  }
                )
              : await findAccount.findPasswordByPhonenumber(
                  findAccountForm.id,
                  {
                    password: findAccountForm.password,
                    email: findAccountForm.email,
                    code: findAccountForm.code,
                  }
                );
          console.log(response);
          if (response.status === 200) {
            dispatch(
              openModal('비밀번호 변경이 완료되었습니다./다시 로그인 해주세요')
            );
            navigate('/login');
          }
        }
      } catch (error: any) {
        console.log(error.message);
        dispatch(openModal(error.message));
      }
    }
  };

  return (
    <>
      {/* Choose how to find the account */}
      <St.OptionWrapper>
        <St.Option>
          <St.Radio
            type="radio"
            name="findIDByPhonenumber"
            onChange={handleRadioBox}
            checked={isChecked.phonenumberRadioBox}
          />
          <p>휴대폰 번호</p>
        </St.Option>
        <St.Option>
          <St.Radio
            type="radio"
            name="findIDByEmail"
            onChange={handleRadioBox}
            checked={isChecked.emailRadioBox}
          />
          <p>이메일</p>
        </St.Option>
      </St.OptionWrapper>

      {/* <Input
          type="text"
          placeholder="이름"
          isPwd={false}
          value={name}
          handleChange={onNameHandler}
        /> */}

      {/* Finding Account Form */}
      <form onSubmit={handleSubmit}>
        <St.InputField>
          <St.P>아이디</St.P>
          <Input
            type="text"
            name="id"
            value={findAccountForm.id}
            placeholder="영어, 숫자를 포함한 5 ~ 13자로 입력해주세요."
            onChange={handleChange}
            required
          />
        </St.InputField>
        <AuthenticationNumber
          findOption={findOption}
          option={option}
          id={findAccountForm.id}
          page="findAccount"
          getAuthenticationForm={getAuthenticationForm}
        />
        {findOption === 'password' && isCheckBtnClicked && (
          <St.InputField>
            <St.P>새로운 비밀번호</St.P>
            <PasswordInput
              name="password"
              value={findAccountForm.password}
              placeholder="숫자, 영문, 특수문자 조합 최소 8자"
              onChange={handleChange}
            />
            {findAccountForm.password && !validState.password && (
              <ErrorMessage>{messageState.passwordMessage}</ErrorMessage>
            )}
            <PasswordInput
              name="passwordConfirm"
              value={findAccountForm.passwordConfirm}
              placeholder="비밀번호 재입력"
              onChange={handleChange}
            />
            {!validState.passwordConfirm && (
              <ErrorMessage>{messageState.passwordConfirmMessage}</ErrorMessage>
            )}
          </St.InputField>
        )}

        {findOption === 'id' ? (
          <St.Button type="submit" name="findIdBtn" onClick={handleClick}>
            아이디 찾기
          </St.Button>
        ) : (
          <St.Button type="submit" name="findPasswordBtn" onClick={handleClick}>
            비밀번호 찾기
          </St.Button>
        )}
        <St.CancelBtn type="button" onClick={() => navigate('/')}>
          메인화면
        </St.CancelBtn>
      </form>
    </>
  );
};
export default FindAccount;
/* eslint-disable @typescript-eslint/no-unused-vars */
