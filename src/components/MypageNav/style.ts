import { styled } from "styled-components";
import { IBtnNav } from "types";

export const Aside = styled.aside`
  width: 230px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-right:70px;
`;
export const AsideTit = styled.em`
  display: block;
  line-height: 1;
  color: ${(props) => props.theme.textPoint};
  font-size: ${(props) => props.theme.fontSize16px};
  font-weight: ${(props) => props.theme.fontSemiBold};
  margin-bottom:15px;
`;
export const AsideUl = styled.div``;
export const AsideBtn = styled.button<IBtnNav>`
  width: 100%;
  height: 40px;
  border: 0;
  text-align: left;
  padding-left: 10px;
  border-radius: 5px;
  background: ${(props) =>
    props.active ? props.theme.bgNavcolor : "transparent"};
  color: ${(props) =>
    props.active ? props.theme.textPoint : props.theme.textBlack};
`;