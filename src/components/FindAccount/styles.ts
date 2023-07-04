import { Input } from "style/Common";
import { styled } from "styled-components";

export const H1 = styled.h1`
  color: ${(props) => props.theme.textBlack};
  text-align: center;
  padding-bottom: 1.5rem;
`;

export const P = styled.p`
  color: ${(props) => props.theme.textBlack};
  margin-bottom: 0.6rem;
`;

export const Button = styled.button`
  width: 100%;
  border: none;
  border-radius: 5px;
  color: ${(props) => props.theme.textWhite};
  background-color: ${(props) => props.theme.brandColor};
  padding: 0.8rem 0;
  cursor: pointer;
`;

// 휴대폰 번호, 이메일 선택 라디오 박스
export const OptionWrapper = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`;

export const Option = styled.div`
  display: flex;
  margin-right: 1rem;
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.6rem;
`;

export const Radio = styled.input`
  margin-right: 0.5rem;
`;

export const PhoneField = styled.div`
  margin-top: 0.5rem;
`;

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
