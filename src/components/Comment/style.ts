import { styled } from "styled-components";
import { BsHeart, BsHeartFill } from "react-icons/bs";


export const CommentWrap = styled.div`
  margin-top: 3.75rem;
  padding-top: 3.125rem;
  border-top: 1px solid ${(props: any) => props.theme.borderC};
`;
export const Top = styled.div``
export const CommentTitle = styled.em`
  color: ${(props: any) => props.theme.black};
  font-weight: 600;
  font-size: 1.25rem;
  display: flex;
  align-items: flex-end;
  margin-bottom: 1.5625rem;
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
  width: 100%
  border: 1px solid ${(props: any) => props.theme.borderC};
  font-size: 1rem;
  outline: 0;
  height: 6.25rem;
  padding: 1.25rem;
  
  border-radius: 0.3125;
  resize: none;
`;

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1.25rem;
  gap: 0.625rem;
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
  padding-bottom: 1.875rem;
  margin-bottom: 1.875rem;
  &:last-child {
    margin-bottom: 0px;
  }
`;
export const CommentTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CommentLeft = styled.div`
  display: flex;
  align-items: center;
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
  margin-left: 0.625rem;
`;
export const ToggleBtn = styled.button`
  background: none;
`;

export const CommentText = styled.p`
  color: ${(props: any) => props.theme.black};
  margin: 1.25rem 0;
  line-height: 1.5;
`;

export const CommentBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const CommentLoveIcon = styled.div`
  cursor: pointer;
  font-size: 0;
  display: flex;
  align-items: center;
`;
export const LoveBorder = styled(BsHeart)`
  stroke: ${(props: any) => props.theme.borderC};
  font-size: 1rem;
`;
export const LoveFill = styled(BsHeartFill)`
  fill: ${(props: any) => props.theme.textRed};
  font-size: 1rem;
`;
export const CommentLoveNum = styled.span`
  margin-left: 0.3125rem;
  font-size: 1rem;
`;
export const CommentDate = styled.p``;
export const CommentWrite = styled.p`
  font-weight: 500;
  color: ${(props: any) => props.theme.brandColor};
  cursor: pointer;
`;

export const CommentWriteWrap = styled.div`
  background: ${(props: any) => props.theme.bgGrayColor};
  padding: 1.875rem 1.875rem;
  margin-top: 1.875rem;
  position: relative;
  &::after {
    position: absolute;
    left: 0;
    top: -2.5rem;
    width: 0;
    height: 0;
    border-bottom: 1.25rem solid ${(props: any) => props.theme.bgGrayColor};
    border-top: 1.25rem solid transparent;
    border-left: 1.25rem solid transparent;
    border-right: 1.25rem solid transparent;
    content: "";
  }
`;