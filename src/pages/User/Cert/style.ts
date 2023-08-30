import { styled } from "styled-components";
import {  Stamp } from "asset";
import CertBg from "asset/images/CertBg.png";



export const CertWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  border: 1px solid ${(props: any) => props.theme.borderC};
`;
export const Certbox = styled.div`
  margin:0 auto;
  width: 21cm;
  min-height: 29.7cm;
  padding: 2cm 1.5cm ;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  background: url("${CertBg}") no-repeat center center;
`;
export const Top = styled.div`
  width: ${(props: any) => props.theme.size100};
`;
export const Bottom = styled(Top)`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
`;

export const SubTitle = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${(props: any) => props.theme.size14};
  line-height:1;
`;
export const Dot = styled.span`
  color: ${(props: any) => props.theme.textYello};
  font-size: ${(props: any) => props.theme.size20};
  font-weight: ${(props: any) => props.theme.semiBold};
`;
export const Title = styled.strong`
  color: ${(props: any) => props.theme.black};
  font-size: ${(props: any) => props.theme.size40};
  line-height: ${(props: any) => props.theme.size50};
  font-weight: ${(props: any) => props.theme.bold};
  margin: 1.25rem 0 4.375rem;
  display: block;
`;
export const Content = styled.ul`
  position:relative;
  z-index:1
`;
export const ContentLi = styled.li`
  margin-top: 3.125rem;
`;
export const ConDate = styled.span`
  color: ${(props: any) => props.theme.black};
  font-weight: ${(props: any) => props.theme.semiBold};
  font-size: ${(props: any) => props.theme.size14};
  line-height: 1;
  display:block;
`;
export const Context = styled(ConDate)`
  color: ${(props: any) => props.theme.brandColor};
  margin-bottom: 1rem;
`;
export const Contitle = styled.p`
  color: ${(props: any) => props.theme.black};
  font-weight: ${(props: any) => props.theme.semiBold};
  font-size: ${(props: any) => props.theme.size18};
  line-height: 1;
`;
export const LogoIcon = styled.div``;
export const CopyText = styled.p`
  font-size: ${(props: any) => props.theme.size14};
  margin-bottom: 1.87rem;
`;

export const Right = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const StampIcon = styled(Stamp)`
  width: ${(props: any) => props.theme.size120};
  height: ${(props: any) => props.theme.size120};
  font-size:0;
  
`;
