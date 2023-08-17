import { styled } from "styled-components";
import { Input, FlexColumn } from "style/Common";
import { TitleWrapper } from "../styles";

export const Section = styled.section`
  width: 60%;
`;
export const Title = styled(TitleWrapper)``;

// 이미지
export const UploadArea = styled.div`
  display: flex;
  align-items: center;
`;

export const Imgbox = styled.div`
  margin: 2rem 0;
  margin-right: 40px;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  /* background: ${(props: any) => props.theme.brandColor}; */
  overflow: hidden;
  img {
    width: inherit;
    height: inherit;
    object-fit: cover;
    padding: 0;
    max-width: 100%;
  }
`;

export const BasicInput = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ddd;
  outline: none;
`;

export const ShortInput = styled(BasicInput)`
  width: 25%;
  &::-webkit-inner-spin-button {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
  &::file-selector-button {
    display: none;
  }
  &#uploader {
    width: auto;
    flex: 1;
  }
`;

export const ImageBtn = styled.label`
  box-sizing: border-box;
  padding: 12px;
  color: ${(props) => props.theme.mainColor};
  border: 1px solid ${(props) => props.theme.mainColor};
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
`;

export const InputNotice = styled.p`
  display: flex;
  align-items: center;
  color: #555555;
  margin-top: 10px;
  font-size: ${(props) => props.theme.size14};
  svg {
    margin-right: 5px;
  }
`;

export const Phonenumber = styled.div`
  width: 100%;
`;

export const ChangeBtn = styled.button`
  color: ${(props: any) => props.theme.brandColor};
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
`;

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.6rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const P = styled.p`
  padding: 0.8rem 0 0.8rem 0.4rem;
`;

export const emailWrapper = styled(FlexColumn)`
  width: 100%;
`;

export const InputForm = styled(Input)`
  width: 90%;
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

export const Hr = styled.hr`
  margin-top: 0.2rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.borderC};
`;

export const PhonenumberInput = styled.div`
  position: relative;

  & > button {
    position: absolute;
    right: 0;
  }
`;
