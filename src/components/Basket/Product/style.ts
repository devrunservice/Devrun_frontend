import { styled } from "styled-components";
import Checked from "asset/images/Checked.png";

export const ProductLi = styled.li`
  border-bottom: 1px dashed #ddd;
  padding: 1.25rem 0;
  display: flex;
  &:last-child {
    border-bottom: 1px solid #ddd;
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
    background: ${(props: any) => props.theme.brandColor} url("${Checked}")
      center center no-repeat;
    border: 1px solid ${(props: any) => props.theme.brandColor};
  }
`;


export const ContentBox = styled.label`
  display: flex;
  align-items: center;
  width: calc(100% - 1rem);
`;
export const ImgWrap = styled.div`
  width: 10.625rem;
  height: 5.9375rem;
  overflow: hidden;
  border-radius: 0.3125rem;
  margin: 0 1.25rem 0 0.3125rem;
`;

export const Img = styled.img`
  width: inherit;
  height: inherit;
  object-fit: cover;
  padding: 0;
  max-width: 100%;
`;
export const TextBox = styled.div`
  width: calc(100% - 13.25rem);
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
  font-weight: 500;
  margin-bottom: 0.625rem;
  line-height: 1;
`;
export const SubText = styled.p`
  display: block;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 1.125rem;
  line-height: 1;
`;
export const Writer = styled.p`
  font-size: 0.875rem
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
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1;
`;
export const DiscountNum = styled.span`
  position: relative;
  font-size: 0.875rem;
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
  font-size: 1.125rem;
  color: ${(props: any) => props.theme.black};
  font-weight: 700;
  margin-top: 0.625rem;
  line-height: 1;
`;