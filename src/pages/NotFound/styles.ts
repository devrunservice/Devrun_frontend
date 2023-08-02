import { styled } from "styled-components";
import NotFoundBg from "asset/images/NotFoundBg.jpg"

export const NotBg = styled.div`
  background: url(${NotFoundBg});
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;
export const NotText = styled.div`
    margin-left:265px;
`;
export const NotTitle = styled.em`
  line-height: 1;
  color: ${(props) => props.theme.black};
  font-size: 3.125rem;
  font-weight: ${(props) => props.theme.semiBold};
`;
export const NotContent = styled.p`
  line-height: 35px;
  color: ${(props) => props.theme.textColor};
  font-size: 1.25rem;
  margin: 25px 0 40px;
`;
export const NotButton = styled.button`
  width: 170px;
  height: 60px;
  outline: 0;
  background: ${(props) => props.theme.brandColor};
  border-radius: 10px;
  color: ${(props) => props.theme.textWhite};
`;
