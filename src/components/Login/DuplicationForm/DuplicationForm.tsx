/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from 'redux/store';
import {signup} from 'utils/api';
import useValid from 'hooks/useValid';
import {SignupFormType} from 'types';
import {ErrorMessage, Input, SuccessMessage, Title} from 'style/Common';
import * as St from './style';

const DuplicationForm = ({
  title,
  inputName,
  placeholder,
  getDuplicationForm,
}: {
  title: string;
  inputName: string;
  placeholder: string;
  getDuplicationForm: (value: SignupFormType) => void;
}) => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [domain, setDomain] = useState('');

  const {updateValid, updateMessage} = id
    ? useValid({id: id})
    : useValid({email: `${email}@${domain}`});

  // useValid(id ? {id: id} : {email: `${email}@${domain}`});

  const validState = useSelector(
    (state: RootState) => state.validationReducer.validState
  );
  const messageState = useSelector(
    (state: RootState) => state.validationReducer.messageState
  );

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const {name, value} = e.target;

    if (name === 'domainList') {
      setDomain(value);
    } else if (name === 'id') {
      setId(value);
    } else if (name === 'email') {
      setEmail(value);
    }
  };

  const checkDuplicated = async (
    option: string,
    korean: string,
    value: string
  ) => {
    updateValid(`${option}Duplication`, false);
    const response =
      option === 'id'
        ? await signup.getDuplicatedId({id: value})
        : await signup.getDuplicatedEmail({email: value});
    if (response.data === 0) {
      updateMessage(
        `${option}DuplicationMessage`,
        `사용 가능한 ${korean}입니다.`
      );
      updateValid(`${option}Duplication`, true);
    } else if (response.data === 1) {
      updateMessage(
        `${option}DuplicationMessage`,
        `이미 사용중인 ${korean}입니다.`
      );
      updateValid(`${option}Duplication`, false);
    }
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {name} = e.target as HTMLButtonElement;
    if (name === 'idDuplicationBtn') {
      checkDuplicated('id', '아이디', id || '');
      updateValid('idDuplication', true);
    } else if (name === 'emailDuplicationBtn') {
      checkDuplicated('email', '이메일', `${email}@${domain}` || '');
      updateValid('emailDuplication', true);
    }
  };

  useEffect(() => {
    const data = id ? {id} : {email: `${email}@${domain}`};
    getDuplicationForm(data);
  }, [id, email, domain]);

  return (
    <St.InputField>
      <Title>{title}</Title>
      {inputName === 'id' ? (
        <>
          <St.Field>
            <Input
              type="text"
              name={inputName}
              value={id}
              placeholder={placeholder}
              onChange={handleChange}
              // required
            />
            <St.Button
              type="button"
              name="idDuplicationBtn"
              onClick={onClick}
              disabled={!validState.id}
            >
              중복확인
            </St.Button>
          </St.Field>
          {/* 유효성 검사 에러 메세지 */}
          {id && validState.id === false && (
            <ErrorMessage>{messageState.idMessage}</ErrorMessage>
          )}
          {/* 중복확인 성공 메세지 */}
          {id && validState.idDuplication && (
            <SuccessMessage>{messageState.idDuplicationMessage}</SuccessMessage>
          )}
          {/* 중복확인 실패 메세지 */}
          {id !== '' && !validState.idDuplication && (
            <ErrorMessage>{messageState.idDuplicationMessage}</ErrorMessage>
          )}
        </>
      ) : (
        <>
          <St.Field option="email">
            <Input
              type="text"
              name={inputName}
              value={email}
              placeholder={placeholder}
              onChange={handleChange}
              // required
            />
            <p>@</p>
            <select name="domainList" onChange={handleChange}>
              <option value="type">선택</option>
              <option value="naver.com">naver.com</option>
              <option value="gmail.com">gmail.com</option>
              <option value="daum.net">daum.net</option>
              <option value="nate.com">nate.com</option>
              <option value="kakao.com">kakao.com</option>
            </select>
            <St.Button
              type="button"
              name="emailDuplicationBtn"
              onClick={onClick}
              disabled={!validState.email}
            >
              중복확인
            </St.Button>
          </St.Field>
          {email && validState.email === false && (
            <ErrorMessage>{messageState.emailMessage}</ErrorMessage>
          )}
          {email && validState.emailDuplication && (
            <SuccessMessage>
              {messageState.emailDuplicationMessage}
            </SuccessMessage>
          )}
          {email !== '' && !validState.emailDuplication && (
            <ErrorMessage>{messageState.emailDuplicationMessage}</ErrorMessage>
          )}
        </>
      )}
    </St.InputField>
  );
};

export default DuplicationForm;
