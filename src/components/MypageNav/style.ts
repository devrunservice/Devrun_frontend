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
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 1.25rem;
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
    props.$active ? props.theme.mainColor : props.theme.black};
`;


export const LectureTit = styled(AsideTit)`
  margin-bottom: 30px;
  color: ${(props) => props.theme.black};
`;

export const LectureBtn = styled.button<I.Active>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;
  padding: 0;
  font-size: 1rem;
  line-height:1;
  margin-top:15px;
  font-weight: ${(props) =>
    props.$active ? "500" : "400"};
  color: ${(props) =>
    props.$active ? props.theme.mainColor : props.theme.textColor};
`;