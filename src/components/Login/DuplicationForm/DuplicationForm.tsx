/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from 'redux/store';
import useValid from 'hooks/useValid';
import {SignupFormType} from 'types';
import {ErrorMessage, Input, SuccessMessage, Title} from 'style/Common';
import * as St from './styles';

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
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [domain, setDomain] = useState('');

  const {checkDuplicated} = id
    ? useValid({id: id})
    : useValid({email: `${email}@${domain}`});

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

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {name} = e.target as HTMLButtonElement;
    if (name === 'idDuplicationBtn') {
      checkDuplicated('id', '아이디', id || '');
    } else if (name === 'emailDuplicationBtn') {
      checkDuplicated('email', '이메일', `${email}@${domain}` || '');
    }
  };

  useEffect(() => {
    if (id) {
      getDuplicationForm({
        id,
      });
    } else {
      getDuplicationForm({
        email: `${email}@${domain}`,
      });
    }
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
              required
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
          {id && validState.id === false && (
            <ErrorMessage>{messageState.idMessage}</ErrorMessage>
          )}
          {id && validState.idDuplication && (
            <SuccessMessage>{messageState.idDuplicationMessage}</SuccessMessage>
          )}
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
              required
            />
            <p>@</p>
            <select name="domainList" onChange={handleChange}>
              <option value="type">선택</option>
              <option value="naver.com">naver.com</option>
              <option value="google.com">google.com</option>
              <option value="duam.net">duam.net</option>
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
