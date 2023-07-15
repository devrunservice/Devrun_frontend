import { styled } from "styled-components";

export const OptionBtn = styled.button`
  width: 4rem;
  padding: 0.4rem 0;
  margin-right: 0.4rem;
  border-radius: 2rem;
  border: ${(props) => props.theme.brandColor} 1px solid;
  background-color: transparent;

  &:hover {
    color: ${(props) => props.theme.textWhite};
    background-color: ${(props) => props.theme.brandColor};
  }
`;
