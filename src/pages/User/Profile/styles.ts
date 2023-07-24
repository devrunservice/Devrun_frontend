import { styled } from "styled-components";
import { TitleWrapper } from "../styles";

export const Title = styled(TitleWrapper)``;

export const ProfileCon = styled.article`
  display: flex;
  flex-direction: column;
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

export const ProfileP = styled.p`
  color: ${(props) => props.theme.textBlack};
  margin-bottom: 0.6rem;
  font-weight: ${(props) => props.theme.fontSemiBold};
`;

export const InputOther = styled(InputCommon)`
  width: 538px;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Phonenumber = styled.div`
  width: 65%;
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
