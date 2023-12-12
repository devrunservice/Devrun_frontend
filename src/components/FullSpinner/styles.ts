import { styled, keyframes } from "styled-components";

export const Section = styled.section`
  min-width: 100vw;
  min-height: 100vh;
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background: rgba(0,0,0,0.4);
`;
export const SpinnerIconWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    margin-bottom: 10px;
    color: #fff
  }
`
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
