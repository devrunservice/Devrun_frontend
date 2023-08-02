import { styled } from "styled-components";
import Checked from "asset/images/Checked.png";

export const ProductLi = styled.li`
  border-bottom: 1px dashed #ddd;
  padding: 20px 0;
  display: flex;
  &:last-child {
    border-bottom: 1px solid #ddd;
  }
`;
export const CheckBox = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid ${(props: any) => props.theme.borderC};
  &:checked {
    background: ${(props: any) => props.theme.brandColor} url("${Checked}")
      center center no-repeat;
    border: 1px solid ${(props: any) => props.theme.brandColor};
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
  color: ${(props: any) => props.theme.black};
  font-weight: ${(props: any) => props.theme.medium};
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
  font-size: ${(props: any) => props.theme.size14};
  line-height: 1;
`;
export const Hours = styled.span`
  color: ${(props: any) => props.theme.brandColor};
`;
export const TextRight = styled.div`
  width: calc(100% - 65%);
  text-align: right;
`;
export const Discount = styled.span`
  margin-right: 8px;
  color: ${(props: any) => props.theme.textRed};
  font-weight: ${(props: any) => props.theme.semiBold};
  font-size: ${(props: any) => props.theme.size14};
  line-height: 1;
`;
export const DiscountNum = styled.span`
  position: relative;
  font-size: ${(props: any) => props.theme.size14};
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
  font-size: ${(props: any) => props.theme.size18};
  color: ${(props: any) => props.theme.black};
  font-weight: ${(props: any) => props.theme.bold};
  margin-top: 10px;
  line-height: 1;
`;