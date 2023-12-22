import {styled} from 'styled-components';

export const Button = styled.button<{
  color?: string;
  backgroundColor?: string;
  border?: string;
  width?: string;
  lineHeight?: string;
}>`
  border-radius: 5px;

  font-size: 0.875rem;
  width: ${(props) => {
    switch (props.width) {
      case 'full':
        return '100%';
      case 'auto':
        return 'auto';
      default:
        return '5.625rem';
    }
  }};
  color: ${(props) => {
    switch (props.color) {
      case 'white':
        return props.theme.textWhite;
      case 'red':
        return props.theme.textRed;
      case 'main':
        return props.theme.mainColor;
      default:
        return props.theme.textColor;
    }
  }};

  background: ${(props) => {
    switch (props.backgroundColor) {
      case 'main':
        return props.theme.mainColor;
      case 'red':
        return props.theme.textRed;
      default:
        return props.theme.bgColor;
    }
  }};

  border: 1px solid
    ${(props) => {
      switch (props.border) {
        case 'main':
          return props.theme.mainColor;
        case 'red':
          return props.theme.red;
        default:
          return 'transparent';
      }
    }};
  line-height: ${(props) => {
    switch (props.lineHeight) {
      case '0px':
        return '0px';
      default:
        return '45px';
    }
  }};
`;
