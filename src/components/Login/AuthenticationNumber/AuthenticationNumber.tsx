import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'redux/store';
import useValid from 'hooks/useValid';
import {findAccount, signup, verificationAPI} from 'utils/api';
import Modal from 'components/Login/Modal/Modal';
import {ErrorMessage, Input, SuccessMessage} from 'style/Common';
import {SignupFormType} from 'types';
import {openModal} from '../../../redux/reducer/modalReducer';
import * as St from './styles';

const AuthenticationNumber = ({
  findOption,
  option,
  id,
  page,
  getAuthenticationForm,
}: {
  findOption?: string;
  option: string;
  id?: string;
  page?: string;
  getAuthenticationForm: (values: SignupFormType, isClicked: boolean) => void;
}) => {
  const dispatch = useDispatch();
  const [authenticationForm, setAuthenticationForm] = useState<SignupFormType>({
    phonenumber: '',
    email: '',
    code: '',
  });

  console.log(
    `페이지 : ${page}, 계정 찾기 종류 : ${findOption}, 휴대폰 or 이메일 : ${option}`
  );

  const validState = useSelector(
    (state: RootState) => state.validationReducer.validState
  );
  const messageState = useSelector(
    (state: RootState) => state.validationReducer.messageState
  );

  // const {requestAuthenticationNumber, verifyAuthenticationNumber} =
  //   useValid(authenticationForm);
  const {updateValid, updateMessage} = useValid(authenticationForm);

  useEffect(() => {
    getAuthenticationForm(
      {
        email: authenticationForm.email,
        phonenumber: authenticationForm.phonenumber,
        code: authenticationForm.code,
      },
      validState.checkCodeBtn
    );
  }, [authenticationForm, validState.checkCodeBtn]);

  // console.log(isValid);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthenticationForm({
      ...authenticationForm,
      [e.target.name]: e.target.value,
    });
    // setIsValid((prev) => ({ ...prev, code: true }));
  };

  // 인증번호 받기
  const getAuthenticationNumber = async (value: string) => {
    try {
      const response =
        option === 'phonenumber'
          ? await verificationAPI.getAuthenticationNumberbyPhonenumber({
              phonenumber: value,
            })
          : await verificationAPI.getAuthenticationNumberByEmail({
              id,
              email: value,
            });
      if (response.status === 200) {
        console.log('인증번호 요청 완료');
        updateMessage(
          'phonenumberMessage',
          '인증번호가 요청되었습니다. 5분 이내에 입력해주세요.'
        );
        updateValid('phonenumber', true);
        updateValid('codeBtn', true);
      }
    } catch (error) {
      console.log('휴대폰 인증번호 요청 실패');
      updateMessage('phonenumberMessage', '인증번호 요청에 실패했습니다.');
      updateValid('phonenumber', false);
      updateValid('codeBtn', false);
    }
  };

  // 인증번호 클릭
  const handleGetAuthenticationNumber = async () => {
    try {
      // 회원가입에서 휴대폰 중복확인
      if (page === 'signup' || page === 'profileUpdate') {
        const response = await signup.getDuplicatedPhonnumber({
          phonenumber: authenticationForm.phonenumber || '',
        });
        console.log(response);
        if (response.data === 0) {
          getAuthenticationNumber(authenticationForm.phonenumber || '');
        } else {
          if (page === 'signup') {
            console.log('현재 가입된 번호');
            updateMessage('phonenumberMessage', '현재 가입된 번호입니다.');
          } else if (page === 'profileUpdate') {
            console.log('사용할 수 없는 번호');
            updateMessage('phonenumberMessage', '사용 불가능한 번호입니다.');
          }
          updateValid('phonenumber', false);
          updateValid('codeBtn', false);
        }
      } else if (page === 'findAccount') {
        if (findOption === 'id') {
          if (option === 'phonenumber') {
            const response = await signup.getDuplicatedPhonnumber({
              phonenumber: authenticationForm.phonenumber || '',
            });
            if (response.data === 1) {
              getAuthenticationNumber(authenticationForm.phonenumber || '');
            } else if (response.data === 0) {
              dispatch(openModal('입력하신 정보는 없는 정보입니다.'));
              updateValid('phonenumber', false);
              updateValid('codeBtn', false);
            }
          } else if (option === 'email') {
            getAuthenticationNumber(authenticationForm.email || '');
          }
        } else if (findOption === 'password') {
          console.log('휴대폰 번호로 비밀번호 찾기');
          if (option === 'phonenumber') {
            // 휴대폰으로 비밀번호 찾기일 때
            if (id) {
              const response = await findAccount.checkIdPhonenumberMatched(id, {
                phonenumber: authenticationForm.phonenumber || '',
              });
              console.log(response);
              // 아이디와 비밀번호가 일치하면
              if (response.data === true) {
                getAuthenticationNumber(authenticationForm.phonenumber || '');
              } else if (response.data === false) {
                console.log(response);
                dispatch(openModal('정보가 등록된 계정과 일치하지 않습니다.'));
                // updateMessage(
                //   'phonenumberMessage',
                //   '정보가 등록된 계정과 일치하지 않습니다.'
                // );
                updateValid('phonenumber', false);
                updateValid('codeBtn', false);
              }
            }
          } else if (option === 'email') {
            if (id) {
              const response = await findAccount.checkIdEmailMatched(id, {
                email: authenticationForm.email || '',
              });
              console.log(response);
              if (response.data === true) {
                getAuthenticationNumber(authenticationForm.email || '');
              } else if (response.data === false) {
                dispatch(openModal('정보가 등록된 계정과 일치하지 않습니다.'));
                // updateMessage(
                //   'phonenumberMessage',
                //   '정보가 등록된 계정과 일치하지 않습니다.'
                // );
                updateValid('phonenumber', false);
                updateValid('codeBtn', false);
              }
            }
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 인증번호 확인
  const handleCheckAuthenticationNumber = async () => {
    try {
      const response =
        option === 'phonenumber'
          ? await verificationAPI.checkAuthenticationNumberByPhonenumber({
              phonenumber: authenticationForm.phonenumber || '',
              code: authenticationForm.code || '',
            })
          : await verificationAPI.checkAuthenticationNumberByEmail({
              email: authenticationForm.email || '',
              code: authenticationForm.code || '',
            });
      console.log(response);
      if (response.status === 200) {
        updateMessage('codeMessage', '인증 완료 되었습니다.');
        updateValid('code', true);
        updateValid('checkCodeBtn', true);
      }
    } catch (error: any) {
      console.log(error);
      if (error.message === '새로운 인증번호를 받아주세요') {
        updateMessage('codeMessage', error.message);
      } else {
        updateMessage('codeMessage', '올바르지 않은 인증번호 입니다.');
      }
      updateValid('code', false);
      updateValid('checkCodeBtn', false);
    }
  };

  return (
    <St.InputField>
      {option === 'phonenumber' ? (
        <>
          <St.P>휴대폰 번호</St.P>
          <St.Field>
            <Input
              type="text"
              name="phonenumber"
              value={authenticationForm.phonenumber}
              placeholder="휴대폰 번호 '-' 제외하고 입력"
              onChange={handleInputChange}
              required
            />
            <St.Button
              type="button"
              name="phonenumberCodeBtn"
              onClick={handleGetAuthenticationNumber}
              disabled={!validState.phonenumber}
            >
              인증번호
            </St.Button>
          </St.Field>
          {validState.codeBtn && validState.phonenumber && (
            <SuccessMessage>{messageState.phonenumberMessage}</SuccessMessage>
          )}
          {authenticationForm.phonenumber !== '' &&
            !validState.phonenumber &&
            !validState.codeBtn && (
              <ErrorMessage>{messageState.phonenumberMessage}</ErrorMessage>
            )}
          <Modal page="findPassword" />
          <St.Field>
            <Input
              type="text"
              name="code"
              value={authenticationForm.code}
              placeholder="인증번호 입력"
              onChange={handleInputChange}
              required
            />
            <St.Button
              type="button"
              name="phonenumberCheckBtn"
              onClick={handleCheckAuthenticationNumber}
            >
              확인
            </St.Button>
          </St.Field>
          {validState.checkCodeBtn && validState.code ? (
            <SuccessMessage>{messageState.codeMessage}</SuccessMessage>
          ) : (
            <ErrorMessage>{messageState.codeMessage}</ErrorMessage>
          )}
        </>
      ) : (
        <>
          <St.P>이메일</St.P>
          <St.Field>
            <Input
              type="text"
              name="email"
              value={authenticationForm.email}
              placeholder="이메일"
              onChange={handleInputChange}
              required
            />
            <St.Button
              type="button"
              name="emailCodeBtn"
              onClick={handleGetAuthenticationNumber}
              disabled={!validState.email}
            >
              인증번호
            </St.Button>
          </St.Field>
          {/* {isValid.codeBtn && isValid.email ? (
            <SuccessMessage>{validMessage.emailMessage}</SuccessMessage>
          ) : (
            <ErrorMessage>{validMessage.emailMessage}</ErrorMessage>
          )} */}

          {authenticationForm.email && validState.email === false && (
            <ErrorMessage>{messageState.emailMessage}</ErrorMessage>
          )}
          {validState.codeBtn && validState.phonenumber && (
            <SuccessMessage>{messageState.phonenumberMessage}</SuccessMessage>
          )}
          {authenticationForm.phonenumber !== '' &&
            !validState.phonenumber &&
            !validState.codeBtn && (
              <ErrorMessage>{messageState.phonenumberMessage}</ErrorMessage>
            )}

          <St.Field>
            <Input
              type="text"
              name="code"
              value={authenticationForm.code}
              placeholder="인증번호 입력"
              onChange={handleInputChange}
              required
            />
            <St.Button
              type="button"
              name="emailCheckBtn"
              onClick={handleCheckAuthenticationNumber}
            >
              확인
            </St.Button>
          </St.Field>
          {validState.checkCodeBtn && validState.code ? (
            <SuccessMessage>{messageState.codeMessage}</SuccessMessage>
          ) : (
            <ErrorMessage>{messageState.codeMessage}</ErrorMessage>
          )}
        </>
      )}
    </St.InputField>
  );
};
export default AuthenticationNumber;
