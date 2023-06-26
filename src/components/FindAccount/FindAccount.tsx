/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "style/Common";
import * as St from "./styles";
// import Input from 'components/Login/Input/Input';

const FindAccount = () => {
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

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/findid");
  };

  return (
    <St.Section>
      <St.Container>
        <St.H1>아이디 찾기</St.H1>
        <St.Menu>
          <St.MenuBtn onClick={handleClick}>아이디 찾기</St.MenuBtn>
          <St.MenuBtn>비밀번호 찾기</St.MenuBtn>
        </St.Menu>
        <St.OptionWrapper>
          <St.Option>
            <St.Radio type="radio" />
            <p>휴대폰 번호</p>
          </St.Option>
          <St.Option>
            <St.Radio type="radio" />
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
        <Input type="text" placeholder="이름" />
        <St.PhoneField>
          <St.Field>
            {/* <Input
              type="text"
              placeholder="휴대폰 번호"
              isPwd={false}
              value={phone}
              handleChange={onPhoneHandler}
            /> */}
            <Input type="text" placeholder="휴대폰 번호" />
            <St.Button>인증번호</St.Button>
          </St.Field>
          <div>
            <Input type="text" placeholder="인증번호 입력" />
            <St.Button>확인</St.Button>
          </div>
        </St.PhoneField>
        <St.Button>아이디 찾기</St.Button>
      </St.Container>
    </St.Section>
  );
};
export default FindAccount;
/* eslint-disable @typescript-eslint/no-unused-vars */
