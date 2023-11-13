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

export const NoteUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 1.875rem;
  min-height: 53.8125rem;
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

export const NoteEditBtn = styled.div`
  text-align: right;

  & > button:nth-child(1) {
    margin-right: 8px;
  }
`;
