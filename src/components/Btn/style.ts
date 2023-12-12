import { styled } from "styled-components";


export const Button = styled.button<{ color: string }>`
  border-radius: 5px;
  
  font-size: 0.875rem;
  width: ${(props) => {
    switch (props.color) {
      case "full":
        return "100%";
      case "full2":
        return "100%";
      case "main":
        return "auto";
      case "red":
        return "auto";
      default:
        return "5.625rem";
    }
  }};
  color: ${(props) => {
    switch (props.color) {
      case "yes":
        return props.theme.textWhite;
      case "full":
        return props.theme.textWhite;
      case "red":
        return props.theme.textRed;
      default:
        return props.theme.mainColor;
    }
  }};

  background: ${(props) => {
    switch (props.color) {
      case "yes":
        return props.theme.mainColor;
      case "full":
        return props.theme.mainColor;
      case "main":
        return "none";
      case "red":
        return "none";
      default:
        return props.theme.bgColor;
    }
  }};

  border: 1px solid
    ${(props) => {
      switch (props.color) {
        case "main":
          return "none";
        case "red":
          return "none";
        default:
          return props.theme.mainColor;
      }
    }};
  line-height: ${(props) => {
    switch (props.color) {
      case "main":
        return "0px";
      case "red":
        return "0px";
      default:
        return "50px"
  }}}
`;

