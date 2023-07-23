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
  position:absolute;
  left:-40px;
`;
export const Close = styled.button`
  width: ${(props: any) => props.theme.width40};
  border-radius: 5px 0 0 5px;
  height: 40px;

  font-size: ${(props: any) => props.theme.fontSize14px};
  color: ${(props: any) => props.theme.textWhite};
  background: ${(props: any) => props.theme.textPoint};
`;
export const Download = styled(Close)`
  color: ${(props: any) => props.theme.textPoint};
  border: 1px solid ${(props: any) => props.theme.textPoint};
  background: ${(props: any) => props.theme.bgColor};
`;


export const PopupWrap = styled.div``;