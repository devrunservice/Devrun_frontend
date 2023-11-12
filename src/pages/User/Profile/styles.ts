import { styled } from "styled-components";
import { TitleWrapper } from "../styles";

export const Section = styled.section`
  width: 60%;
`;
export const Title = styled(TitleWrapper)``;

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

export const ShortInput = styled.input`
  width: 25%;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ddd;
  outline: none;
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
  font-size: 0.875rem;
  svg {
    margin-right: 5px;
  }
`;

export const EditInput = styled.div`
  position: relative;

  & > div:nth-child(1) {
    position: absolute;
    right: 0;
  }
`;

export const EditBtn = styled.div`
  text-align: right;
`;

export const ChangeBtn = styled.button`
  color: ${(props: any) => props.theme.brandColor};
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
`;

export const CancelBtn = styled(ChangeBtn)`
  color: ${(props) => props.theme.textColor};
`;

export const P = styled.p`
  padding: 0.8rem 0 0.8rem 0.4rem;
`;

export const Hr = styled.hr`
  margin-top: 0.2rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.borderC};
`;
