import { styled, css } from "styled-components";
import * as I from "types"; 


export const Table = styled.ul`
  min-height: 38.25rem;
  margin-top: 1.875rem
`;
export const ReceiptTable = styled(Table)`
  min-height: 45.06rem;
`;
export const TableLi = styled.li<I.TableCommon>`
  border-bottom: 1px solid ${(props: any) => props.theme.borderC};
  display: flex;
  align-items: center;
  padding: 1rem 0;
  text-align: center;
  cursor: ${(props: any) => (props.$cursor ? "pointer" : "")};

  &:nth-child(1) {
    border-top: 1px solid ${(props: any) => props.theme.borderC};
  }
`;

const common = css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 0 0.31rem;
  font-size: ${(props: any) => props.theme.size14};
`;

export const Num = styled.p`
  width: 5.78%;
  ${common}
`;
export const Text = styled.p<I.TableCommon>`
  width: ${(props: any) =>
    props.$view ? "calc(100% - 38%)" : "calc(100% - 34.34%)"};
  text-align: left;
  ${common}
`;
export const CommonLi = styled.p`
  width: 10.11%;
  ${common}
`;
export const View = styled.p<I.TableCommon>`
  width: ${(props: any) => (props.$view ? "12%" : "8.34%")};
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

export const Button = styled.button<I.TableCommon>`
  background: ${(props: any) =>
    props.$color ? props.theme.textRed : props.theme.brandColor};
  border-radius: 5px;
  color: ${(props: any) => props.theme.textWhite};
  padding: 8px 10px;
`;
