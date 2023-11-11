import { styled } from "styled-components";

export const SectionLi = styled.li`
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  > p {
    color: ${(props: any) => props.theme.black};
    font-size: 0.875rem;
  }
`;
export const CategoryIcon = styled.div`
  position: relative;
  width: 2.5rem;
  > svg {
    width: inherit;
    height: inherit;
    object-fit: cover;
    padding: 0;
    max-width: 100%;
  }
`;
