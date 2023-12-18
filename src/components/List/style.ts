import {styled} from 'styled-components';
import {Arrow} from 'asset';

export const ListLi = styled.li`
  display: flex;
  align-items: center;
  padding: 16px;
  margin-bottom: 16px;
  border-bottom: ${(props) => `1px solid ${props.theme.borderD}`};
  padding: 8px;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;

export const ImageWrapper = styled.div`
  width: 120px;
  height: 80px;
  background-color: ${(props) => props.theme.bgGrayColor};
  border-radius: 16px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
`;

export const InfoWrapper = styled.div<{$page: string}>`
  flex: 1 1 auto;
  margin-left: ${(props) => (props.$page === 'notes' ? '32px' : '0')};
`;

export const LectureTitle = styled.div`
  /* font-size: 18px; */
  font-weight: 600;
`;

export const RightArrow = styled(Arrow)`
  width: 16px;
  height: 16px;
  transform: rotate(270deg);
  filter: invert(73%) sepia(100%) saturate(0%) hue-rotate(104deg)
    brightness(91%);
`;
