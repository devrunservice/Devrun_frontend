import { styled, keyframes } from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerIcon = styled.div`
  border: #f3f3f3 4px solid;
  border-top: ${(props) => props.theme.mainColor} 4px solid;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spinAnimation} 1s linear infinite;
`;
