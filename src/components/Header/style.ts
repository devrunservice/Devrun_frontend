import styled, { css } from "styled-components";
import { Inner } from "style/Common";

import { BsCart3, BsPerson } from "react-icons/bs";
import { Category, Search } from "asset";


export const HeaderWrap = styled.div`
  border-bottom: 1px solid ${(props: any) => props.theme.borderC};
`;
export const InnerHeader = styled(Inner)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding: 0;
`;
export const NavWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const LogoIcon = styled.div`
  cursor: pointer;
`;

export const CategoryWrap = styled.div`
  margin-left: 60px;
  display: flex;
  gap: 40px;
`;
export const CategoryLi = styled.p`
  font-weight: ${(props: any) => props.theme.semiBold};
  color: ${(props: any) => props.theme.black};
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
  border: 1px solid ${(props: any) => props.theme.borderC};
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
  fill: ${(props: any) => props.theme.black};
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
  border: 1px solid ${(props: any) => props.theme.borderC};
  z-index: 99;
  padding: 25px 25px;
  &::after {
    top: -14px;
    border-color: ${(props: any) => props.theme.borderC} transparent;
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
  border-bottom: 1px solid ${(props: any) => props.theme.borderC};
  padding-bottom: 20px;
`;
export const CartTitle = styled.em`
  font-weight: ${(props: any) => props.theme.semiBold};
  color: ${(props: any) => props.theme.black};
`;
export const CartNum = styled.span`
  color: ${(props: any) => props.theme.brandColor};
  font-weight: ${(props: any) => props.theme.semiBold};
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
  height: 95px;
  overflow: hidden;
  border-radius: 5px;
`;
export const Img = styled.img`
  width: inherit;
  height: inherit;
  object-fit: cover;
  padding: 0;
  max-width: 100%;
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
  color: ${(props: any) => props.theme.black};
  font-weight: ${(props: any) => props.theme.medium};
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
  color: ${(props: any) => props.theme.black};
  font-weight: ${(props: any) => props.theme.medium};
  line-height: 1;
`;
export const CartButton = styled.button`
  display: block;
  margin: 20px auto 0;
  background: ${(props: any) => props.theme.brandColor};
  color: ${(props: any) => props.theme.textWhite};
  font-size: ${(props: any) => props.theme.size14};
  width: ${(props: any) => props.theme.size100};
  border-radius: 5px;
  height: 40px;
`;

export const Dropdown = styled(CartHover)`
  visibility: hidden;
  width: 250px;

  & button:nth-child(1) {
    font-size: ${(props) => props.theme.size18};
  }

  & button:nth-child(1):hover {
    text-decoration: underline;
  }

  & button:nth-child(2) {
    color: ${(props) => props.theme.brandColor};
  }

  & p {
    font-size: ${(props) => props.theme.size12};
  }
`;

export const DropdownTop = styled(CartTop)`
  justify-content: space-between;
  padding-bottom: 1rem;
`;

export const DropdownItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DropdownItemBtn = styled.button`
  background-color: transparent;
  padding: 0;
`;
