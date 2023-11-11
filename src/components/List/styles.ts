import {styled} from 'styled-components';

export const DashboardLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0;
  border-bottom: ${(props) => `1px solid ${props.theme.borderD}`};
  padding: 8px 0;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;

export const LectureTitle = styled.p`
  font-weight: 500;
`;

export const ArrowBtn = styled.div`
  transform: rotate(270deg);
`;
