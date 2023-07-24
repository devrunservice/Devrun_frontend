import { styled } from "styled-components";
import { BsCheckAll } from "react-icons/bs";

export const Title = styled.h4`
  margin-bottom: 30px;
  font-size: ${(props: any) => props.theme.fontSize25px};
  font-weight: ${(props: any) => props.theme.fontBold};
  color: ${(props: any) => props.theme.textBlack};
`;
export const Top = styled.div`
  border-bottom: 1px solid ${(props: any) => props.theme.borderGray};
  border-top: 1px solid ${(props: any) => props.theme.borderGray};
  padding:30px 0;
  margin-bottom:40px;
`;
export const Left = styled.em`
  display: block;
  font-size: ${(props: any) => props.theme.fontSize20px};
  font-weight: ${(props: any) => props.theme.fontSemiBold};
  color: ${(props: any) => props.theme.textBlack};
`;
export const Right = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;
export const Name = styled.p`
  color: ${(props: any) => props.theme.textBlack};
  margin-right:15px;
  display: flex;
  align-items: center;
  svg{
    margin-left:5px;
  }
`;
export const Date = styled.p`
  color: ${(props: any) => props.theme.textBlack};
`;
export const Content = styled.div`
    background:#ddd;
    width:100%;
    height:300px;
`
export const NameCheack = styled(BsCheckAll)`
  color: ${(props: any) => props.theme.textPoint};
  font-size: ${(props: any) => props.theme.fontSize20px};
`;