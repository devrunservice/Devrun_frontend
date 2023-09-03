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

  console.log(`계정 찾기 종류 : ${findOption}, 휴대폰 or 이메일 : ${option}`);

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

  const getAuthenticationNumberByPhonenumber = async (phonenumber: string) => {
    try {
      const response =
        await verificationAPI.getAuthenticationNumberbyPhonenumber({
          phonenumber,
        });
      console.log(response);
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

  const getAuthenticationNumberByEmail = async (email: string) => {
    try {
      const response = await verificationAPI.getAuthenticationNumberByEmail({
        id,
        email,
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
      console.log('이메일 인증번호 요청 실패');
      updateMessage('phonenumberMessage', '인증번호 요청에 실패했습니다.');
      updateValid('phonenumber', false);
      updateValid('codeBtn', false);
    }
  };

  // 중복확인 후 인증번호 요청
  const requestAuthenticationNumber = async (value: string) => {
    // 회원가입에서 휴대폰 중복확인
    if (page === 'signup') {
      const response = await signup.getDuplicatedPhonnumber({
        phonenumber: value,
      });
      console.log(response);
      if (response.data === 0) {
        getAuthenticationNumberByPhonenumber(value);
      } else {
        console.log('현재 가입된 번호');
        updateMessage('phonenumberMessage', '현재 가입된 번호입니다.');
        updateValid('phonenumber', false);
        updateValid('codeBtn', false);
      }
    } else if (page === 'findAccount') {
      if (findOption === 'password') {
        if (option === 'phonenumber') {
          // 휴대폰으로 비밀번호 찾기일 때
          try {
            if (id) {
              const response = await findAccount.checkIdPhonenumberMatched(id, {
                phonenumber: value,
              });
              console.log(response);
              // 아이디와 비밀번호가 일치하면
              if (response.data === true) {
                getAuthenticationNumberByPhonenumber(value);
              } else if (response.data === false) {
                console.log(response);
                dispatch(openModal('정보가 등록된 계정과 일치하지 않습니다.'));
                // updateMessage(
                //   "phonenumberMessage",
                //   "정보가 등록된 계정과 일치하지 않습니다.",
                // );
                updateValid('phonenumber', false);
                updateValid('codeBtn', false);
              }
            }
          } catch (error) {
            console.log(error);
          }
        } else {
          try {
            getAuthenticationNumberByEmail(value);
          } catch (error) {
            console.log(error);
          }
        }

        // 휴대폰으로 아이디 찾기
      } else if (findOption === 'id') {
        if (option === 'phonenumber') {
          try {
            const response = await signup.getDuplicatedPhonnumber({
              phonenumber: value,
            });
            console.log(response);
            if (response.data === 1) {
              getAuthenticationNumberByPhonenumber(value);
            } else if (response.data === 0) {
              dispatch(openModal('입력하신 정보는 없는 정보입니다.'));
              // updateMessage(
              //   "phonenumberMessage",
              //   "입력하신 정보는 없는 정보입니다.",
              // );
              updateValid('phonenumber', false);
              updateValid('codeBtn', false);
            }
          } catch (error) {
            console.log(error);
          }
          // 이메일로 아이디 찾기
        } else if (option === 'email') {
          getAuthenticationNumberByEmail(value);
        }
      }
    } else if (page === 'profileUpdate') {
      // 프로필에서 휴대폰 인증번호 받기
      getAuthenticationNumberByPhonenumber(value);
    }
  };

  // 인증번호 확인
  const verifyAuthenticationNumber = async (value: string, code: string) => {
    if (page === 'findAccount') {
      if (findOption === 'id') {
        if (option === 'email') {
          console.log('이메일로 아이디 찾기 인증번호 확인');
          try {
            const response =
              await verificationAPI.checkAuthenticationNumberByEmail({
                email: value,
                code,
              });
            console.log(response);
            if (response.status === 200) {
              updateMessage('codeMessage', '인증 완료 되었습니다.');
              updateValid('code', true);
              updateValid('checkCodeBtn', true);
            }
          } catch (error: any) {
            console.log(error);
            updateMessage('codeMessage', '올바르지 않은 인증번호 입니다.');
            updateValid('code', false);
            updateValid('checkCodeBtn', false);
          }
        } else {
          console.log('휴대폰 번호로 아이디 찾기 인증번호 확인');
          try {
            const response =
              await verificationAPI.checkAuthenticationNumberByPhonenumber({
                phonenumber: value,
                code,
              });
            if (response.status === 200) {
              updateMessage('codeMessage', '인증 완료 되었습니다.');
              updateValid('code', true);
              updateValid('checkCodeBtn', true);
            }
          } catch (error: any) {
            updateMessage('codeMessage', '올바르지 않은 인증번호 입니다.');
            updateValid('code', false);
            updateValid('checkCodeBtn', false);
          }
        }
      } else if (findOption === 'password') {
        if (option === 'email') {
          console.log('이메일로 비밀번호 찾기 인증번호 확인');
          try {
            const response =
              await verificationAPI.checkAuthenticationNumberByEmail({
                email: value,
                code,
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
        } else {
          console.log('휴대폰 번호로 아이디 찾기 인증번호 확인');
          try {
            const response =
              await verificationAPI.checkAuthenticationNumberByPhonenumber({
                phonenumber: value,
                code,
              });
            if (response.status === 200) {
              updateMessage('codeMessage', '인증 완료 되었습니다.');
              updateValid('code', true);
              updateValid('checkCodeBtn', true);
            }
          } catch (error: any) {
            updateMessage('codeMessage', '올바르지 않은 인증번호 입니다.');
            updateValid('code', false);
            updateValid('checkCodeBtn', false);
          }
        }
      }
    } else {
      try {
        console.log('회원가입 휴대폰 인증 확인');
        const response =
          await verificationAPI.checkAuthenticationNumberByPhonenumber({
            phonenumber: value,
            code,
          });
        if (response.status === 200) {
          updateMessage('codeMessage', '인증 완료 되었습니다.');
          updateValid('code', true);
          updateValid('checkCodeBtn', true);
        }
      } catch (error: any) {
        updateMessage('codeMessage', '올바르지 않은 인증번호 입니다.');
        updateValid('code', false);
        updateValid('checkCodeBtn', false);
      }
    }
  };

  // 인증번호
  const handleGetAuthenticationNumber = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    console.log(`인증번호 받기 : ${id}`);
    const {name} = e.target as HTMLButtonElement;
    if (name === 'phonenumberCodeBtn') {
      // requestAuthenticationNumber(
      //   page || '',
      //   authenticationForm.phonenumber || '',
      //   findOption,
      //   option,
      //   id
      // );
      requestAuthenticationNumber(authenticationForm.phonenumber || '');
    } else {
      // requestAuthenticationNumber(
      //   page || '',
      //   authenticationForm.email || '',
      //   findOption,
      //   option,
      //   id
      // );
      requestAuthenticationNumber(authenticationForm.email || '');
    }
  };

  // 인증번호 확인
  const handleCheckAuthenticationNumber = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const {name} = e.target as HTMLButtonElement;
    if (name === 'phonenumberCheckBtn') {
      console.log('휴대폰 번호 인증번호 확인 클릭');
      verifyAuthenticationNumber(
        authenticationForm.phonenumber || '',
        authenticationForm.code || ''
      );
    } else {
      console.log('이메일 인증번호 확인 클릭');
      verifyAuthenticationNumber(
        authenticationForm.email || '',
        authenticationForm.code || ''
      );
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
          {/* {validState.codeBtn && validState.phonenumber ? (
            <SuccessMessage>{messageState.phonenumberMessage}</SuccessMessage>
          ) : (
            <ErrorMessage>{messageState.phonenumberMessage}</ErrorMessage>
          )} */}
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
