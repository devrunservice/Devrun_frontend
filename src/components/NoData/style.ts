import { styled } from "styled-components";

export const NoWrap = styled.div`
  display: flex;
  height: 600px;
  flex-wrap: wrap;
  align-content: center;
  text-align: center;
`;

export const Title = styled.em`
  display: block;
  width: 100%;
  font-size: 1.5rem;
  line-height: 2.125rem;
  color: ${(props: any) => props.theme.black};
  margin: 1.875rem 0  0
`;
export const P = styled.p`
  display: block;
  font-weight: 700;
`;