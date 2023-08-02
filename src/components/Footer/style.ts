import { styled } from "styled-components";

export const FooterBg = styled.div`
    background:${(props:any)=>props.theme.bgBlack}
`;
export const Inner = styled.div`
    width:1200px;
    margin:0 auto;
    padding:30px 0%;
`;
export const Top = styled.div`
    display:flex;
    align-items: center;
`;
export const Left = styled.div`
    margin-right:50px;
`;
export const Slogan = styled.p`
  font-size: ${(props:any) => props.theme.size14};
  color: ${(props:any) => props.theme.textWhite};
  margin-top:10px;
`;
export const Right = styled.div``;
export const Link = styled.div`
  margin-bottom: 12px;
  display: flex;
  &:last-child {
    margin-bottom: 0;
  }
`;
export const Title = styled.em`
  color: ${(props:any) => props.theme.textWhite};
  font-size: ${(props:any) => props.theme.size14};
  font-weight: ${(props:any) => props.theme.medium};
  margin-right: 30px;
`;
export const LinkLi = styled.p`
  position: relative;
  color: ${(props: any) => props.theme.borderC};
  font-size: ${(props: any) => props.theme.size14};
  margin-right: 10px;
  padding-right: 11px;
  &:last-child {
    margin-right: 0px;
    padding-right: 0px;
  }
  &::after {
    position: absolute;
    right: 0;
    width: 1px;
    height: 8px;
    background: ${(props: any) => props.theme.border49};
    margin: auto 0;
    bottom: 0;
    top: 0;
    content: "";
  }
`;
export const Bottom = styled.div`
  margin-top: 20px;
  padding-top: 21px;
  border-top: 1px solid ${(props:any) => props.theme.border49};
  display:flex
`;
export const Info = styled.p`
  margin-right: 20px;
  color: ${(props:any) => props.theme.borderC};
  font-size: ${(props:any) => props.theme.size14};
`;
