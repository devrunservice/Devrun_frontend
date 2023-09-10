import { styled } from "styled-components";
import * as I from "types"

export const Coupon = styled.li<I.Active>`
  width: calc((100% - 2.625rem) / 3);
  border: 1px solid
    ${(props: any) =>
      props.$active ? props.theme.brandColor : props.theme.borderD};
  border-radius: 5px;
  padding: 1.56rem 1.25rem;
`;

export const Name = styled.p<I.Active>`
  color: ${(props: any) =>
    props.$active ? props.theme.black : props.theme.borderD};
  line-height: 1;
  font-size: 1.125rem;
  margin: 0.625rem 0 1.5rem;
  font-weight: 600;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
export const Date = styled.p<I.Active>`
  font-size: 0.875rem;
  line-height: 1;
  color: ${(props: any) =>
    props.$active ? props.theme.textColor : props.theme.borderD};
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export const Discountrate = styled.p<I.Active>`
  color: ${(props: any) =>
    props.$active ? props.theme.brandColor : props.theme.borderD};
  font-size: 0.875rem;
  line-height: 1;
  & span {
    font-size: 1.25rem;
    font-weight: 600;
  }
`;
export const Use = styled.p<I.Active>`
  line-height: 1;
  font-size: 0.875rem;
  color: ${(props: any) =>
    props.$active ? props.theme.black : props.theme.borderD};
`;