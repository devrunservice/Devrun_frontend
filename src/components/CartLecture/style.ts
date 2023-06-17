import { styled } from "styled-components";
export const ImgBox = styled.div`
  width: 100%;
  height: 0;
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;
  border-radius: 5px;
`;
export const Img = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`;
