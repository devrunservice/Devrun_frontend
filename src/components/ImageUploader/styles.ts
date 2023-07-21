import { BasicInput } from "components/CreateNewVideo/style";
import { styled } from "styled-components";

export const UploadArea = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageWrap = styled.div`
  border-radius: 10px;
  background: #ddd;
  width: 50%;
  height: 250px;
  margin-right: 30px;
  border: 1px solid #ddd;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const UploadVideoWrap = styled.div`
  width: 50%;
  align-self: self-start;
  > div {
    display: flex;
    align-items: center;
  }
  label {
    box-sizing: border-box;
    padding: 12px;
    color: ${(props) => props.theme.mainColor};
    border: 1px solid ${(props) => props.theme.mainColor};
    border-radius: 5px;
    margin-left: 10px;
  }
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

export const InputNotice = styled.p`
  display: flex;
  align-items: center;
  color: #555555;
  margin-top: 10px;
  font-size: ${(props) => props.theme.fontSize14px};
  svg {
    margin-right: 5px;
  }
`;