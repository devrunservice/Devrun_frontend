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
  color: ${(props) => props.theme.brandColor};
  font-size: ${(props) => props.theme.size16};
  font-weight: ${(props) => props.theme.semiBold};
  margin-bottom: 15px;
`;

export const AsideBtn = styled.button<I.Active>`
  width: 100%;
  height: 40px;
  border: 0;
  text-align: left;
  padding-left: 10px;
  border-radius: 5px;
  background: ${(props) =>
    props.$active ? props.theme.bgNavcolor : "transparent"};
  color: ${(props) =>
    props.$active ? props.theme.brandColor : props.theme.black};
`;
