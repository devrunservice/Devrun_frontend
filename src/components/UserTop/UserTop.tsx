/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import * as I from "types";
import * as St from "./style";


const UserTop = (props: I.UserTop) => (
  <St.Top>
    <St.Title>
      {props.title}
      <St.Number>
        {props.sub} <St.NumCount>{props.count?.length}</St.NumCount>
      </St.Number>
    </St.Title>
    
  </St.Top>
);

export default UserTop;
/* eslint-disable @typescript-eslint/no-unused-vars */