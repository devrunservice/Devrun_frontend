import { styled } from "styled-components";

export const NoWrap = styled.div`
  display: flex;
  height: 600px;
  flex-wrap: wrap;
  align-content: center;
  text-align: center;
`;
export const Img = styled.div`
  width:100%;
`
export const Title = styled.em`
  display: block;
  width: 100%;
  font-size: 1.5rem;
  line-height: 2.125rem;
  color: ${(props: any) => props.theme.black};
  margin: 1.25rem 0 2.5rem;
`;
export const P = styled.p`
  display: block;
  font-weight: 700;
`;
export const Lectures = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  padding: 0 5rem;
`;
export const Lectureli = styled.li`
  border-radius: 50px;
  width: 113px;
  overflow:hidden;
  background: ${(props: any) => props.theme.bgGrayColor};
  > button {
    justify-content: center;
  }
  &:hover {
    background: ${(props: any) => props.theme.mainColor};
  }
  &:hover > button {
    color: ${(props: any) => props.theme.textWhite};
  }
`;