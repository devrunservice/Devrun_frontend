import { styled } from "styled-components";
import { Inner } from "style/Theme";
import { Category } from "asset";
export const Header = styled.div`
  height: 80px;
  border-bottom: 1px solid ${(props) => props.theme.borderGray};
  display: flex;
  align-items: center;
`;
export const InnerHeader = styled(Inner)`
  display: flex;
  justify-content: space-between;
`;
export const Left = styled.div`
    display:flex; 
    align-items: center;
`
export const CategoryWrap = styled.div`
    margin-left:60px;
    display: flex;
    gap:40px;
`;
export const CategoryLi = styled.div``;
export const CategoryIcon = styled(Category)`
    margin-right:8px
`
