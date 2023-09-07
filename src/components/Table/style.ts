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
    background: ${(props: any) => props.theme.bgGrayColor};
  }
  &:nth-child(1) p{
    text-align: center;
  }
`;

const common = css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: ${(props: any) => props.theme.size14};
`;

export const Num = styled.div`
  width: 8%;
  ${common}
`;
export const Text = styled.div<I.TableCommon>`
  width: ${(props: any) => (props.$view ? "62%" : "65.66%")};
  text-align: left;
  ${common}
`;
export const CommonLi = styled.div`
  width: 10.5%;
  ${common}
`;
export const View = styled.div<I.TableCommon>`
  width: ${(props: any) => (props.$view ? "12%" : "8.34%")};
  ${common}
`;
export const Title = styled(Text)<I.TableCommon>`
  width: ${(props: any) => (props.$view ? "42.5%" : "19%")};
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


export const SwitchBtn = styled.div<I.TableCommon>`
  width: ${(props: any) => props.theme.size50};
  height: ${(props: any) => props.theme.size25};
  background: ${(props: any) =>
    props.$view ? props.theme.bgNavcolor : props.theme.borderC};
  border-radius: 25px;
  position: relative;
  margin: 0 auto;
  cursor: pointer;
`;
export const ToggleBtn = styled.div<I.TableCommon>`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  right: 2px;
  width: 21px;
  height: 21px;
  border-radius: 50%;
  transition: 0.4s;
  background: ${(props: any) =>
    props.$view ? props.theme.brandColor : props.theme.textColor};
  transform: ${(props: any) =>
    props.$view ? "translateX(0px);" : "translateX(-26px);"};
`;
