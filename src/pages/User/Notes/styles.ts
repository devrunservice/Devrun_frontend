import {styled} from 'styled-components';

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  font-size: 1.5625rem;
  font-weight: 700;
  color: ${(props: any) => props.theme.black};
  padding-bottom: 1rem;

  & > h1 {
    width: 60%;
  }
`;

export const ErrorMessage = styled.div`
  text-align: center;
  margin-top: 32px;
`;

export const NoteWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.875rem;
  min-height: 53.8125rem;
`;

export const NoteDetailSection = styled.section`
  text-align: center;
`;

export const NoteDetailWrapper = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.borderC};
  padding-bottom: 32px;
`;

export const NoteTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const NoteSubHeading = styled.p`
  font-weight: 500;
  margin-bottom: 8px;
`;

export const NoteDate = styled.p`
  text-align: right;
`;

export const NoteEditBtn = styled.button`
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.brandColor};
`;
