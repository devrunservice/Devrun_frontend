import styled, { css } from "styled-components";
import { Inner } from "style/Common";
import { IButtonColor } from "types";
import { BsCart3, BsPerson } from "react-icons/bs";
import { Category, Search, Logo } from "asset";

export const HeaderWrap = styled.div`
  border-bottom: 1px solid ${(props: any) => props.theme.borderGray};
`;
export const InnerHeader = styled(Inner)`
  display: flex;
  justify-content: space-between;
  height: 80px;
`;
export const NavWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const LogoIcon = styled(Logo)`
  cursor: pointer;
`;

export const CategoryWrap = styled.div`
  margin-left: 60px;
  display: flex;
  gap: 40px;
`;
export const CategoryLi = styled.p`
  font-weight: ${(props: any) => props.theme.fontSemiBold};
  color: ${(props: any) => props.theme.textBlack};
`;
export const CategoryIcon = styled(Category)`
  margin-right: 8px;
`;

export const SearchBox = styled.div`
  position: relative;
  margin-right: 20px;
  display: flex;
  align-items: center;
`;
export const SearchInput = styled.input`
  border: 1px solid ${(props: any) => props.theme.borderGray};
  &::placeholder {
    ${(props: any) => props.theme.textGrayB0};
  }
  border-radius: 50px;
  height: 45px;
  padding: 0 18px;
  width: 320px;
  outline: 0;
`;
export const SearchIcon = styled(Search)`
  position: absolute;
  margin: auto 0;
  right: 18px;
  top: 0;
  bottom: 0;
  cursor: pointer;
`;

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Button = styled.button<IButtonColor>`
  background: ${(props: any) =>
    props.active ? props.theme.bgColor : props.theme.textPoint};
  color: ${(props: any) =>
    props.active ? props.theme.textColor : props.theme.textWhite};
  border: 1px solid
    ${(props: any) =>
      props.active ? props.theme.borderGray : props.theme.textPoint};
  font-size: ${(props: any) => props.theme.fontSize14px};
  width: ${(props: any) => props.theme.width85};
  border-radius: 5px;
  height: 40px;
`;

export const HeaderIcon = styled.div`
  width: 50px;
  position: relative;
  &:hover div {
    visibility: visible;
  }
`;
export const Icon = styled.div`
  text-align: center;
  line-height: 80px;
  font-size: 0;
`;
const Icons = css`
  fill: ${(props: any) => props.theme.textBlack};
  cursor: pointer;
  position: relative;
`;
export const Cart = styled(BsCart3)`
  ${Icons}
  font-size: 22px;
  top: 11px;
`;
export const Person = styled(BsPerson)`
  ${Icons}
  font-size: 23px;
  top: 13px;
`;
const common = css`
  width: 0;
  height: 0;
  border-width: 0 15px 13px 15px;
  border-style: solid;
  content: "";
  position: absolute;
  right: 8px;
`;

export const CartHover = styled.div`
  position: absolute;
  visibility: hidden;
  width: 440px;
  top: 75px;
  right: 0;
  border-radius: 8px;
  background: ${(props: any) => props.theme.bgColor};
  border: 1px solid ${(props: any) => props.theme.borderGray};
  z-index: 99;
  padding: 25px 25px;
  &::after {
    top: -14px;
    border-color: ${(props: any) => props.theme.borderGray} transparent;
    ${common}
  }
  &::before {
    border-color: ${(props: any) => props.theme.bgColor} transparent;
    top: -13px;
    z-index: 1;
    ${common}
  }
`;
export const CartTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props: any) => props.theme.borderGray};
  padding-bottom: 20px;
`;
export const CartTitle = styled.em`
  font-weight: ${(props: any) => props.theme.fontSemiBold};
  color: ${(props: any) => props.theme.textBlack};
`;
export const CartNum = styled.span`
  color: ${(props: any) => props.theme.textPoint};
  font-weight: ${(props: any) => props.theme.fontSemiBold};
`;
export const CartPrice = styled.em``;
export const CartUl = styled.ul`
  overflow-y: auto;
  max-height: 300px;
`;
export const CartLi = styled.li`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
export const ImgWrap = styled.div`
  width: 170px;
`;
export const TextWrap = styled.div`
  width: calc(100% - 170px);
  padding-left: 20px;
`;
export const LectureTitle = styled.em`
  display: block;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: ${(props: any) => props.theme.textBlack};
  font-weight: ${(props: any) => props.theme.fontMedium};
  margin-bottom: 10px;
  line-height: 1;
`;
export const LectureSub = styled.p`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 18px;
  line-height: 1;
`;
export const LecturePrice = styled.p`
  color: ${(props: any) => props.theme.textBlack};
  font-weight: ${(props: any) => props.theme.fontMedium};
  line-height: 1;
`;
export const CartButton = styled.button`
  display: block;
  margin: 20px auto 0;
  background: ${(props: any) => props.theme.textPoint};
  color: ${(props: any) => props.theme.textWhite};
  font-size: ${(props: any) => props.theme.fontSize14px};
  width: ${(props: any) => props.theme.width100};
  border-radius: 5px;
  height: 40px;
`;
export const ImgBox = styled.div`
  width: 100%;
  height: 0;
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;
  border-radius: 5px;
`;
export const Img = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`;

export const Dropdown = styled(CartHover)`
  /* display: flex;
  justify-content: space-between; */
  visibility: visible;
  width: 200px;

  & button:nth-child(1) {
    font-size: ${(props) => props.theme.fontSize18px};
  }

  & button:nth-child(1):hover {
    text-decoration: underline;
  }

  & button:nth-child(2) {
    color: ${(props) => props.theme.brandColor};
  }
`;

export const DropdownTop = styled(CartTop)`
  justify-content: space-between;
`;

export const DropdownItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DropdownItemBtn = styled.button`
  background-color: transparent;
`;
