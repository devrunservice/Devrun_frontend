import { styled } from "styled-components";
import { Arrow } from "asset";
import { ILearnTap, ILearning } from "types";


export const LearnCon = styled.div`
  width:100%;
`;
export const TapWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const Left = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const Btn = styled.button<ILearnTap>`
  border-radius: 5px;
  width: ${(props: any) => props.theme.width85};
  color: ${(props: any) =>
    props.active ? props.theme.textWhite : props.theme.textPoint};
  border: 1px solid ${(props: any) => props.theme.textPoint};

  background: ${(props: any) =>
    props.active ? props.theme.textPoint : props.theme.textWhite};
  height: 40px;
`;
export const Tap = styled.div<ILearning>`
  width: ${(props: any) => props.theme.width95};
  border: 1px solid ${(props: any) => props.theme.borderGray};
  height: 40px;
  position: relative;
  box-sizing: content-box;
  border-radius: ${(props: any) => props.active ? "5px 5px 0 0" : "5px"};
`;
export const TapLabel = styled.p`
  font-size: ${(props: any) => props.theme.fontSize14px};
  line-height: 40px;
  padding-left: 10px;
  cursor: pointer;
`;
export const Arr = styled(Arrow)<ILearning>`
  position: absolute;
  right: 10px;
  bottom: 0;
  top: 0;
  margin: auto 0;
  transform: ${(props: any) => (props.active ? "rotatez(-180deg)" : "")};
  transition: all 0.3s;
`;
export const TapUl = styled.ul`
  position: absolute;
  border: 1px solid ${(props: any) => props.theme.borderGray};
  width: ${(props: any) => props.theme.width100};
  top: 40px;
  padding: 8px 0;
  box-sizing: content-box;
  left: -1px;
`;
export const TapLi = styled.li`
  font-size: ${(props: any) => props.theme.fontSize14px};
  cursor: pointer;
  height: 32px;
  line-height: 32px;
  padding-left: 10px;
`;

export const LearnUl = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  min-height: 861px;
`;
