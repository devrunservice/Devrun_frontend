import { styled } from "styled-components";

export const List = styled.li`
  color: ${(props) => props.theme.black};
  margin-bottom: 30px;
  width: 100%;
`;
export const ListThumbnail = styled.div`
  border-radius: 10px;
  background: #ddd;
  width: 100%;
  min-height: 160px;
  margin-bottom: 20px;
`;
export const ListTextArea = styled.div``;
export const ListTitle = styled.div`
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 15px;
`;
export const ListTeacher = styled.span`
  display: inline-block;
  position: relative;
  padding-left: 8px;
  margin: 0 5px;
  color: ${(props) => props.theme.textColor};
  &::after {
    width: 1px;
    height: 80%;
    content: "";
    position: absolute;
    left: 0px;
    top: 50%;
    transform: translateY(-50%);
    background: ${(props) => props.theme.textColor};
  }
`;
export const ListUtils = styled.div`
  margin-top: 10px;
`;
export const ListViewCount = styled.span`
  margin-left: 10px;
`;

export const Progress = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: ${(props) => props.theme.size12};
`;
