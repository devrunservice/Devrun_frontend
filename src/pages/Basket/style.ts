import { styled } from "styled-components";
import { Close } from "asset";
import Checked from "asset/images/Checked.png";

export const BasketForm = styled.form`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

export const Title = styled.h4`
  font-size: 1.5625rem;
  color: ${(props: any) => props.theme.black};
  font-weight: 700;
  margin-bottom: 1.875rem;
  line-height: 1;
`;

export const BasketLeft = styled.div`
  width: 50rem;
`;

export const SelectWarp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1;
  > div {
    display: flex;
    align-items: center;
  }
`;

export const CheckBox = styled.input`
  appearance: none;
  width: 1rem;
  height: 1rem;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid ${(props: any) => props.theme.borderC};
  &:checked {
    background: ${(props: any) => props.theme.mainColor} url("${Checked}")
      center center no-repeat;
    border: 1px solid ${(props: any) => props.theme.mainColor};
  }
`;

export const CheckLabel = styled.label`
  color: ${(props: any) => props.theme.black};
  padding-left: 5px;
  cursor: pointer;
  > span {
    color: ${(props: any) => props.theme.mainColor};
  }
`;

export const Right = styled.button`
  width: 95px;
  height: 40px;
  border-radius: 5px;
  background: ${(props: any) => props.theme.bgColor};
  border: 1px solid ${(props: any) => props.theme.borderC};
  color: ${(props: any) => props.theme.black};
`;
export const Deletes = styled(Close)`
  margin-left: 5px;
`;
export const Product = styled.ul`
  border-top: 1px solid ${(props: any) => props.theme.black};
  margin-top: 15px;
`;

export const BasketRight = styled.div`
  width: 18.75rem;
  margin-left: 6.25rem;
  border: 1px solid ${(props: any) => props.theme.borderC};
  border-radius: 5px;
  padding: 1.5625rem 1.5625rem;
`;
export const TitleSub = styled.em`
  color: ${(props: any) => props.theme.black};
  font-weight: 700;
  line-height: 1;
  margin: 1.5625rem 0 1rem;
  display: block;
  &:nth-child(1){
    margin-top:0
  }
`;
export const InfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 1;
  font-size: 0.875rem;
  margin-top:1rem;
  > em {
    color: ${(props: any) => props.theme.black};
    font-weight: 500;
  }
  > p {
  }
  > p > span {
    color: ${(props: any) => props.theme.mainColor};
  }
`;


export const PointInput = styled.input`
  margin-top: 0.625rem;
  width: 100%;
  height: 2.5rem;
  border: 1px solid ${(props: any) => props.theme.borderC};
  font-size: 0.875rem;
  border-radius: 5px;
  padding: 0 0.625rem;
  color: ${(props: any) => props.theme.black};
  outline: 0;
  &:focus {
    border: 1px solid ${(props: any) => props.theme.mainColor};
  }
  &::placeholder {
    color: ${(props: any) => props.theme.textColor};
  }
`;
export const Coupon = styled.button`
  margin-top: 0.625rem;
  width: 100%;
  height: 2.5rem;
  border: 1px solid ${(props: any) => props.theme.borderC};
  font-size: 0.875rem;
  border-radius: 5px;
  padding: 0 0.625rem;
  text-align:left;
  color: ${(props: any) => props.theme.black};
  background: ${(props: any) => props.theme.bgColor};
`;
export const Privacy = styled.p`
  margin-top: 0.625rem;
  font-size: 0.75rem;
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
  background: ${(props: any) => props.theme.mainColor};
`;
export const Price = styled.p`
  margin-top: 0.625rem;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1;
  display:flex;
  justify-content: space-between;
`;
export const Discount = styled.p`
  margin-top: 0.625rem;
  font-size: 0.875rem;
  line-height: 1;
  font-weight: 500;
  color: ${(props: any) => props.theme.textRed};
  display: flex;
  justify-content: space-between;
`;
export const TotalPrice = styled.p`
  line-height: 1;
  margin-top: 1rem;
  font-weight: 600;
  color: ${(props: any) => props.theme.black};
  display: flex;
  justify-content: space-between;
`;