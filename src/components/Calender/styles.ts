import {styled} from 'styled-components';

export const CalenderSection = styled.section`
  padding: 0.5rem;
  background-color: #fcfaff;
  border-radius: 16px;
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Month = styled.span`
  color: ${(props) => props.theme.brandColor};
  font-size: 18px;
  font-weight: bold;
  margin-right: 8px;
`;

export const Year = styled.span`
  font-size: 14px;
`;

export const NextButton = styled.div`
  display: flex;
  /* flex-direction: row; */
`;

export const ArrowButton = styled.button<{$direction: string}>`
  background-color: transparent;
  transform: ${(props) =>
    props.$direction === 'left' ? 'rotate(90deg)' : 'rotate(270deg)'};
`;

export const DatesSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 4px 0;
`;

export const Date = styled.div`
  width: 14%;
  margin: 0;
  padding: 0 12px;
  background-color: ${(props) => props.theme.bgNavcolor};
  border-radius: 16px;
`;

export const Cell = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.borderC};
  cursor: pointer;
  padding: 5px;
  margin: 4px 1px;
  border-radius: 8px;

  &.disabled {
    /* background-color: #f0f0f0; */
    color: #f0f0f0;
    border-color: #f0f0f0;
    cursor: not-allowed;
  }
  &.selected {
    background-color: ${(props) => props.theme.bgNavcolor};
  }

  &.not-valid {
    color: #ccc;
  }
`;
