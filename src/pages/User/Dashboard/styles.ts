import { styled } from "styled-components";

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const MoreBtn = styled.button`
  color: ${(props) => props.theme.textGrayC};
  background-color: transparent;
`;

export const ListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
`;

export const LectureCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Wrapper = styled(TitleWrapper)`
  & > div:nth-child(1) {
    flex: 5;
  }
  & > div:nth-child(2) {
    flex: 5;
  }
`;
