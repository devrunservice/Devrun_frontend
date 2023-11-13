import {styled, css} from 'styled-components';
import {Arrow} from 'asset';
import * as I from 'types';

export const Table = styled.ul`
  min-height: 42.6875rem;
  margin-top: 1.875rem;
`;
export const ReceiptTable = styled(Table)`
  min-height: 52.6875rem;
`;
export const TableLi = styled.li<I.TableCommon>`
  border-bottom: 1px solid ${(props: any) => props.theme.borderC};
  display: flex;
  align-items: center;
  padding: 1.25rem 0;
  text-align: center;
  cursor: ${(props: any) => (props.$cursor ? 'pointer' : '')};
  &:nth-child(1) {
    border-top: 1px solid ${(props: any) => props.theme.borderC};
    background: ${(props: any) => props.theme.bgGrayColor};
  }
  &:nth-child(1) div {
    text-align: center;
  }
`;

const common = css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 0.875rem;
`;

export const Num = styled.div`
  width: 8%;
  ${common}
`;
export const Text = styled.div<I.TableCommon>`
  width: ${(props: any) => (props.$view ? '62%' : '65.66%')};
  text-align: left;
  ${common}
`;
export const CommonLi = styled.div`
  width: 10.5%;
  ${common}
`;
export const View = styled.div<I.TableCommon>`
  width: ${(props: any) => (props.$view ? '12%' : '8.34%')};
  ${common}
`;
export const Title = styled(Text)<I.TableCommon>`
  width: ${(props: any) => (props.$view ? '42.5%' : '19%')};
`;
export const PointTitle = styled(Text)`
  width: calc(100% - 20.5%);
`;
export const PointSpan = styled.span<I.TableCommon>`
  color: ${(props: any) =>
    props.$color ? props.theme.brandColor : props.theme.textRed};
  font-weight: 500;
`;
export const PayBtn = styled(View)`
  width: 18%;
  display: flex;
  justify-content: center;
  gap: 5px;
`;

export const Button = styled.button<I.TableCommon>`
  background: ${(props: any) =>
    props.$color ? props.theme.textRed : props.theme.brandColor};
  border-radius: 5px;
  color: ${(props: any) => props.theme.textWhite};
  padding: 8px 10px;
`;

export const SwitchBtn = styled.div<I.TableCommon>`
  width: 3.125rem;
  height: 1.5625rem;
  background: ${(props: any) =>
    props.$view ? props.theme.bgNavcolor : props.theme.borderC};
  border-radius: 25px;
  position: relative;
  margin: 0 auto;
  cursor: pointer;
`;
export const ToggleBtn = styled.div<I.TableCommon>`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  right: 3px;
  width: 21px;
  height: 21px;
  border-radius: 50%;
  transition: 0.4s;
  background: ${(props: any) =>
    props.$view ? props.theme.brandColor : props.theme.textColor};
  transform: ${(props: any) =>
    props.$view ? 'translateX(0px)' : 'translateX(-23px)'};
`;

// 노트 테이블
// 강의 노트
export const LectureLi = styled.li`
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

export const NoteWrapper = styled.div`
  flex: 1 1 auto;
  margin-left: 32px;
`;

export const LectureTitle = styled.div`
  /* font-size: 18px; */
  font-weight: 600;
`;

export const InfoWrapper = styled.div`
  display: flex;

  & > div:nth-child(2) {
    margin-left: 16px;
  }
`;

export const RightArrow = styled(Arrow)`
  width: 16px;
  height: 16px;
  transform: rotate(270deg);
  filter: invert(73%) sepia(100%) saturate(0%) hue-rotate(104deg)
    brightness(91%);
`;

export const NoteCard = styled.li`
  width: 280px;
  height: 267px;
  padding: 8px 16px;
  background-color: ${(props) => props.theme.bgGrayColor};
  border-radius: 16px;
  cursor: pointer;
`;

export const NoteTitle = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

export const NoteSubHeading = styled.p`
  text-align: center;
  font-weight: 500;
  margin: 4px 0;
`;

export const NoteDate = styled.p`
  text-align: right;
`;

export const NotePreview = styled.p`
  margin: 16px 0;
`;
