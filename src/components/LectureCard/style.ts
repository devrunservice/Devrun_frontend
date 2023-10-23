import { styled } from "styled-components";
import { AiFillStar } from "react-icons/ai";


export const List = styled.li`
  cursor:pointer
`;
export const ListThumbnail = styled.div`
  border-radius: 10px;
  background: #ddd;
  width: 100%;
  min-height: 160px;
  margin-bottom: 20px;
`;
export const ListTextArea = styled.div``;





export const Progress = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size:0.75rem;;
`;




export const ListTitle = styled.div`
  display: block;
  color: ${(props: any) => props.theme.black};
  font-weight: 600;
  line-height: 22px;
  height: 44px;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ListText = styled.div`
  margin-top: 0.625rem;
  line-height: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export const Price = styled.p`

  font-size: 0.875rem;
  color: ${(props) => props.theme.black};
  > span {
    color: ${(props) => props.theme.brandColor};
    font-size: 1.125rem;
    font-weight: 700;
  }
`;

export const ListTeacher = styled.p`
  color: ${(props) => props.theme.black};
  display: flex;
  font-size: 0.875rem;
  > span {
    display: flex;
    align-items: center;
    position: relative;
    margin-left: 1rem;
  }
  > span:after {
    width: 3px;
    height: 3px;
    content: "·";
    left: -0.5rem;
    bottom: 0;
    top: 0;
    position: absolute;
  }
`;
export const Star = styled(AiFillStar)`
  fill: ${(props) => props.theme.textYello};
  margin-right:3px;
`;

export const ListViewCount = styled.span`
  padding: 0.625rem 0.625rem;
  background: ${(props) => props.theme.bgGrayColor};
  font-size: 0.75rem;
  box-sizing: border-box;
  border-radius: 5px;
  line-height: 1;
  margin-top: 0.875rem;
  display: inline-block;
  margin-right: 0.75rem;
`;