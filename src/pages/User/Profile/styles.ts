import { styled } from "styled-components";
import { Input } from "style/Common";
import { TitleWrapper } from "../styles";

export const Section = styled.section`
  width: 60%;
`;
export const Title = styled(TitleWrapper)``;

export const Imgbox = styled.div`
  margin: 2rem 0;
  margin-right: 40px;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: ${(props: any) => props.theme.brandColor};
  overflow: hidden;
`;
export const ProfileImg = styled.img`
  width: inherit;
  height: inherit;
  object-fit: cover;
  padding: 0;
  max-width: 100%;
`;

const InputCommon = styled.input`
  border: 1px solid ${(props) => props.theme.borderC};
  line-height: 43px;
  height: 45px;
  border-radius: 5px;
  outline: none;
  padding: 0 10px;
  &::-webkit-inner-spin-button {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
  &::file-selector-button {
    display: none;
  }
`;

export const InputOther = styled(InputCommon)`
  width: 538px;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Phonenumber = styled.div`
  width: 100%;
`;

export const ChangeBtn = styled.button`
  height: 45px;
  text-align: center;
  width: ${(props: any) => props.theme.size85};
  color: ${(props: any) => props.theme.brandColor};
  border: 1px solid ${(props: any) => props.theme.brandColor};
  background: transparent;
  border-radius: 5px;
  cursor: pointer;
`;

export const Button = styled.button`
  /* width: 100%; */
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.6rem;
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
