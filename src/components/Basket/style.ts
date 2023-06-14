import { styled } from "styled-components";
import { Delete, Arrow, Coupon } from "asset";
import Checked from "asset/Checked.png"


export const GaryBg = styled.div`
  background: ${(props) => props.theme.bgGrayColor};
  width: 100%;
  padding: 40px 0 100px;
`;
export const WhiteBg = styled.div`
  background: ${(props) => props.theme.bgColor};
  border-radius: 5px;
  padding: 30px 30px;
  width: 800px;
  margin: 20px auto 0;
  &:first-child{
    margin-top:0;
  }
`;
export const Title = styled.h4`
  font-size: ${(props) => props.theme.fontSize20px};
  color: ${(props) => props.theme.textBlack};
  font-weight: ${(props) => props.theme.fontSemiBold};
  margin-bottom: 25px;
`;
export const SelectWarp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Left = styled.div`
  display: flex;
  align-items: center;
`;
export const CheckBox = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.borderGray};
  &:checked {
    background: ${(props) => props.theme.textPoint} url("${Checked}") center
      center no-repeat;
    border: 1px solid ${(props) => props.theme.textPoint};
  }
`;

export const CheckLabel = styled.label`
  color: ${(props) => props.theme.textBlack};
  padding-left: 5px;
  cursor: pointer;
`;
export const CheckAll = styled.span`
  color: ${(props) => props.theme.textPoint};
`;

export const Right = styled.button`
  width: 95px;
  height: 40px;
  border-radius: 5px;
  background: ${(props) => props.theme.bgColor};
  border: 1px solid ${(props) => props.theme.borderGray};
  color: ${(props) => props.theme.textBlack};
  
`;
export const Deletes = styled(Delete)`
  margin-left: 5px;
`;
export const Product = styled.ul`
  border-top: 1px solid ${(props) => props.theme.borderBlack};
  margin-top: 15px;
`;
export const ProductLi = styled.li`
  border-bottom: 1px dashed #ddd;
  padding: 20px 0;
  display: flex;
  &:last-child {
    border-bottom: 1px solid #ddd;
  }
`;
export const ContentBox = styled.div`
  display: flex;
  align-items: center;
  width:calc(100% - 16px)
`;
export const ImgWrap = styled.div`
  width: 171px;
  margin: 0 20px 0 5px;
`;
export const ImgBox = styled.div`
  
  width: 100%;
  height: 0;
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;
  border-radius: 5px;
`;
export const Img = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`;
export const TextBox = styled.div`
  width: calc(100% - 212px);
  display: flex;
`;
export const TextLeft = styled.div`
  width: 65%;
`;
export const TitleText = styled.em`
  display: block;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: ${(props) => props.theme.textBlack};
  font-weight: ${(props) => props.theme.fontMedium};
  margin-bottom: 10px;
`;
export const SubText = styled.p`
  display: block;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 18px;
`;
export const Writer = styled.p`
  font-size: ${(props) => props.theme.fontSize14px};
`;
export const Hours = styled.span`
  color: ${(props) => props.theme.textPoint};
`;
export const TextRight = styled.div`
  width:calc(100% - 65%);
  text-align:right;
`
export const Discount = styled.span`
  margin-right: 8px;
  color: ${(props) => props.theme.textRed};
  font-weight: ${(props) => props.theme.fontSemiBold};
  font-size: ${(props) => props.theme.fontSize14px};
`;
export const DiscountNum = styled.span`
  position: relative;
  font-size: ${(props) => props.theme.fontSize14px};
  &::after {
    position: absolute;
    width: 100%;
    height: 1px;
    background: ${(props) => props.theme.textColor};
    content: "";
    top: 0;
    bottom: 0;
    margin: auto 0;
    left: 0;
  }
`;
export const Money = styled.p`
  font-size: ${(props) => props.theme.fontSize18px};
  color: ${(props) => props.theme.textBlack};
  font-weight: ${(props) => props.theme.fontBold};
  margin-top:10px;
`;

export const InfoWrap = styled.p`
  position: relative;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0px;
  }
`;
export const Info = styled.p`
  position: absolute;
  width: calc(100% - 120px);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  left: 120px;
  top: 0;
`;
export const SubTitle = styled.em`
  color: ${(props) => props.theme.textBlack};
  font-weight: ${(props) => props.theme.fontMedium};
`;
export const Count = styled.p``;
export const CountSpan = styled.span`
  color: ${(props) => props.theme.textPoint};
`;
export const SelectBox = styled.div`
  margin: 15px 0 20px;
  position: relative;
`;
export const SelectLabel = styled.label`
  width: 100%;
  border: 1px solid ${(props) => props.theme.borderGray};
  font-size: ${(props) => props.theme.fontSize14px};
  border-radius: 5px;
  display: block;
  padding: 0 10px;
  line-height: 45px;
  height: 45px;
  cursor: pointer;
`;
export const Arr = styled(Arrow)`
  position:absolute;
  right:10px;
  bottom:0;
  top:0;
  margin: auto 0;
`
export const SelectBoxUi = styled.ul`
  border: 1px solid ${(props) => props.theme.borderGray};
  font-size: ${(props) => props.theme.fontSize14px};
  background: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textBlack};
  position: absolute;
  width: 100%;
  padding: 15px 15px;
  top: 39px;
`;

export const SelectBoxLi = styled.li`
  margin-bottom: 13px;
  font-size: ${(props) => props.theme.fontSize14px};
  cursor: pointer;
  color: ${(props) => props.theme.textBlack};
  &:last-child {
    margin-bottom: 0px;
  }
`;
export const PointInput = styled.input`
  margin: 15px 0 20px;
  width: 100%;
  line-height: 45px;
  height: 45px;
  border: 1px solid ${(props) => props.theme.borderGray};
  font-size: ${(props) => props.theme.fontSize14px};
  border-radius: 5px;
  padding: 0 10px;
  color: ${(props) => props.theme.textBlack};
  outline: 0;
  &:focus {
    border: 1px solid ${(props) => props.theme.textPoint};
  }
  &::placeholder {
    color: ${(props) => props.theme.textColor};
  }
`;
export const DisCountInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;
export const DisCountInfoLeft = styled.p`
  color: ${(props) => props.theme.textRed};
  font-size: ${(props) => props.theme.fontSize14px};
  display: flex;
  align-items: center;
`;
export const CouponDisCount = styled(Coupon)`
  margin-right: 5px;
`;

export const DisCountInfoRight = styled.p`
  color: ${(props) => props.theme.textRed};
  font-size: ${(props) => props.theme.fontSize14px};
`;
export const TotalWrap = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid ${(props) => props.theme.borderGray};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Total = styled.p`
  color: ${(props) => props.theme.textBlack};
  font-weight: ${(props) => props.theme.fontBold};
  font-size: ${(props) => props.theme.fontSize18px};
`;
export const Privacy = styled.p`
  margin-top: 10px;
  font-size: ${(props) => props.theme.fontSize14px};
  > span {
    text-decoration: underline;
  }
`;
export const Button = styled.button`
  width: 800px;
  font-size: ${(props) => props.theme.fontSize14px};
  border-radius: 5px;
  color: ${(props) => props.theme.textWhite};
  line-height: 45px;
  height: 45px;
  margin: 20px auto 0;
  display: block;
  background: ${(props) => props.theme.textPoint};
`;