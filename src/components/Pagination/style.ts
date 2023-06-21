import { styled } from "styled-components";
export const PagingWrap = styled.div`
  margin: 40px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const Paging = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 3px;
  background: ${(props) => props.theme.bgGrayColor};
  text-align: center;
  line-height: 40px;
  font-size: ${(props) => props.theme.fontSize12px};

  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.textPoint};
    color: ${(props) => props.theme.textWhite};
  }
  > svg {
    fill: ${(props) => props.theme.textColor};
  }
  &:hover svg {
    fill: ${(props) => props.theme.textWhite};
  }
`;