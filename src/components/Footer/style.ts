import { styled } from "styled-components";

export const FooterBg = styled.div`
    background:${(props:any)=>props.theme.bgBlack}
`;
export const Inner = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 30px 0%;
`;
export const Top = styled.div`
    display:flex;
    align-items: center;
`;
export const Left = styled.div`
  margin-right: 3.125rem;
`;
export const Slogan = styled.p`
  font-size: 0.875rem;
  color: ${(props: any) => props.theme.textWhite};
  margin-top: 0.625rem;
`;
export const Right = styled.div``;
export const Link = styled.div`
  margin-bottom: 0.75rem;
  display: flex;
  &:last-child {
    margin-bottom: 0;
  }
`;
export const Title = styled.em`
  color: ${(props: any) => props.theme.textWhite};
  font-size: 0.875rem;
  font-weight: 500;
  margin-right: 1.875rem;
`;
export const LinkLi = styled.p`
  position: relative;
  color: ${(props: any) => props.theme.borderC};
  font-size: 0.875rem;
  margin-right: 0.625rem;
  padding-right: 0.6875rem;
  &:last-child {
    margin-right: 0px;
    padding-right: 0px;
  }
  &::after {
    position: absolute;
    right: 0;
    width: 1px;
    height: 8px;
    background: ${(props: any) => props.theme.border49};
    margin: auto 0;
    bottom: 0;
    top: 0;
    content: "";
  }
`;
export const Bottom = styled.div`
  margin-top: 1.25rem;
  padding-top: 1.3125rem;
  border-top: 1px solid ${(props: any) => props.theme.border49};
  display: flex;
`;
export const Info = styled.p`
  margin-right: 1.25rem;
  color: ${(props: any) => props.theme.borderC};
  font-size: 0.875rem;
`;
