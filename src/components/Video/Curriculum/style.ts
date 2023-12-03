import { styled } from "styled-components";
import { Delete } from "asset";
import { BiPlay, BiCheck } from "react-icons/bi";
import { Active } from "types";

export const Top = styled.div`
  padding: 20px 25px;
`;
export const Title = styled.strong`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props: any) => props.theme.black};
`;
export const Deletes = styled(Delete)`
  cursor: pointer;
`;
export const SubTitle = styled.em`
  display:block;
  margin: 1.25rem 0 0.75rem;
  font-size: 1.125rem;
  font-weight: 500;
  color: ${(props: any) => props.theme.black};
  line-height: 1.5;
`;
export const SubContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
   > p {
    font-size: 0.875rem;
    line-height: 1;
  }
  > p:first-child {
    width: 100%;
  }
`;
export const Gauge = styled.div`
  margin-top: 1.5625rem;
  width: 100%;
  background: ${(props: any) => props.theme.bgGrayColor};
  height: 5px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  > span {
    top: 0;
    bottom: 0;
    left: 0;
    position: absolute;
  }
`;

export const Bottom = styled.div`
  flex: 1 1 0%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    background: ${(props: any) => props.theme.bgGrayColor};
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props: any) => props.theme.borderD};
    width: 3px;
  }
`;

export const SectionTitle = styled.div`
  background: ${(props: any) => props.theme.bgGrayColor};
  padding: 20px 25px;
  border-top: 1px solid ${(props: any) => props.theme.borderD};
  border-bottom: 1px solid ${(props: any) => props.theme.borderD};
  > p {
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;
  }
  > em {
    color: ${(props: any) => props.theme.black};
    display: block;
    margin-top: 0.75rem;
    line-height: 1;
  }
`;

export const SectionCon = styled.ul`
  padding: 10px 0px;
`;
export const SectionConLi = styled.li<Active>`
  cursor: pointer;

  line-height: 50px;
  padding: 0 25px;
  font-size: 0.875rem;
  color: ${(props: any) =>
    props.$active ? props.theme.mainColor : props.theme.black};
  background: ${(props: any) => (props.$active ? props.theme.bgNavcolor : "")};
  font-weight: ${(props: any) => (props.$active ? "500" : "400")};
  position: relative;
  &:after {
    position: absolute;
    left: 0;
    top: 0;
    width: 5px;
    height: 100%;
    content: "";
    background: ${(props: any) => (props.$active ? props.theme.mainColor : "")};
  }
  &:hover {
    background: ${(props: any) => props.theme.bgNavcolor};
    color: ${(props: any) => props.theme.mainColor};
    font-weight: 500;
  }
  &:hover:after {
    position: absolute;
    left: 0;
    top: 0;
    width: 5px;
    height: 100%;
    content: "";
    background: ${(props: any) => props.theme.mainColor};
  }
  &:hover > div > svg {
    fill: ${(props: any) => props.theme.mainColor};
  }
`;

;
export const SectionText = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left:1rem;
`;
export const SectionIcon= styled.div`
  position:absolute;
  left:25px;
  top:0;
  bottom:0;
  margin:auto 0;
  content:'';
`
export const Play = styled(BiPlay)<Active>`
  fill: ${(props: any) =>
    props.$active ? props.theme.mainColor : props.theme.borderC};
`;
export const Check = styled(BiCheck)`
  fill: ${(props: any) => props.theme.mainColor};
`;
