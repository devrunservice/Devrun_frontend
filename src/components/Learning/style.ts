import { styled } from "styled-components";
import { ILearnTap } from "types";



export const Learn = styled.section`
  width: calc(100% - 250px);
`;
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom:30px;
`;
export const Title = styled.h4`
  line-height: 1;
  font-size: ${(props: any) => props.theme.fontSize25px};
  font-weight: ${(props: any) => props.theme.fontBold};
  color: ${(props: any) => props.theme.textBlack};
  display: flex;
  align-items: flex-end;
`;
export const SearchWrap = styled.div``;
export const Search = styled.input`
  border: 1px solid ${(props: any) => props.theme.borderGray};
  border-radius: 5px 0 0 5px;
  height: 40px;
  padding: 0 10px;
  width: 250px;
  outline: 0;
`;
export const SearchButton = styled.button`
  cursor: pointer;
  width: ${(props: any) => props.theme.width85};
  color: ${(props: any) => props.theme.textWhite};
  background: ${(props: any) => props.theme.textPoint};
  vertical-align: top;
  height: 40px;
  border-radius: 0px 5px 5px 0px;
`;
export const LearnCon = styled.div``;
export const TapWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const Left = styled.div`
  display: flex;
  gap:10px;
  alin
`;
export const Btn = styled.button<ILearnTap>`
  border-radius: 5px;
  width: ${(props: any) => props.theme.width85};
  color: ${(props: any) =>
    props.active ? props.theme.textWhite : props.theme.textPoint};
  border:1px solid ${(props: any) =>props.theme.textPoint};

  background: ${(props: any) =>
    props.active ? props.theme.textPoint : props.theme.textWhite};
  height: 40px;
`;
export const Tap = styled.div`
  width: ${(props: any) => props.theme.width95};
  border: 1px solid ${(props: any) => props.theme.borderGray};
  height: 40px;
  position: relative;
  box-sizing: content-box;
  border-radius:5px;
`;
export const TapLabel = styled.p`
  font-size: ${(props: any) => props.theme.fontSize14px};
  line-height: 40px;
  padding-left: 10px;
  cursor: pointer;
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
  height:32px;
  line-height:32px;
  padding-left:10px;
`;

export const LearnUl = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  min-height: 861px;
`;
