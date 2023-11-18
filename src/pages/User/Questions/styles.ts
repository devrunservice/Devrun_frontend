import {styled} from 'styled-components';
import {Arrow} from 'asset';
import * as I from 'types';

// 질문 리스트
export const Table = styled.ul`
  min-height: 42.6875rem;
  /* margin-top: 1.875rem; */
`;

export const Sort = styled.div<I.Active>`
  display: flex;
  position: relative;
  align-items: center;
  width: 5.9375rem;
  height: 2.5rem;
  margin-top: 1.875rem;
  box-sizing: content-box;
  border: 1px solid ${(props: any) => props.theme.borderC};
  border-radius: ${(props: any) => (props.$active ? '5px 5px 0 0' : '5px')};
  z-index: ${(props: any) => (props.$active ? 1 : 'initial')};
`;
export const SortLabel = styled.p`
  flex: 1;
  font-size: 0.875rem;
  line-height: 2.5rem;
  padding-left: 0.625rem;
  cursor: pointer;
`;
export const Arr = styled(Arrow)<I.Active>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0.625rem;
  margin: auto 0;
  cursor: pointer;
  transform: ${(props: any) => (props.$active ? 'rotatez(-180deg)' : '')};
  transition: all 0.3s;
`;
export const SortUl = styled.ul`
  position: absolute;
  width: 100%;
  top: 2.5rem;
  left: -1px;
  box-sizing: content-box;
  background-color: ${(props) => props.theme.bgColor};
  border: 1px solid ${(props: any) => props.theme.borderC};
`;
export const SortLi = styled.li`
  font-size: 0.875rem;
  cursor: pointer;
  height: 2rem;
  line-height: 2rem;
  padding-left: 0.625rem;
  border-bottom: 1px solid ${(props: any) => props.theme.borderC};

  &:last-child {
    border-bottom: none;
  }
`;

// 질문 디테일
export const QuestionDetailWrapper = styled.div`
  text-align: center;
  border-bottom: 1px solid ${(props) => props.theme.borderC};
  padding-bottom: 32px;
`;

export const QuestionTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
  color: ${(props: any) => props.theme.black};
`;

export const LectureTitle = styled.p`
  font-weight: 500;
  margin-bottom: 8px;
`;

export const QuestionDate = styled.p`
  text-align: right;
`;

export const QuestionContent = styled.div`
  min-height: 31.25rem;
  padding-top: 2.5rem;
`;

export const QuestionBtn = styled.div`
  text-align: right;
  padding: 2.5rem 0;
  margin-bottom: 3.75rem;
  border-bottom: 1px solid ${(props) => props.theme.borderC};

  & > button:nth-child(2) {
    margin: 0 8px;
  }

  & > button:last-child {
    background: ${(props: any) => props.theme.textRed};
    color: ${(props: any) => props.theme.textWhite};
  }
`;
