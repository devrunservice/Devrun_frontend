import { styled } from "styled-components";
import { Inner } from "style/Theme";
import { Category, Search } from "asset";
export const Header = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.borderGray};
`;
export const InnerHeader = styled(Inner)`
  display: flex;
  justify-content: space-between;
  height: 80px;
`;
export const Left = styled.div`
  display:flex; 
  align-items: center;
`
export const Right = styled.div`
  display: flex;
`;
export const CategoryWrap = styled.div`
  margin-left:60px;
  display: flex;
  gap:40px;
`;
export const CategoryLi = styled.p`
  font-weight: ${(props) => props.theme.fontSemiBold};
  color: ${(props) => props.theme.textBlack};
`;
export const CategoryIcon = styled(Category)`
    margin-right:8px
`

export const SearchBox = styled.div`
  position: relative;
  margin-right: 20px;
  display: flex;
  align-items: center;
`;
export const SearchInput = styled.input`
  border: 1px solid ${(props) => props.theme.borderGray};
  &::placeholder {
    ${(props) => props.theme.textGrayB0};
  }
  border-radius: 50px;
  height: 45px;
  padding: 0 18px;
  width: 320px;
  outline: 0;
`;
export const SearchIcon = styled(Search)`
  position: absolute;
  margin:auto 0;
  right:18px;
  top:0;
  bottom:0;
  cursor: pointer;
`;
export const HeaderIcon = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;
  position: relative;
  &:last-child {
    margin-right: 0px;
  }
  > svg {
    cursor: pointer;
  }
  &:hover div {
    visibility: visible;
  }
`;
export const CartHover = styled.div`
  position: absolute;
  visibility: hidden;
  width: 440px;
  top: 70px;
  right: 0;
  border-radius: 8px;
  background: ${(props) => props.theme.bgColor};
  border: 1px solid ${(props) => props.theme.borderGray};
  z-index: 99;
  padding: 25px;
`;
export const CartTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.borderGray};
  padding-bottom:20px;
`;
export const CartTitle = styled.em`
  font-weight: ${(props) => props.theme.fontSemiBold};
  color: ${(props) => props.theme.textBlack};
`;
export const CartNum = styled.span`
  color: ${(props) => props.theme.textPoint};
  font-weight: ${(props) => props.theme.fontSemiBold};
`;
export const CartPrice = styled.em``;
export const CartUl = styled.ul`
  overflow-y: auto;
  max-height: 300px;
`;
export const CartLi = styled.li`
  display: flex;
  align-items: center;
  margin-top:20px;

`;
export const ImgWrap = styled.div`
  width: 144px;
  
`;
export const TextWrap = styled.div`
  width: calc(100% - 144px);
  padding-left: 20px;
`;
export const LectureTitle = styled.em`
  display: block;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: ${(props) => props.theme.textBlack};
  font-weight: ${(props) => props.theme.fontMedium};
  margin-bottom: 10px;
`;
export const LectureSub = styled.p`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 18px;
`;
export const LecturePrice = styled.p`
  color: ${(props) => props.theme.textBlack};
  font-weight: ${(props) => props.theme.fontMedium};
`;
