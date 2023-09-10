import React from "react";
import * as St from "./style";


interface Top {
  title: string;
  sub?: string;
  count?: number;
}

const UserTop = (props: Top) => (
  <St.Title>
    {props.title}
    <St.Number>
      {props.sub} <St.NumCount>{props.count}</St.NumCount>
    </St.Number>
  </St.Title>
);

export default UserTop;