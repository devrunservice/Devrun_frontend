import React, { useCallback, useState } from "react";
import axios from "axios";
import { Input } from "style/Common";
import PasswordInput from "components/Login/PasswordInput/PasswordInput";
import { useNavigate } from "react-router-dom";
import { accAxios } from "api/instance";
// import DaumPostcodeEmbed from "react-daum-postcode";
// import { Address } from "react-daum-postcode";
import * as St from "./styles";

const SignupForm = () => {
  const navigate = useNavigate();

  // 아이디, 비밀번호, 이름, 이메일, 생년월일, 휴대폰 번호 확인
  const [id, setId] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [pwdConfirm, setPwdConfirm] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [bday, setBday] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [verifiedCode, setVerifiedCode] = useState<number>(0);

  // 유효성 검사
  const [isId, setIsId] = useState<boolean>(false);
  const [isPwd, setIsPwd] = useState<boolean>(false);
  const [isPwdConfirm, setIsPwdConfirm] = useState<boolean>(false);
  const [isName, setIsName] = useState<boolean>(false); // eslint-disable-line @typescript-eslint/no-unused-vars
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isBday, setIsBday] = useState<boolean>(false); // eslint-disable-line @typescript-eslint/no-unused-vars
  const [isPhoneNumber, setIsPhoneNumber] = useState<boolean>(false); // eslint-disable-line @typescript-eslint/no-unused-vars

  // 오류 메세지
  const [idMessage, setIdMessage] = useState<string>("");
  const [pwdMessage, setPwdMessage] = useState<string>("");
  const [pwdConfirmMessage, setPwdConfirmMessage] = useState<string>("");
  const [nameMessage, setNameMessage] = useState<string>(""); // eslint-disable-line @typescript-eslint/no-unused-vars
  const [emailMessage, setEmailMessage] = useState<string>("");
  const [bdayMessage, setBdayMessage] = useState<string>(""); // eslint-disable-line @typescript-eslint/no-unused-vars
  const [phoneNumberMessage, setPhoneNumberMessage] = useState<string>(""); // eslint-disable-line @typescript-eslint/no-unused-vars

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isId &&isPwd && isPwdConfirm && isName && isEmail && isBday && isPhoneNumber) {
      try {
        const response = await accAxios.post(
          `/signup/okay`,
          {
            id,
            password: pwd,
            name,
            email,
            birthday: bday,
            phonenumber: phoneNumber,
          },
        );
        console.log("response: ", response);

        if (response.status === 200) {
          navigate(`/signup/${id}`);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  // 아이디 유효성 검사
  const handleChangeId = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      const regex = /^[a-zA-Z0-9]{5,13}$/;

      setId(value);
      console.log(value);

      if (!regex.test(value)) {
        setIdMessage(
          "영어, 숫자를 포함한 5자 이상 13자 미만으로 입력해주세요.",
        );
        setIsId(false);
      } else {
        setIsId(true);
      }
    },
    [],
  );

  // 비밀번호 유효성 검사
  const handleChangePwd = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/;

      setPwd(value);
      // console.log(value);

      if (!regex.test(value)) {
        setPwdMessage(
          "숫자, 영문, 특수문자를 포함하여 최소 8자를 입력해주세요",
        );
        setIsPwd(false);
      } else {
        setIsPwd(true);
      }
    },
    [],
  );

  // 비밀번호 확인
  const handleChangePwdConfirm = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setPwdConfirm(value);
      // console.log(value);
      console.log(pwd);
      console.log(pwd === pwdConfirm);
      if (pwd === value) {
        setPwdConfirmMessage("비밀번호가 일치합니다.");
        setIsPwdConfirm(true);
      } else {
        setPwdConfirmMessage("비밀번호가 일치하지 않습니다.");
        setIsPwdConfirm(false);
      }
    },
    [pwd],
  );

  // 이름
  const handleChangeName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
      setIsName(true);
    },
    [],
  );

  // 이메일 유효성 검사
  const handleChangeEmail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      setEmail(value);

      if (!regex.test(value)) {
        setEmailMessage("올바른 이메일 형식이 아닙니다.");
        setIsEmail(false);
      } else {
        setIsEmail(true);
      }
    },
    [],
  );

  // 생년월일
  const handleChangeBday = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = new Date(event.target.value);
      const year = value.getFullYear();
      const month = String(value.getMonth() + 1).padStart(2, "0");
      const day = String(value.getDate()).padStart(2, "0");

      setBday(`${year}-${month}-${day}`);
      setIsBday(true);
    },
    [],
  );

  // 휴대폰 번호
  const handleChangePhoneNumber = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPhoneNumber(event.target.value);
      setIsPhoneNumber(true);
    },
    [],
  );

  const handleVerifiedCodeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = parseInt(event.target.value, 10);
    setVerifiedCode(value);

    console.log(verifiedCode);
  };

  // 주소
  // const handleComplete = (data: Address) => {
  //   let fullAddress = data.address;
  //   let extraAddress = "";
  //   if (data.addressType === "R") {
  //     if (data.bname !== "") {
  //       extraAddress += data.bname;
  //     }
  //     if (data.buildingName !== "") {
  //       extraAddress +=
  //         extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
  //     }
  //     fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
  //   }
  //   console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  // };

  // 휴대폰 인증번호
  const handlePhoneNumberClick = async () => {
    try {
      const response = await axios.post(
        `${
          process.env.REACT_APP_SERVER_URL
        }/signup/auth/?phonenumber=${encodeURIComponent(phoneNumber)}`,
      );
      console.log("response: ", response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleVerifyNumberClick = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/verify?phonenumber=${phoneNumber}&code=${verifiedCode}`,
      );
      console.log("response: ", response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <St.Section>
      <St.Container>
        <St.H1>회원가입</St.H1>
        <form onSubmit={handleSubmit}>
          {/* 아이디 input */}
          <St.InputField>
            <St.P>아이디</St.P>
            <Input
              type="text"
              placeholder="영문, 숫자 5-13자"
              onChange={handleChangeId}
            />
            {isId === false && <St.ErrorMessage>{idMessage}</St.ErrorMessage>}
          </St.InputField>
          {/* 비밀번호 input */}
          <St.InputField>
            <St.P>비밀번호</St.P>
            <PasswordInput
              placeholder="숫자, 영문, 특수문자 조합 최소 8자"
              onChange={handleChangePwd}
            />
            {isPwd === false && <St.ErrorMessage>{pwdMessage}</St.ErrorMessage>}
            <PasswordInput
              placeholder="비밀번호 재입력"
              onChange={handleChangePwdConfirm}
            />
            {isPwdConfirm === false && (
              <St.ErrorMessage>{pwdConfirmMessage}</St.ErrorMessage>
            )}
          </St.InputField>
          {/* 이름 input */}
          <St.InputField>
            <St.P>이름</St.P>
            <Input
              type="text"
              placeholder="홍길동"
              onChange={handleChangeName}
            />
          </St.InputField>
          {/* 이메일 input */}
          <St.InputField>
            <St.P>이메일</St.P>
            <Input
              type="email"
              placeholder="이메일"
              onChange={handleChangeEmail}
            />
            {isEmail === false && (
              <St.ErrorMessage>{emailMessage}</St.ErrorMessage>
            )}
          </St.InputField>
          {/* 생년월일 input */}
          <St.InputField>
            <St.P>생년월일</St.P>
            <St.Birthday type="date" onChange={handleChangeBday} />
          </St.InputField>
          <St.InputField>
            <St.P>주소</St.P>
            {/* <DaumPostcodeEmbed OnComplete={handleComplete} autoClose /> */}
          </St.InputField>
          {/* 휴대폰 번호 input */}
          <St.InputField>
            <St.P>휴대폰 번호</St.P>
            <St.PhoneField>
              <Input
                type="text"
                placeholder="휴대폰 번호 '-' 제외하고 입력"
                onChange={handleChangePhoneNumber}
              />
              <St.Button onClick={handlePhoneNumberClick} type="button">
                인증번호
              </St.Button>
            </St.PhoneField>
            <St.PhoneField>
              <Input
                type="text"
                placeholder="인증번호 입력"
                onChange={handleVerifiedCodeChange}
              />
              <St.Button onClick={handleVerifyNumberClick} type="button">
                확인
              </St.Button>
            </St.PhoneField>
          </St.InputField>
          {/* 약관 동의 */}
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
          {/* 회원가입 버튼 */}
          <St.SignupBtn>회원가입</St.SignupBtn>
        </form>
      </St.Container>
    </St.Section>
  );
};

export default SignupForm;
