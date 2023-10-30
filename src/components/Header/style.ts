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
  height: 5rem;
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
  margin-left: 3.75rem;
  display: flex;
  gap: 2.5rem;
`;
export const CategoryLi = styled.p`
  font-weight: 600;
  color: ${(props: any) => props.theme.black};
  cursor: pointer;
`;
export const CategoryIcon = styled(Category)`
  margin-right: 0.5rem;
`;

export const SearchBox = styled.div`
  position: relative;
  margin-right: 1.25rem;
  display: flex;
  align-items: center;
`;
export const SearchInput = styled.input`
  border: 1px solid ${(props: any) => props.theme.borderC};

  border-radius: 3.125rem;
  height: 2.8125rem;
  padding: 0 1.125rem;
  width: 20rem;
  outline: 0;
`;
export const SearchIcon = styled(Search)`
  position: absolute;
  margin: auto 0;
  right: 1.125rem;
  top: 0;
  bottom: 0;
  cursor: pointer;
`;

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;


export const HeaderIcon = styled.div`
  width: 3.125rem;
  position: relative;
  &:hover div {
    visibility: visible;
  }
`;
export const Icon = styled.div`
  text-align: center;
  line-height: 5rem;
  font-size: 0;
`;
const Icons = css`
  fill: ${(props: any) => props.theme.black};
  cursor: pointer;
  position: relative;
`;
export const Cart = styled(BsCart3)`
  ${Icons}
  font-size: 1.375rem;
  top: 0.6875rem;
`;
export const Person = styled(BsPerson)`
  ${Icons}
  font-size: 1.4375rem;
  top: 0.8125rem;
`;
const common = css`
  width: 0;
  height: 0;
  border-width: 0 0.9375rem 0.8125rem 0.9375rem;
  border-style: solid;
  content: "";
  position: absolute;
  right: 0.5rem;
`;

export const CartHover = styled.div`
  position: absolute;
  visibility: hidden;
  width: 27.5rem;
  top: 4.6875rem;
  right: 0;
  border-radius: 0.5rem;
  background: ${(props: any) => props.theme.bgColor};
  border: 1px solid ${(props: any) => props.theme.borderC};
  z-index: 99;
  padding: 1.5625rem 1.5625rem;
  &::after {
    top: -0.875rem;
    border-color: ${(props: any) => props.theme.borderC} transparent;
    ${common}
  }
  &::before {
    border-color: ${(props: any) => props.theme.bgColor} transparent;
    top: -0.8125rem;
    z-index: 1;
    ${common}
  }
`;
export const CartTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props: any) => props.theme.borderC};
  padding-bottom: 1.25rem;
`;
export const CartTitle = styled.em`
  font-weight: 600;
  color: ${(props: any) => props.theme.black};
`;
export const CartNum = styled.span`
  color: ${(props: any) => props.theme.mainColor};
  font-weight: 600;
`;
export const CartPrice = styled.em``;
export const CartUl = styled.ul`
  overflow-y: auto;
  max-height: 300px;
`;
export const CartLi = styled.li`
  display: flex;
  align-items: center;
  margin-top: 1.25rem;
`;
export const ImgWrap = styled.div`
  width: 10.625rem;
  height: 5.9375rem;
  overflow: hidden;
  border-radius: 0.3125rem;
`;
export const Img = styled.img`
  width: inherit;
  height: inherit;
  object-fit: cover;
  padding: 0;
  max-width: 100%;
`;

export const TextWrap = styled.div`
  width: calc(100% - 10.625rem);
  padding-left: 1.25rem;
`;
export const LectureTitle = styled.em`
  display: block;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: ${(props: any) => props.theme.black};
  font-weight: 500;
  margin-bottom: 0.625rem;
  line-height: 1;
`;
export const LectureSub = styled.p`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 1.125rem;
  line-height: 1;
`;
export const LecturePrice = styled.p`
  color: ${(props: any) => props.theme.black};
  font-weight: 500;
  line-height: 1;
`;
export const CartButton = styled.button`
  display: block;
  margin: 1.25rem auto 0;
  background: ${(props: any) => props.theme.mainColor};
  color: ${(props: any) => props.theme.textWhite};
  font-size: 0.875rem;
  width: 100%;
  border-radius: 0.3125rem;
  height: 2.5rem;
`;

export const Dropdown = styled(CartHover)`
  visibility: hidden;
  width: 15.625rem;

  & button:nth-child(1) {
    font-size: ${(props) => props.theme.size18};
  }

  & button:nth-child(1):hover {
    text-decoration: underline;
  }

  & button:nth-child(2) {
    color: ${(props) => props.theme.mainColor};
  }

  & p {
    font-size:0.75rem;;
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
