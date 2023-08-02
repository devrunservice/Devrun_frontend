import { styled } from "styled-components";

export const Title = styled.h4`
  margin-bottom: 30px;
  font-size: ${(props: any) => props.theme.size25};
  font-weight: ${(props: any) => props.theme.bold};
  color: ${(props: any) => props.theme.black};
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;

`;
export const Button = styled.button`
  width: ${(props:any) => props.theme.size85};
  border-radius: 5px;
  height: 40px;
  margin-top: 20px;
  font-size: ${(props:any) => props.theme.size14};
  color: ${(props:any) => props.theme.textWhite};
  background: ${(props:any) => props.theme.brandColor};
`;