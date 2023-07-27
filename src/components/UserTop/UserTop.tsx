/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { IUserTop } from "types";
import * as St from "./style";


const UserTop = (props: IUserTop) => (
  <St.Top>
    <St.Title>
      {props.title}
      <St.Number>
        전체 <St.NumCount>{props.count}</St.NumCount>
      </St.Number>
    </St.Title>
  </St.Top>
);

export default UserTop;
/* eslint-disable @typescript-eslint/no-unused-vars */