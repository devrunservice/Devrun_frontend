import * as St from "./style";
import { IButton } from "types";

const Button = (Props: IButton) => {
  return <St.Button >{Props.text}</St.Button>;
};
export default Button