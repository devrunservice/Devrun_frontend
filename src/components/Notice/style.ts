import { styled } from "styled-components";

export const Title = styled.h4`
  margin-bottom: 30px;
  font-size: ${(props: any) => props.theme.fontSize25px};
  font-weight: ${(props: any) => props.theme.fontBold};
  color: ${(props: any) => props.theme.textBlack};
`;


export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
 
`;
export const Button = styled.button`
  width: ${(props:any) => props.theme.width85};
  border-radius: 5px;
  height: 40px;
  margin-top: 20px;
  font-size: ${(props:any) => props.theme.fontSize14px};
  color: ${(props:any) => props.theme.textWhite};
  background: ${(props:any) => props.theme.textPoint};
`;