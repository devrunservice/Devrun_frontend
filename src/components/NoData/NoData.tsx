import React from "react";
import * as St from "./style"

interface Data {
    text:string
}


const NoData = ({ text }: Data) => {
  return <St.NoWrap>{text}</St.NoWrap>;
};

export default NoData;