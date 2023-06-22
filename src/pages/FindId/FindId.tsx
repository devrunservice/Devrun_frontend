import React, {useState} from 'react';
import {Input} from 'style/Common';
import * as St from './styles';
// import Input from 'components/Login/Input/Input';

const FindId = () => {
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

  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <St.Section>
      <St.Container>
        <St.H1>아이디 찾기</St.H1>
        <St.Menu>
          <St.MenuBtn active={isActive} onClick={handleClick}>
            아이디 찾기
          </St.MenuBtn>
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
        <St.Phone>
          <div>
            {/* <Input
              type="text"
              placeholder="휴대폰 번호"
              isPwd={false}
              value={phone}
              handleChange={onPhoneHandler}
            /> */}
            <Input type="text" placeholder="휴대폰 번호" />
            <button>인증번호</button>
          </div>
          <div>
            <Input type="text" placeholder="인증번호 입력" />
            <button>확인</button>
          </div>
        </St.Phone>
        <button>확인</button>
      </St.Container>
    </St.Section>
  );
}
export default FindId;
