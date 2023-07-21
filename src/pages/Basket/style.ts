import { styled } from "styled-components";
import { Delete, Arrow, Coupon } from "asset";
import { IPrice } from "types";
import Checked from "asset/images/Checked.png";

export const BasketForm = styled.form`
  width:100%;
`;

export const WhiteSmallBg = styled.div`
  margin: 60px auto 0;
  &:first-child {
    margin-top: 0;
  }
`;
export const Title = styled.h4`
  font-size: ${(props: any) => props.theme.fontSize20px};
  color: ${(props: any) => props.theme.textBlack};
  font-weight: ${(props: any) => props.theme.fontBold};
  margin-bottom: 25px;
  line-height: 1;
`;
export const SelectWarp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1;
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
  border: 1px solid ${(props: any) => props.theme.borderGray};
  &:checked {
    background: ${(props: any) => props.theme.textPoint} url("${Checked}")
      center center no-repeat;
    border: 1px solid ${(props: any) => props.theme.textPoint};
  }
`;

export const CheckLabel = styled.label`
  color: ${(props: any) => props.theme.textBlack};
  padding-left: 5px;
  cursor: pointer;
`;
export const CheckAll = styled.span`
  color: ${(props: any) => props.theme.textPoint};
`;

export const Right = styled.button`
  width: 95px;
  height: 40px;
  border-radius: 5px;
  background: ${(props: any) => props.theme.bgColor};
  border: 1px solid ${(props: any) => props.theme.borderGray};
  color: ${(props: any) => props.theme.textBlack};
`;
export const Deletes = styled(Delete)`
  margin-left: 5px;
`;
export const Product = styled.ul`
  border-top: 1px solid ${(props: any) => props.theme.borderBlack};
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
export const ContentBox = styled.label`
  display: flex;
  align-items: center;
  width: calc(100% - 16px);
`;
export const ImgWrap = styled.div`
  width: 170px;
  height: 95px;
  overflow: hidden;
  border-radius: 5px;
  margin: 0 20px 0 5px;
`;

export const Img = styled.img`
  width: inherit;
  height: inherit;
  object-fit: cover;
  padding: 0;
  max-width: 100%;
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
  color: ${(props: any) => props.theme.textBlack};
  font-weight: ${(props: any) => props.theme.fontMedium};
  margin-bottom: 10px;
  line-height: 1;
`;
export const SubText = styled.p`
  display: block;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 18px;
  line-height: 1;
`;
export const Writer = styled.p`
  font-size: ${(props: any) => props.theme.fontSize14px};
  line-height: 1;
`;
export const Hours = styled.span`
  color: ${(props: any) => props.theme.textPoint};
`;
export const TextRight = styled.div`
  width: calc(100% - 65%);
  text-align: right;
`;
export const Discount = styled.span`
  margin-right: 8px;
  color: ${(props: any) => props.theme.textRed};
  font-weight: ${(props: any) => props.theme.fontSemiBold};
  font-size: ${(props: any) => props.theme.fontSize14px};
  line-height: 1;
`;
export const DiscountNum = styled.span`
  position: relative;
  font-size: ${(props: any) => props.theme.fontSize14px};
  line-height: 1;
  &::after {
    position: absolute;
    width: 100%;
    height: 1px;
    background: ${(props: any) => props.theme.textColor};
    content: "";
    top: 0;
    bottom: 0;
    margin: auto 0;
    left: 0;
  }
`;
export const Money = styled.p`
  font-size: ${(props: any) => props.theme.fontSize18px};
  color: ${(props: any) => props.theme.textBlack};
  font-weight: ${(props: any) => props.theme.fontBold};
  margin-top: 10px;
  line-height: 1;
`;

