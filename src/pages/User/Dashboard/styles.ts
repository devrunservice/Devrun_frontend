import {styled} from 'styled-components';

export const WelcomeMessage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 1rem;

  & > div:nth-child(1) {
    font-size: 1.5625rem;
    font-weight: 700;
    color: ${(props) => props.theme.brandColor};
    text-decoration: underline;
    text-underline-offset: 0.4rem;
  }
`;

export const LearningWrapper = styled.div`
  margin-bottom: 48px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const MoreBtn = styled.button`
  color: ${(props) => props.theme.borderC};
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
