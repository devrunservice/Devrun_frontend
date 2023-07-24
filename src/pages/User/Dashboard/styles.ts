import { styled } from "styled-components";

export const WelcomeMessage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  font-size: ${(props) => props.theme.fontSize18px};
  font-weight: ${(props) => props.theme.fontBold};
  margin-bottom: 1rem;

  & > div:nth-child(1) {
    font-size: ${(props) => props.theme.fontSize25px};
    font-weight: ${(props) => props.theme.fontBold};
    color: ${(props) => props.theme.brandColor};
    text-decoration: underline;
    text-underline-offset: 0.4rem;
  }
`;

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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;

  & > div:nth-child(1) {
    flex: 5;
  }
  & > div:nth-child(2) {
    flex: 5;
  }
`;
