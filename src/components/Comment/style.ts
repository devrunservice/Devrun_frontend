import { styled } from "styled-components";
import { BsHeart, BsHeartFill } from "react-icons/bs";

export const CommentWrap = styled.div`
  margin-top: 60px;
  padding-top: 50px;
  border-top: 1px solid ${(props: any) => props.theme.borderGray};
`;
export const Top = styled.div``
export const CommentTitle = styled.em`
  color: ${(props: any) => props.theme.textBlack};
  font-weight: ${(props: any) => props.theme.fontSemiBold};
  font-size: ${(props: any) => props.theme.fontSize20px};
  display: flex;
  align-items: flex-end;
  margin-bottom: 25px;
`;
export const CommentCount = styled.p`
  margin-left: 10px;
  font-weight: ${(props: any) => props.theme.fontRegular};
  font-size: ${(props: any) => props.theme.fontSize16px};
`;
export const Comments = styled.span`
  color: ${(props: any) => props.theme.textPoint};
  font-weight: ${(props: any) => props.theme.fontMedium};
`;
export const CommentBox = styled.textarea`
  width: ${(props: any) => props.theme.width100};
  border: 1px solid ${(props: any) => props.theme.borderGray};
  font-size: ${(props: any) => props.theme.fontSize16px};
  outline: 0;
  height: 100px;
  padding: 20px 20px;
  
  border-radius: 5px;
  resize: none;
`;

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
  gap: 10px;
`;
export const CommentNum = styled.p`
  font-size: ${(props: any) => props.theme.fontSize14px};
`;
export const Button = styled.button`
  width: ${(props: any) => props.theme.width85};
  border-radius: 5px;
  height: 40px;

  font-size: ${(props: any) => props.theme.fontSize14px};
  color: ${(props: any) => props.theme.textWhite};
  background: ${(props: any) => props.theme.textPoint};
`;
export const ButtonOut = styled(Button)`
  color: ${(props: any) => props.theme.textPoint};
  border: 1px solid ${(props: any) => props.theme.textPoint};
  background: ${(props: any) => props.theme.bgColor};
`;

export const CommentUl = styled.ul`
  border-top: 1px solid ${(props: any) => props.theme.borderGray};
  padding: 30px 0 0;
  margin-top: 50px;
  
`;
export const CommentLi = styled.li`
  border-bottom: 1px solid ${(props: any) => props.theme.borderGray};
  padding-bottom: 30px;
  margin-bottom: 30px;
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
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 40px;
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
  color: ${(props: any) => props.theme.textBlack};
  font-weight: ${(props: any) => props.theme.fontMedium};
  margin-left:10px
`;
export const ToggleBtn = styled.button`
  background: none;
`;

export const CommentText = styled.p`
  color: ${(props: any) => props.theme.textBlack};
  margin:20px 0;
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
  stroke: ${(props: any) => props.theme.borderGray};
  font-size: ${(props: any) => props.theme.fontSize16px};
`;
export const LoveFill = styled(BsHeartFill)`
  fill: ${(props: any) => props.theme.textRed};
  font-size: ${(props: any) => props.theme.fontSize16px};
`;
export const CommentLoveNum = styled.span`
  margin-left: 5px;
  font-size: ${(props: any) => props.theme.fontSize16px};
`;
export const CommentDate = styled.p``;
export const CommentWrite = styled.p`
  font-weight: ${(props: any) => props.theme.fontMedium};
  color: ${(props: any) => props.theme.textPoint};
  cursor: pointer;
`;

export const CommentWriteWrap = styled.div`
  background: ${(props: any) => props.theme.bgGrayColor};
  padding: 30px 30px;
  margin-top: 30px;
  position: relative;
  &::after {
    position: absolute;
    left: 0;
    top: -40px;
    width: 0;
    height: 0;
    border-bottom: 20px solid ${(props: any) => props.theme.bgGrayColor};
    border-top: 20px solid transparent;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    content: "";
  }
`;