export const InfoWrap = styled.p`
  position: relative;
  margin-bottom: 15px;
  line-height: 1;
  color: ${(props: any) => props.theme.textBlack};

  &:last-child {
    margin-bottom: 0px;
  }
`;
export const Info = styled.span`
  position: absolute;
  width: calc(100% - 120px);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  left: 120px;
  top: 0;
`;
export const SubTitle = styled.em`
  color: ${(props: any) => props.theme.textBlack};
  font-weight: ${(props: any) => props.theme.fontMedium};
  line-height: 1;
`;
export const Count = styled.p``;
export const CountSpan = styled.span`
  color: ${(props: any) => props.theme.textPoint};
  line-height: 1;
`;
export const SelectBox = styled.div`
  margin: 15px 0 20px;
  position: relative;
`;
export const SelectLabel = styled.label<IPrice>`
  width: 100%;
  border: 1px solid ${(props: any) => props.theme.borderGray};
  font-size: ${(props: any) => props.theme.fontSize14px};
  border-radius: ${(props: any) => props.active ? "5px 5px 0 0" : "5px"};
  display: block;
  padding: 0 10px;
  line-height: 45px;
  height: 45px;
  cursor: pointer;
`;
export const Arr = styled(Arrow)<IPrice>`
  position: absolute;
  right: 10px;
  bottom: 0;
  top: 0;
  margin: auto 0;
  transform: ${(props: any) => (props.active ? "rotatez(-180deg)" : "")};
  transition: all 0.3s;
`;
export const SelectBoxUi = styled.ul`
  border: 1px solid ${(props: any) => props.theme.borderGray};
  font-size: ${(props: any) => props.theme.fontSize14px};
  background: ${(props: any) => props.theme.bgColor};
  color: ${(props: any) => props.theme.textBlack};
  position: absolute;
  width: 100%;
  padding: 15px 15px;
  top: 44px;
  border-radius: 0 0 10px 10px
`;

export const SelectBoxLi = styled.li`
  margin-bottom: 13px;
  font-size: ${(props: any) => props.theme.fontSize14px};
  cursor: pointer;
  color: ${(props: any) => props.theme.textBlack};
  &:last-child {
    margin-bottom: 0px;
  }
`;
export const PointInput = styled.input`
  margin-top: 15px;
  width: 100%;
  line-height: 45px;
  height: 45px;
  border: 1px solid ${(props: any) => props.theme.borderGray};
  font-size: ${(props: any) => props.theme.fontSize14px};
  border-radius: 5px;
  padding: 0 10px;
  color: ${(props: any) => props.theme.textBlack};
  outline: 0;
  &:focus {
    border: 1px solid ${(props: any) => props.theme.textPoint};
  }
  &::placeholder {
    color: ${(props: any) => props.theme.textColor};
  }
`;
export const DisCountInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  line-height: 1;
  &:last-child {
    margin-bottom: 20px;
  }
`;
export const DisCountInfoLeft = styled.p`
  color: ${(props: any) => props.theme.textRed};
  font-size: ${(props: any) => props.theme.fontSize14px};
  display: flex;
  align-items: center;
`;
export const CouponDisCount = styled(Coupon)`
  margin-right: 5px;
`;

export const DisCountInfoRight = styled.p`
  color: ${(props: any) => props.theme.textRed};
  font-size: ${(props: any) => props.theme.fontSize14px};
`;
export const TotalWrap = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid ${(props: any) => props.theme.borderGray};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Total = styled.p`
  color: ${(props: any) => props.theme.textBlack};
  font-weight: ${(props: any) => props.theme.fontBold};
  font-size: ${(props: any) => props.theme.fontSize18px};
`;
export const Privacy = styled.p`
  margin-top: 10px;
  font-size: ${(props: any) => props.theme.fontSize14px};
  > span {
    text-decoration: underline;
  }
`;
export const Button = styled.button`
  width: ${(props: any) => props.theme.width100};
  border-radius: 5px;
  height: 40px;
  margin: 20px auto 0;
  display: block;
  font-size: ${(props: any) => props.theme.fontSize14px};
  color: ${(props: any) => props.theme.textWhite};
  background: ${(props: any) => props.theme.textPoint};
`;
