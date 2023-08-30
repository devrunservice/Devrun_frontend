import { styled } from "styled-components";
import { Button } from "style/Common";
import * as I from "types";
import { Delete, Arrow } from "asset";


export const CouponTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;


export const PopupWrap = styled.div`
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  width:100%;
  height:100vh;
  z-index:99;
`
export const PopupBg = styled.div`
  width:100%;
  height:100vh;
  background:rgba(0,0,0,0.7);
  cursor:pointer
`
export const Popup = styled.div`
  width: 400px;
  height: 510px;
  background: ${(props: any) => props.theme.bgColor};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border-radius:10px;
`;
export const Title = styled.h4`
  color: ${(props: any) => props.theme.black};
  font-weight: ${(props: any) => props.theme.semiBold};
  font-size: ${(props: any) => props.theme.size16};
  margin: 1.25rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 1;
`;
export const Deletes = styled(Delete)`
  cursor: pointer;
`;
export const PopCon = styled.form`
  padding: 1.5rem 1.25rem;
  border-top: 1px solid ${(props: any) => props.theme.borderC};
  > div {
    margin-top: 1.5rem;
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input[type="number"] {
      -moz-appearance: textfield;
    }
  }
  > div:nth-child(1) {
    margin-top: 0;
  }
`;

export const Label = styled.label`
  font-size: ${(props: any) => props.theme.size14};
  color: ${(props: any) => props.theme.black};
  font-weight: ${(props: any) => props.theme.medium};
  line-height:1;
  margin-bottom:13px;
  display:block;
`;
export const InputWrap = styled.div`
  width:100%;
  display:flex;
  gap:2%;
  > input{
    width:32%;
  }
`

export const Input = styled.input`
  width: 100%;
  height: ${(props: any) => props.theme.size40};
  padding: 0 10px;
  border: 1px solid ${(props: any) => props.theme.borderC};
  outline: 0;
  border-radius: 5px;
  &:focus {
    border: 1px solid ${(props: any) => props.theme.brandColor};
  }
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none !important;
    margin: 0 !important;
  }
  -moz-appearance: textfield !important;
`;
export const Btn = styled(Button)`
  width: 100%;
  margin-top: 1.5rem;
`;

export const SelectTitle = styled.label<I.Active>`
  width: 100%;
  border: 1px solid ${(props: any) => props.theme.borderC};
  font-size: ${(props: any) => props.theme.size14};
  border-radius: ${(props: any) => (props.$active ? "5px 5px 0 0" : "5px")};
  display: block;
  padding: 0 10px;
  line-height: 40px;
  height: 40px;
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
export const SelectBox = styled.div`
  margin: 15px 0 20px;
  position: relative;
`;
export const SelectBoxUi = styled.ul`
  border: 1px solid ${(props: any) => props.theme.borderC};
  font-size: ${(props: any) => props.theme.size14};
  background: ${(props: any) => props.theme.bgColor};
  color: ${(props: any) => props.theme.black};
  position: absolute;
  width: 100%;
  padding: 15px 15px;
  top: 39px;
  border-radius: 0 0 5px 5px;
`;

export const SelectBoxLi = styled.li`
  margin-bottom: 13px;
  font-size: ${(props: any) => props.theme.size14};
  cursor: pointer;
  color: ${(props: any) => props.theme.black};
  &:last-child {
    margin-bottom: 0px;
  }
`;