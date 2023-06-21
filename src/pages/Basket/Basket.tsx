import * as St from "style/Theme";
import * as S from "./style";
import { ShoppingBasket } from "components";

const Basket = () => {
  return(
    <St.GaryBg>
      <S.Inner800>
        <ShoppingBasket />
      </S.Inner800>
    </St.GaryBg>
  )
  
};
export default Basket;
