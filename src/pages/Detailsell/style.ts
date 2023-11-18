import { styled } from "styled-components";
import { Active } from "types";
import { Arrow } from "asset";

// preview
export const DetailWrap = styled.div``;
export const PreviewArea = styled.section`
  background: #000;
  padding: 0px 0 80px;
  text-align: center;
`;
export const DetailThum = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 650px;
  position: relative;

  > div > iframe,
  > div {
    height: 100%;
    width: 100%;
  }
  
`;


export const DetailInfoTitle = styled.div`
  margin: 40px 0 30px;
  text-align: center;

  > span {
    font-weight: 500;
    font-size: 1.125rem;
    display: block;
    color: ${(props: any) => props.theme.textWhite};
    margin-bottom: 1rem;
    line-height: 1;
  }
  > em {
    font-weight: 700;
    font-size: 1.625rem;
    display: block;
    color: ${(props: any) => props.theme.textWhite};
    line-height: 1;
  }
`;
export const DetailUtils = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  position: relative;
  padding-bottom: 40px;
  &:after {
    content: "";
    width: 40px;
    height: 3px;
    background: ${(props: any) => props.theme.textWhite};
    bottom: 0;
    position: absolute;
    opacity: 0.4;
  }
`;
export const DetailUtilsItem = styled.span`
  display: flex;
  align-items: center;
  position: relative;
  line-height: 1;
  margin-right: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  color: ${(props: any) => props.theme.textWhite};
  > svg {
    margin-right: 5px;
  }
  &::after {
    content: "";
    width: 1px;
    height: 50%;
    background: #fff;
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
  }
  &:last-child::after {
    content: none;
  }
  &:last-child {
    margin-right: 0;
    padding-right: 0;
  }
 
`;



export const DetailHash = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap:5px;
  
`;
export const DetailHashli = styled.li`
  display: inline-block;

  background: ${(props: any) => props.theme.bgBlack};
  border-radius: 5px;
  padding: 10px 15px;
  border-radius: 5px;
  color: ${(props: any) => props.theme.textWhite};
  font-size: 0.875rem;
`;



// main content & info

export const DetailTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ddd;
  margin-bottom: 30px;
`;
export const DetailTabItem = styled.button`
  padding: 15px 30px;

  &:hover {
    color: ${(props: any) => props.theme.mainColor};
    font-weight: 500;
  }
`;

export const DetailMainWrap = styled.section`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
`;
export const LeftWrap = styled.div`
  width: 50rem;
  word-break:keep-all;
`;
export const Curriculum = styled.div`
  margin: 50px 0;
  padding: 50px 0 ;
  border-top: 1px solid ${(props: any) => props.theme.borderD};
  border-bottom: 1px solid ${(props: any) => props.theme.borderD};
`;

export const CurriculumTitle = styled.em`
  color: ${(props: any) => props.theme.black};
  font-weight: 700;
  font-size: 1.25rem;
  display: flex;
  align-items: flex-end;
  margin-bottom: 1rem;
`;
export const CurriculumCount = styled.p`
  margin-left: 0.625rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${(props: any) => props.theme.textColor};
`;
export const Curriculums = styled.span`
  color: ${(props: any) => props.theme.mainColor};
`;




export const CurriculumUl = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap:20px;
`;
export const CurriculumLi = styled.li`
  width: 100%;
  border: 1px solid ${(props: any) => props.theme.borderD};
  border-radius: 5px;
  overflow:hidden;
`;
export const CurriculumTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
  background: ${(props: any) => props.theme.bgGrayColor};
  font-weight: 500;
  font-size: 0.875rem;
  
  > p {
    display: flex;
    align-items: center;
  }
`;

export const Arr = styled(Arrow)<Active>`
  transform: ${(props: any) => (props.$active ? "rotatez(-180deg)" : "")};
  transition: all 0.3s;
  margin-left:10px;
`;
export const CurriculumBottom = styled.ul``;
export const CurriculumBottomLi = styled.li`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${(props: any) => props.theme.borderD};
  padding: 14px 20px;
  font-size: 0.875rem;
  color: ${(props: any) => props.theme.black};
  > p {
    display: flex;
    align-items: center;
  }
  > p > svg{
    margin-right:5px;
  }
`;




export const RightWrap = styled.div`
  position: sticky;
  margin-left: 6.25rem;
  width: 18.75rem;
  top: 50px;
  right: 0;
  left: 0;
`;
export const Top = styled.div`
  padding: 1.5625rem 1.5625rem;
  border: 1px solid ${(props: any) => props.theme.borderC};
  border-bottom: 0;
  border-radius: 5px 5px 0 0;
`;
export const TitleSub = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom:1rem;
  > p {
    font-weight: 700;
    line-height: 1;
    display: block;
    font-size: 1.5rem;
    color: ${(props: any) => props.theme.textRed};
  }
  > em {
    color: ${(props: any) => props.theme.black};
    font-weight: 700;
    line-height: 1;
    display: block;
    font-size: 1.5rem;
  }
  > span {
    text-decoration: line-through;
  }
`;

export const Button = styled.button<Active>`
  width: 100%;
  border-radius: 5px;
  height: 50px;
  margin-top: 10px;
  display: block;
  font-size: 0.875rem;
  color: ${(props: any) =>
    props.$active ? props.theme.mainColor : props.theme.textWhite};
  background: ${(props: any) =>
    props.$active ? props.theme.bgColor : props.theme.mainColor};
  border: 1px solid
    ${(props: any) => (props.$active ? props.theme.mainColor : "")};
`;


export const Bottom = styled.div`
  background: ${(props: any) => props.theme.bgGrayColor};
  border: 1px solid ${(props: any) => props.theme.borderC};
  border-top: 0;
  border-radius: 0 0 5px 5px;
  padding: 1.5625rem 1.5625rem;
  > p {
    background: ${(props: any) => props.theme.bgNavcolor};
    padding: 5px 5px;
    font-size: 0.875rem;
    text-align: center;
    color: ${(props: any) => props.theme.mainColor};
  }
`;

export const ButtomLi = styled.li`
  position: relative;
  padding-left: 10px;
  font-size: 0.875rem;
  margin-bottom:15px;
  line-height:1;
  &:after {
    content: "";
    width: 3px;
    height: 3px;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
    position: absolute;
    border-radius:5px;
    background: ${(props: any) => props.theme.mainColor};
  }
`;
