import { styled } from "styled-components";
import * as I from "types";

export const Aside = styled.aside`
  width: 230px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-right: 70px;

`;
export const AsideUl = styled.div`
  width: 100%;
`;
export const AsideTit = styled.em`
  display: block;
  line-height: 1;
  color: ${(props) => props.theme.mainColor};
  margin-bottom: 25px;
  font-weight: 700;
  font-size: 1.25rem;
`;

export const AsideBtn = styled.button<I.Active>`
  width: 100%;
  height: 45px;
  border: 0;
  text-align: left;
  padding: 0 10px;
  border-radius: 5px;
  background: ${(props) =>
    props.$active ? props.theme.bgNavcolor : "transparent"};
  color: ${(props) =>
    props.$active ? props.theme.mainColor : props.theme.black};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


