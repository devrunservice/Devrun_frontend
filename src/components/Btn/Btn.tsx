import React from "react"
import * as St from "./style"

interface IBtn {
  onBtn: () => void;
  color: string;
  text: string;
}

const Btn = ({ onBtn, color, text }: IBtn) => (
  <St.Button onClick={() => onBtn()} color={color}>
    {text}
  </St.Button>
)

export default Btn