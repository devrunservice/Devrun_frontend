import { styled } from "styled-components";
import { Delete, Arrow, Coupon } from "asset";
import * as I from "types";
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
  font-size: 1.25rem;
  color: ${(props: any) => props.theme.black};
  font-weight: 700;
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
  width: 1rem;
  height: 1rem;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid ${(props: any) => props.theme.borderC};
  &:checked {
    background: ${(props: any) => props.theme.brandColor} url("${Checked}")
      center center no-repeat;
    border: 1px solid ${(props: any) => props.theme.brandColor};
  }
`;

export const CheckLabel = styled.label`
  color: ${(props: any) => props.theme.black};
  padding-left: 5px;
  cursor: pointer;
`;
export const CheckAll = styled.span`
  color: ${(props: any) => props.theme.brandColor};
`;

export const Right = styled.button`
  width: 95px;
  height: 40px;
  border-radius: 5px;
  background: ${(props: any) => props.theme.bgColor};
  border: 1px solid ${(props: any) => props.theme.borderC};
  color: ${(props: any) => props.theme.black};
`;
export const Deletes = styled(Delete)`
  margin-left: 5px;
`;
export const Product = styled.ul`
  border-top: 1px solid ${(props: any) => props.theme.black};
  margin-top: 15px;
`;



export const SubTitle = styled.em`
  color: ${(props: any) => props.theme.black};
  font-weight: 500;
  line-height: 1;
`;
export const Count = styled.p``;
export const CountSpan = styled.span`
  color: ${(props: any) => props.theme.brandColor};
  line-height: 1;
`;
export const SelectBox = styled.div`
  margin: 15px 0 20px;
  position: relative;
`;
export const SelectLabel = styled.label<I.Active>`
  width: 100%;
  border: 1px solid ${(props: any) => props.theme.borderC};
  font-size: 0.875rem;
  border-radius: ${(props: any) => (props.$active ? "5px 5px 0 0" : "5px")};
  display: block;
  padding: 0 10px;
  line-height: 45px;
  height: 45px;
  cursor: pointer;
`;
export const Arr = styled(Arrow)<I.Active>`
  position: absolute;
  right: 10px;
  bottom: 0;
  top: 0;
  margin: auto 0;
  transform: ${(props: any) => (props.$active ? "rotatez(-180deg)" : "")};
  transition: all 0.3s;
`;
export const SelectBoxUi = styled.ul`
  border: 1px solid ${(props: any) => props.theme.borderC};
  font-size: 0.875rem;
  background: ${(props: any) => props.theme.bgColor};
  color: ${(props: any) => props.theme.black};
  position: absolute;
  width: 100%;
  padding: 15px 15px;
  top: 44px;
  border-radius: 0 0 10px 10px;
`;

export const SelectBoxLi = styled.li`
  margin-bottom: 13px;
  font-size: 0.875rem;
  cursor: pointer;
  color: ${(props: any) => props.theme.black};
  &:last-child {
    margin-bottom: 0px;
  }
`;
export const PointInput = styled.input`
  margin-top: 15px;
  width: 100%;
  line-height: 45px;
  height: 45px;
  border: 1px solid ${(props: any) => props.theme.borderC};
  font-size: 0.875rem;
  border-radius: 5px;
  padding: 0 10px;
  color: ${(props: any) => props.theme.black};
  outline: 0;
  &:focus {
    border: 1px solid ${(props: any) => props.theme.brandColor};
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
  font-size: 0.875rem;
  display: flex;
  align-items: center;
`;
export const CouponDisCount = styled(Coupon)`
  margin-right: 5px;
`;

export const DisCountInfoRight = styled.p`
  color: ${(props: any) => props.theme.textRed};
  font-size: 0.875rem;
`;
export const TotalWrap = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid ${(props: any) => props.theme.borderC};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Total = styled.p`
  color: ${(props: any) => props.theme.black};
  font-weight: 700;
  font-size: 1.125rem;
`;
export const Privacy = styled.p`
  margin-top: 10px;
  font-size: 0.875rem;
  > span {
    text-decoration: underline;
  }
`;
export const Button = styled.button`
  width: 100%;
  border-radius: 5px;
  height: 40px;
  margin: 20px auto 0;
  display: block;
  font-size: 0.875rem;
  color: ${(props: any) => props.theme.textWhite};
  background: ${(props: any) => props.theme.brandColor};
`;
