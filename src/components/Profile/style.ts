import { styled } from "styled-components";
import { BsExclamationCircle } from "react-icons/bs";
import { IProfileActiveBtn } from "types";

export const Profile = styled.section`
  width: calc(100% - 250px);
  display: flex;
  flex-wrap: wrap;
  gap:30px;
`;
export const Title = styled.h4`
  line-height:1;
  font-size: ${(props: any) => props.theme.fontSize25px};
  font-weight: ${(props: any) => props.theme.fontBold};
  color: ${(props: any) => props.theme.textBlack};
`;
export const ProfileCon = styled.article`
  display: flex;
  flex-wrap:wrap;
  width:100%;
`;
export const Imgbox = styled.div`
  margin-right: 40px;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: ${(props: any) => props.theme.bgGrayColor};
  overflow:hidden;
`;
export const Img = styled.img`
  width: inherit;
  height: inherit;
  object-fit: cover;
  padding: 0;
  max-width:100%;
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
  margin-top:10px;
`;
export const TextIcon = styled(BsExclamationCircle)`
    margin-right:5px
`;
export const ProfileEm = styled.em`
  display: block;
  width: 100%;
  margin-bottom: 15px;
  font-weight: ${(props: any) => props.theme.fontSemiBold};
  color: ${(props: any) => props.theme.textBlack};
  line-height: 1;
`;
export const InputOther = styled(InputCommon)`
  width:538px;
  margin-bottom:10px;
  &:last-child{
    margin-bottom:0;
  }
`;

const ChangBtnCommon = styled.button`
  height: 45px;
  text-align: center;
  line-height: 43px;
  font-size: ${(props: any) => props.theme.fontSize14px};
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
`;

export const ChangeBtn = styled(ChangBtnCommon)<IProfileActiveBtn>`
  width: ${(props: any) => props.theme.width85};
  color: ${(props: any) =>
    props.active ? props.theme.textWhite : props.theme.textPoint};
  border: 1px solid ${(props: any) => props.theme.textPoint};
  background: ${(props: any) =>
    props.active ? props.theme.textPoint : props.theme.textWhite};
  &:hover {
    background: ${(props: any) => props.theme.textPoint};
    color: ${(props: any) => props.theme.textWhite};
  }
`;
export const CertBtn = styled(ChangBtnCommon)`
  width: ${(props: any) => props.theme.width120};
  color: ${(props: any) => props.theme.textWhite};
  background: ${(props: any) => props.theme.textPoint};
`;
export const Hidden = styled.div``