import { styled } from "styled-components";
import {  Stamp } from "asset";
import CertBg from "asset/images/CertBg.png";



export const CertWrap = styled.div`
  width: 100%;
  margin: 1.875rem auto 0;
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
  width: 100%;
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
  font-size: 0.875rem
  line-height:1;
`;
export const Dot = styled.span`
  color: ${(props: any) => props.theme.textYello};
  font-size: 1.25rem
  font-weight: 600
`;
export const Title = styled.strong`
  color: ${(props: any) => props.theme.black};
  font-size: 2.5rem;
  line-height: 3.125rem;
  font-weight: 700;
  margin: 1.25rem 0 4.375rem;
  display: block;
`;
export const Content = styled.ul`
  position:relative;
  z-index:1;
`;
export const ContentLi = styled.li`
  margin-top: 3.125rem;
`;
export const ConDate = styled.span`
  color: ${(props: any) => props.theme.black};
  font-weight:600;
  font-size: 0.875rem;
  line-height: 1;
  display:block;
`;
export const Context = styled(ConDate)`
  color: ${(props: any) => props.theme.mainColor};
  margin-bottom: 1rem;
`;
export const Contitle = styled.p`
  color: ${(props: any) => props.theme.black};
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1;
`;
export const LogoIcon = styled.div``;
export const CopyText = styled.p`
  font-size: 0.875rem;
  margin-bottom: 1.87rem;
`;

export const Right = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const StampIcon = styled(Stamp)`
  width: 7.5rem;
  height: 7.5rem;
  font-size:0;
  
`;
