import { styled } from "styled-components";
import { Delete } from "asset";



export const CommunityWrap = styled.div`
  display: flex;
  flex-direction: column;
  height:100%;
`;
export const Top = styled.div`
  padding: 20px 25px;
  border-bottom: 1px solid ${(props: any) => props.theme.borderD};
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

export const Center = styled.ul`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  padding: 20px 20px 0px;
  width: 100%;
  gap: 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    background: ${(props: any) => props.theme.bgColor};
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props: any) => props.theme.borderD};
    width: 3px;
  }
  > li {
    border: 1px solid ${(props: any) => props.theme.borderD};
    border-radius: 5px;
    box-shadow: rgba(23, 39, 75, 0.02) 0px 6px 7px -6px,
      rgba(23, 39, 75, 0.05) 0px 8px 18px -6px;
    transition: transform 0.15s linear 0s;
    cursor: pointer;
  }
  > li:hover {
    transform: translateY(-5px);
  }
`;
export const Button = styled.button`
  width: 100%;
  padding: 0;
  text-align: left;
`;
export const BtnTop = styled.div`
  padding: 12px;
  > span {
    display: inline-block;
    padding: 4px 6px;
    border-radius: 5px;
    color: ${(props: any) => props.theme.mainColor};
    background: ${(props: any) => props.theme.bgNavcolor};
    margin-bottom: 13px;
    font-size: 0.75rem;
    text-align: center;
  }
  > em {
    width: 100%;
    font-size: 1rem;
    line-height: 1;
    margin-bottom: 10px;
    color: ${(props: any) => props.theme.black};
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  > p {
    font-size: 0.875rem;
    overflow: hidden;
    line-height: 1;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
export const BtnBtm = styled.div`
  padding: 12px;
  border-top: 1px solid ${(props: any) => props.theme.borderD};
  display: flex;
  justify-content: space-between;
`;

export const Write = styled.div`
  background: ${(props: any) => props.theme.bgColor};
  padding: 20px 20px;
  > button {
    background: ${(props: any) => props.theme.mainColor};
    color: ${(props: any) => props.theme.textWhite};
    width: 100%;
    border-radius: 5px;
    line-height: 50px;
  }
`;

export const NoQuest = styled.p`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;

export const Editor = styled.div`
  padding: 20px 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  > .quill {
    flex: 1 1 0%;
  }
`;