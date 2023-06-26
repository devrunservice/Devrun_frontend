import { styled } from "styled-components";
import { Input } from "style/Common";

// p 태그
export const P = styled.p`
  color: ${(props) => props.theme.textBlack};
  margin-bottom: 0.6rem;
`;

export const Button = styled.button`
  /* width: 100%; */
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

// 아이디, 비밀번호, 이름, 이메일, 생년월일, 휴대폰 번호
export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.6rem;
`;

// 휴대폰 번호 input, button
export const Field = styled.div`
  display: flex;
  margin-bottom: 0.6rem;

  & > ${Input} {
    width: 75%;
    margin: 0 1.5rem 0 0;
  }

  & > ${Button} {
    width: 25%;
    color: ${(props) => props.theme.textWhite};
    background-color: ${(props) => props.theme.brandColor};
  }
`;
