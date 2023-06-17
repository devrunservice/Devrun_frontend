import { styled } from "styled-components";
export const Button = styled.button`
  font-size: ${(props) => props.theme.fontSize14px};
  display: block;
  border-radius: 5px;
  height: 40px;

  width: 100%;
  background: ${(props) => props.theme.textPoint};
  color: ${(props) => props.theme.textWhite};
  margin: 20px auto 0;
`;