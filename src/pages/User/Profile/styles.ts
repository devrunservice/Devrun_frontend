import { styled } from "styled-components";
import { BsExclamationCircle } from "react-icons/bs";
import { TitleWrapper } from "../styles";

export const Title = styled(TitleWrapper)``;

export const ProfileCon = styled.article`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  padding-bottom: 1rem;
`;
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

export const Rightbox = styled.div``;
export const InputWrap = styled.div`
  display: flex;
  margin-bottom: 15px;
`;
const InputCommon = styled.input`
  border: 1px solid ${(props) => props.theme.borderGray};
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

export const Input = styled(InputCommon)`
  flex: 1;
  cursor: pointer;
`;
export const Label = styled.label`
  height: 45px;
  text-align: center;
  line-height: 43px;
  font-size: ${(props: any) => props.theme.fontSize14px};
  width: ${(props: any) => props.theme.width85};
  color: ${(props: any) => props.theme.textPoint};
  border: 1px solid ${(props: any) => props.theme.textPoint};
  background: ${(props: any) => props.theme.bgColor};
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
`;

export const Imgtext = styled.p`
  font-size: ${(props: any) => props.theme.fontSize14px};
  line-height: 1;
  display: flex;
  margin-top: 10px;
`;
export const TextIcon = styled(BsExclamationCircle)`
  margin-right: 5px;
`;
export const ProfileEm = styled.em`
  display: block;
  width: 100%;
  margin-bottom: 15px;
  font-weight: ${(props: any) => props.theme.fontSemiBold};
  color: ${(props: any) => props.theme.textBlack};
  line-height: 1;
`;
export const InputId = styled(InputCommon)`
  width: 538px;
`;
export const InputOther = styled(InputCommon)`
  width: 538px;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ChangeBtn = styled.button`
  height: 45px;
  text-align: center;
  width: ${(props: any) => props.theme.width85};
  color: ${(props: any) => props.theme.textPoint};
  border: 1px solid ${(props: any) => props.theme.textPoint};
  background: transparent;
  border-radius: 5px;
  cursor: pointer;
`;
