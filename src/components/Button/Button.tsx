import * as St from "./style";
import { IButton } from "types";

const Button = ({text,...Props}: IButton) => {
  return <St.Button {...Props}>{text}</St.Button>;
};
export default Button;

