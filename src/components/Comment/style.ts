import { styled } from "styled-components";
import { BsArrowReturnRight } from "react-icons/bs";


export const CommentTitle = styled.em`
  color: ${(props: any) => props.theme.black};
  font-weight: 600;
  font-size: 1.125rem;
  display: flex;
  align-items: flex-end;
  margin-bottom: 1rem;
`;
export const CommentCount = styled.p`
  margin-left: 0.625rem;
  font-weight: ${(props: any) => props.theme.regular};
  font-size: 1rem;
`;
export const Comments = styled.span`
  color: ${(props: any) => props.theme.brandColor};
  font-weight: 500;
`;
export const CommentBox = styled.textarea`
  width: 100%;
  border: 1px solid ${(props: any) => props.theme.borderC};
  outline: 0;
  height: 7.625rem;
  padding: 1.25rem;
  border-radius: 0.3125rem;
  resize: none;
`;
export const CommentBoxRe = styled(CommentBox)`
  height: 12.625rem;
`;

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1.25rem;
  gap: 0.625rem;
`;
export const ButtonWrapCommnet = styled(ButtonWrap)`
  margin: 0;
  right: 1.25rem;
  bottom: 1.6rem;
  position: absolute;
`;
export const CommentNum = styled.p`
  font-size: 0.875rem
`;

export const CommentUl = styled.ul`
  border-top: 1px solid ${(props: any) => props.theme.borderC};
  padding: 1.875rem 0 0;
  margin-top: 3.125rem;
`;
export const CommentLi = styled.li`
  border-bottom: 1px solid ${(props: any) => props.theme.borderC};
  margin-bottom: 1.875rem;
  &:last-child {
    margin-bottom: 0px;
  }
`;
export const CommentTop = styled.div`
  display: flex;
  gap: 0.625rem;
  align-items: center;
  justify-content: space-between;
  > div:nth-child(1) {
    display: flex;
    align-items: center;
    gap: 15px;
  }
`;
export const CommentImgBox = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;
  border-radius: 2.5rem;
  position: relative;
`;
export const CommentImg = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;

export const CommentName = styled.p`
  color: ${(props: any) => props.theme.black};
  font-weight: 500;
`;
export const CommentTime = styled.p`
  font-size: 0.875rem;
`;

export const CommentText = styled.p`
  color: ${(props: any) => props.theme.black};
  margin: 1.25rem 0 1.875rem;
  line-height: 1.5;
`;


export const CommentWrite = styled.button`
  font-weight: 500;
  color: ${(props: any) => props.theme.black};
  background: none;
`;
export const CommentRe = styled(CommentWrite)`
  color: ${(props: any) => props.theme.brandColor};
`;
export const CommentRemove = styled(CommentWrite)`
  color: ${(props: any) => props.theme.textRed};
`;
export const CommentWriteWrap = styled.form`
  margin: 1.875rem 0;
  position: relative;
`;

export const Reply = styled.li`
  border-top: 1px dashed ${(props: any) => props.theme.borderC};
  margin: 1.25rem 0 0 1.25rem;
  padding-top: 1.25rem;
  position: relative;
  > div {
    width: calc(100% - 16px);
    padding-left: 1.875rem;
  }
`;
export const ReplyIcon = styled(BsArrowReturnRight)`
  position: absolute;
  top: 1.25rem;
  left: 0;
`;