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
