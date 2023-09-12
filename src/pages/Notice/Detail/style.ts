import { styled } from "styled-components";
import { BsCheckAll } from "react-icons/bs";

export const Title = styled.h4`
  margin-bottom: 1.875rem;
  font-size: 1.5625rem;
  font-weight: 700;
  color: ${(props: any) => props.theme.black};
`;
export const Top = styled.div`
  border-bottom: 1px solid ${(props: any) => props.theme.borderC};
  border-top: 1px solid ${(props: any) => props.theme.borderC};
  padding: 1.875rem 0;
  margin-bottom: 2.5rem;
`;
export const Left = styled.em`
  display: block;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${(props: any) => props.theme.black};
`;
export const Right = styled.div`
  margin-top: 1.25rem;
  display: flex;
  align-items: center;
`;
export const Name = styled.p`
  color: ${(props: any) => props.theme.black};
  margin-right: 1rem;
  display: flex;
  align-items: center;
  svg {
    margin-left: 0.3125rem;
  }
`;
export const Date = styled.p`
  color: ${(props: any) => props.theme.black};
`;
export const Content = styled.div`
  width: 100%;
  min-height: 31.25rem;
`;
export const NameCheack = styled(BsCheckAll)`
  color: ${(props: any) => props.theme.brandColor};
  font-size: 1.25rem;
`;