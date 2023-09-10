import { styled } from "styled-components";
import { BsCheckAll } from "react-icons/bs";

export const Title = styled.h4`
  margin-bottom: 30px;
  font-size: 1.5625rem;
  font-weight: 700
  color: ${(props: any) => props.theme.black};
`;
export const Top = styled.div`
  border-bottom: 1px solid ${(props: any) => props.theme.borderC};
  border-top: 1px solid ${(props: any) => props.theme.borderC};
  padding:30px 0;
  margin-bottom:40px;
`;
export const Left = styled.em`
  display: block;
  font-size: 1.25
  font-weight: 600
  color: ${(props: any) => props.theme.black};
`;
export const Right = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;
export const Name = styled.p`
  color: ${(props: any) => props.theme.black};
  margin-right:15px;
  display: flex;
  align-items: center;
  svg{
    margin-left:5px;
  }
`;
export const Date = styled.p`
  color: ${(props: any) => props.theme.black};
`;
export const Content = styled.div`
    background:#ddd;
    width:100%;
    height:300px;
`
export const NameCheack = styled(BsCheckAll)`
  color: ${(props: any) => props.theme.brandColor};
  font-size: 1.25
`;