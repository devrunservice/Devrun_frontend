/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Input } from "style/Common";
import AuthenticationNumber from "components/Login/AuthenticationNumber/AuthenticationNumber";
import { SignupFormType } from "types";
import * as St from "./styles";
// import Input from 'components/Login/Input/Input';
import { userInfo } from "../../api/index";

const FindAccount = ({ findOption }: { findOption: string }) => {
  //   const [name, setName] = useState('');
  //   const [phone, setPhone] = useState('');

  //   const onNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setName(e.target.value);
  //     console.log(name);
  //   };

  //   const onPhoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setPhone(e.target.value);
  //     console.log(phone);
  //   };

  const [findAccountForm, setFindAccountForm] = useState<SignupFormType>({
    id: "",
    name: "",
    phonenumber: "",
    email: "",
    code: "",
  });

  const [option, setOption] = useState("phonenumber");
  const [isChecked, setIsChecked] = useState({
    phonenumberRadioBox: true,
    emailRadioBox: false,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleRadioBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "findIDByPhonenumber") {
      setOption("phonenumber");
      setIsChecked((prev) => ({ ...prev, phonenumberRadioBox: true }));
      setIsChecked((prev) => ({ ...prev, emailRadioBox: false }));
    } else {
      setOption("email");
      setIsChecked((prev) => ({ ...prev, phonenumberRadioBox: false }));
      setIsChecked((prev) => ({ ...prev, emailRadioBox: true }));
    }
  };

  // 휴대폰 번호 및 인증번호 값 가져오기
  const getAuthenticationForm = (values: SignupFormType) => {
    if (option === "phonenumber") {
      findAccountForm.phonenumber = values.phonenumber;
      findAccountForm.code = values.code;
    } else {
      findAccountForm.email = values.email;
      findAccountForm.code = values.code;
    }

    console.log(findAccountForm.phonenumber);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement;

    if (name === "findIdBtn") {
      if (option === "phonenumber") {
        const response = userInfo.findIdByPhonenumber({
          name: findAccountForm.name,
          phonenumber: findAccountForm.phonenumber,
        });
        console.log(response);
      } else {
        const response = userInfo.findIdByEmail({
          name: findAccountForm.name,
          phonenumber: findAccountForm.phonenumber,
        });
        console.log(response);
      }
    } else if (name === "findPasswordBtn") {
      if (option === "phonenumber") {
        console.log("휴대폰 번호로 비밀번호 찾기");
      } else {
        console.log("이메일로 비밀번호 찾기");
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
        {findOption === "id" ? (
          <St.InputField>
            <St.P>이름</St.P>
            <Input
              type="text"
              name="name"
              value={findAccountForm.name}
              placeholder="이름"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFindAccountForm({ ...findAccountForm, name: e.target.value })
              }
            />
          </St.InputField>
        ) : (
          <St.InputField>
            <St.P>아이디</St.P>
            <Input
              type="text"
              name="id"
              value={findAccountForm.id}
              placeholder="영어, 숫자를 포함한 5 ~ 13자로 입력해주세요."
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFindAccountForm({ ...findAccountForm, id: e.target.value })
              }
            />
          </St.InputField>
        )}
        {option === "phonenumber" ? (
          <AuthenticationNumber
            option={option}
            getAuthenticationForm={getAuthenticationForm}
          />
        ) : (
          <AuthenticationNumber
            option={option}
            getAuthenticationForm={getAuthenticationForm}
          />
        )}
        {findOption === "id" ? (
          <St.Button type="submit" name="findIdBtn" onClick={handleClick}>
            아이디 찾기
          </St.Button>
        ) : (
          <St.Button type="submit" name="findPasswordBtn" onClick={handleClick}>
            비밀번호 찾기
          </St.Button>
        )}
      </form>
    </>
  );
};
export default FindAccount;
/* eslint-disable @typescript-eslint/no-unused-vars */
