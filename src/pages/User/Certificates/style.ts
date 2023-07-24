import { styled } from "styled-components";


export const PopupBg = styled.div`
  position:fixed;
  width:100%;
  height:100%;
  background:rgba(0,0,0,0.7);
  left:0;
  top:0;
  right:0;
  bottom:0;
  margin:auto;
  z-index:99;
  
`
export const Popup = styled.div`
  width: 1200px;
  position:absolute;
  background: ${(props: any) => props.theme.bgColor};
  height:720px;
  left:0;
  top:0;
  right:0;
  bottom:0;
  margin:auto;
`;

export const ButtonWrap = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  gap:10px;
  left: -40px;
`;
export const Btn = styled.button`
  width: ${(props: any) => props.theme.width40};
  height: ${(props: any) => props.theme.width40};
  border-radius: 3px 0 0 3px;
  font-size: ${(props: any) => props.theme.fontSize18px};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props: any) => props.theme.bgColor};
`;



export const PopupWrap = styled.div``;