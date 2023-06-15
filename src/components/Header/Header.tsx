import { Logo } from "asset";
import * as St from "./style";

const Header = () => {
  return (
    <St.Header>
      <St.InnerHeader>
        <St.Left>
          <Logo />
          <St.CategoryWrap>
            <St.CategoryLi>
              <St.CategoryIcon />
              카테고리
            </St.CategoryLi>
            <St.CategoryLi>DEVRUN 깜짝특가</St.CategoryLi>
            <St.CategoryLi>BEST</St.CategoryLi>
            <St.CategoryLi>고객센터</St.CategoryLi>
          </St.CategoryWrap>
        </St.Left>
      </St.InnerHeader>
    </St.Header>
  );
};

export default Header;
