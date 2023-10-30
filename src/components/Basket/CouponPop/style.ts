import { styled } from "styled-components";
import { Button } from "style/Common";
import { Active } from "types";
import { Delete } from "asset";

export const PopupWrap = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 99;
`;
export const PopupBg = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  cursor: pointer;
`;
export const Popup = styled.div`
  width: 31.25rem;
  padding: 1.5625rem 1.5625rem;
  background: #fff;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
`;
export const Title = styled.h4`
  color: ${(props: any) => props.theme.black};
  font-weight: 600;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 1;
`;
export const Btn = styled(Button)`
  width: 100%;
  margin-top: 1.5rem;
`;
export const Deletes = styled(Delete)`
  cursor: pointer;
`;

export const PopCon = styled.div`
  padding-top: 1.5rem;
  border-top: 1px solid ${(props: any) => props.theme.borderC};
  > div {
    margin-top: 1.5rem;
    min-height: 15.625rem;
  }
  > div:nth-child(1) {
    margin-top: 0;
  }
  > div:nth-child(1) div {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 15.625rem;
  }
`;
export const Label = styled.label`
  font-size: 0.875rem;
  color: ${(props: any) => props.theme.black};
  font-weight: 500;
  line-height: 1;
  margin-bottom: 1rem;
  display: block;
  > span {
    color: ${(props: any) => props.theme.mainColor};
  }
`;
export const NoCoupon = styled.em`
  color: ${(props: any) => props.theme.black};
  font-weight: 500;
  line-height: 1;
  display: block;
  text-align: center;
  
  > span {
    display: block;
    font-size: 0.875rem;
    margin-top: 0.3125rem;
    color: ${(props: any) => props.theme.textColor};
    font-weight: 400;
  }
  > span:first-child {
    margin-top: 0.625rem;
  }
`;



export const CouponList = styled.li`
  width: 100%;
  position:relative;
  margin-top: 0.625rem;
  &:nth-child(1) {
    margin-top: 0;
  }
`;
export const CouponInput = styled.input`
  position: absolute;
  opacity: 0;

  &:checked + label {
    border: 1px solid ${(props: any) => props.theme.mainColor};
    background: ${(props: any) => props.theme.bgNavcolor};
  }
  &:checked + label + span {
    border: 4px solid ${(props: any) => props.theme.mainColor};
    background: ${(props: any) => props.theme.bgColor};
  }
`;
export const CouponLabel = styled.label<Active>`
  display: flex;
  gap: 1.25rem;
  align-items: center;
  border-radius: 0.1875rem;
  padding: 0.75rem 0.75rem 0.75rem 2rem;
  border: 1px solid ${(props: any) => props.theme.borderD};
  background: ${(props: any) =>
    props.$active ? props.theme.bgColor : props.theme.bgGrayColor};
  cursor: pointer;
`;
export const CouponClick = styled.span`
  position: absolute;
  width: 0.9375rem;
  height: 0.9375rem;
  border: 1px solid ${(props: any) => props.theme.borderD};
  z-index: 10;
  border-radius: 0.9375rem;
  font-size: 0;
  top: 0;
  bottom: 0;
  left: 10px;
  margin: auto 0;
`;


export const CouponText = styled.p`
  display: flex;
 
`;
export const CouponDiscountrate = styled.p`
  font-size: 0.875rem;
  color: ${(props: any) => props.theme.black};
  font-weight:500;
`;
export const CouponExpirydate = styled.p`
  font-size: 0.875rem;
  color: ${(props: any) => props.theme.textRed};
  font-weight: 500;
  position: relative;
  &:after {
    background: ${(props: any) => props.theme.borderD};
    width: 1px;
    height: 12px;
    content: "";
    position: absolute;
    left: -0.625rem;
    margin: auto 0;
    top: 0;
    bottom: 0;
  }
  &:before {
    background: ${(props: any) => props.theme.borderD};
    width: 1px;
    height: 12px;
    content: "";
    position: absolute;
    right: -0.625rem;
    margin: auto 0;
    top: 0;
    bottom: 0;
  }
`;
export const CouponName = styled.p`
  font-size: 0.875rem;
`;