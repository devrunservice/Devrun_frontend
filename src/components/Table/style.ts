import { styled, css } from "styled-components";
import * as I from "types"; 


export const Table = styled.ul`
  border-top: 1px solid ${(props: any) => props.theme.borderC};
  min-height: 621px;
`;
export const ReceiptTable = styled(Table)`
  min-height: 721px;
`;
export const TableLi = styled.li<I.Table | I.ReceiptTable>`
  border-bottom: 1px solid ${(props: any) => props.theme.borderC};
  display: flex;
  align-items: center;
  padding: 20px 0;
  text-align: center;
  cursor: ${(props: any) => (props.$cursor ? "pointer" : "")};
  &:hover {
    color: ${(props: any) => props.theme.black};
    background: ${(props: any) => props.theme.bgGrayColor};
  }
`;

const common = css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 0 5px;
  font-size: ${(props: any) => props.theme.size14};
`;

export const Num = styled.p`
  width: 5.78%;
  ${common}
`;
export const Text = styled.p`
  width: calc(100% - 34.34%);
  text-align: left;
  ${common}
`;
export const CommonLi = styled.p`
  width: 10.11%;
  ${common}
`;
export const View = styled.p`
  width: 8.34%;
  ${common}
`;
export const Title = styled(Text)`
  width: calc(100% - 42%);
`;
export const PayBtn = styled(View)`
  width: 18%;
  display: flex;
  justify-content: center;
  gap: 5px;
`;

export const Button = styled.button<I.Table>`
  background: ${(props: any) =>
    props.$color ? props.theme.textRed : props.theme.brandColor};
  border-radius: 5px;
  color: ${(props: any) => props.theme.textWhite};
  padding: 5px 10px;
`;
