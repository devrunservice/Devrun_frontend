import React from 'react';
import * as St from "style/Theme";
import { ShoppingBasket } from "components";
import * as S from "./style";

const Basket = () => (
    <St.GaryBg>
      <S.Inner800>
        <ShoppingBasket />
      </S.Inner800>
    </St.GaryBg>
)

export default Basket;
