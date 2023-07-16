import { styled } from "styled-components";

export const Cert = styled.section`
  width: calc(100% - 300px);
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;
export const Title = styled.h4`
  line-height: 1;
  font-size: ${(props: any) => props.theme.fontSize25px};
  font-weight: ${(props: any) => props.theme.fontBold};
  color: ${(props: any) => props.theme.textBlack};
  display: flex;
  align-items: flex-end;
`;

export const Number = styled.p`
  margin-left: 20px;
  font-weight: ${(props: any) => props.theme.fontRegular};
  font-size: ${(props: any) => props.theme.fontSize16px};
`;
export const NumCount = styled.span`
  color: ${(props: any) => props.theme.textPoint};
  font-weight: ${(props: any) => props.theme.fontMedium};
`;

export const CertCon = styled.article`
  min-height: 568px;
  width: 100%;
  > :nth-child(1) {
    border-top: 1px solid ${(props: any) => props.theme.borderGray};
  }
`;

export const CertConLi = styled.div`
  border-bottom: 1px solid ${(props: any) => props.theme.borderGray};
  display: flex;
  align-items: center;
  padding: 20px 0;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: ${(props: any) => props.theme.textBlack};
    background: ${(props: any) => props.theme.bgGrayColor};
  }
`;

export const Num = styled.p`
  width: 5.83%;
  padding: 0 10px;
`;
export const Text = styled.p`
  width: calc(100% - 18.51%);
  text-align: left;
  padding: 0 10px;
`;

export const Date = styled.p`
  width: 9.58%;
  padding: 0 10px;
`;

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