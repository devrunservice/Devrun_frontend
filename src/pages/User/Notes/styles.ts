import {styled} from 'styled-components';

export const NoteListUl = styled.div`
  min-height: 53.8125rem;
  margin-top: 1.875rem;
`;

export const NoteUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  min-height: 53.8125rem;
  gap: 1.875rem;
  margin-top: 1.875rem;
`;

export const NoteDetailSection = styled.section`
  text-align: center;
`;

export const NoteDetailWrapper = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.borderC};
  padding-bottom: 32px;
  margin-bottom: 56px;
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

export const NoteContent = styled.div`
  padding-top: 32px;
  margin-bottom: 32px;
  border-bottom: 1px solid ${(props) => props.theme.borderC};
`;

export const NoteBtn = styled.div`
  text-align: right;

  & > button:nth-child(2) {
    margin: 0 8px;
  }

  & > button:last-child {
    background: ${(props: any) => props.theme.textRed};
    color: ${(props: any) => props.theme.textWhite};
  }
`;
