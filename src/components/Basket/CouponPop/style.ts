import { styled } from "styled-components";
import { Button } from "style/Common";
import { Delete } from "asset";

export const PopupWrap = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 99;
`;
export const PopupBg = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  cursor: pointer;
`;
export const Popup = styled.div`
  width: 25rem;
  height: 34.0625rem;
  padding: 1.5625rem 1.5625rem;
  background: ${(props: any) => props.theme.bgColor};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 10px;
`;
export const Title = styled.h4`
  color: ${(props: any) => props.theme.black};
  font-weight: 600;
  margin-bottom: 1.25rem;
  line-height: 1;
`;

export const Btn = styled(Button)`
  width: 100%;
  margin-top: 1.5rem;
`;
export const Deletes = styled(Delete)`
  cursor: pointer;
`;