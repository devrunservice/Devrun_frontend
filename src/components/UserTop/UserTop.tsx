import React from "react";
import * as I from "types";
import * as St from "./style";


const UserTop = (props: I.UserTop) => (
    <St.Title>
      {props.title}
      <St.Number>
        {props.sub} <St.NumCount>{props.count?.length}</St.NumCount>
      </St.Number>
    </St.Title>
);

export default UserTop;