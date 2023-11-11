import {styled} from 'styled-components';

export const DashboardLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0;
  padding-bottom: 8px;
  border-bottom: 1px solid ${(props) => props.theme.borderC};
  cursor: pointer;
  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }
`;

export const LectureTitle = styled.p`
  font-weight: 500;
`;

export const ArrowBtn = styled.div`
  transform: rotate(270deg);
`;
