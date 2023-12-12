import { styled } from "styled-components";



export const CommunityWrap = styled.div`
  display: flex;
  flex-direction: column;
  height:100%;
`;

export const Center = styled.div`
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
`;
export const Button = styled.button`
  width: 100%;
  padding: 0;
  text-align: left;
  border: 1px solid ${(props: any) => props.theme.borderD};
  border-radius: 5px;
  box-shadow: rgba(23, 39, 75, 0.02) 0px 6px 7px -6px,
    rgba(23, 39, 75, 0.05) 0px 8px 18px -6px;
  transition: transform 0.15s linear 0s;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
  }
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