import React from "react";
import * as St from "./style"

interface Data {
  title: string;
  span: string;
  img: JSX.Element;
}


const NoData = ({ title, img, span }: Data) => {
  return (
    <St.NoWrap>
      <div>{img}</div>
      <St.Title>
        {title}
        <St.P>{span}</St.P>
      </St.Title>
    </St.NoWrap>
  );
};

export default NoData;