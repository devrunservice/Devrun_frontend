/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useCallback, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'redux/store';
import {Comment, Content} from 'components';
import * as S from 'style/Common';
import * as St from './style';
import {
  noticeDetailLoading,
  noticeDelLoading,
} from '../../../redux/reducer/noticeReducer';

const Detail = () => {
  const navigate = useNavigate();
  const noticeNo = useParams();
  const dispatch = useDispatch();
  // 처음 데이터 수정된후 데이터
  const {content, write} = useSelector(
    (state: RootState) => state.noticeReducer
  );
  console.log(content);
  const {data} = useSelector((state: RootState) => state.userReducer);
  useEffect(() => {
    dispatch(noticeDetailLoading(noticeNo));
  }, [write]);
  const delButton = useCallback(() => {
    if (window.confirm('해당 게시물을 삭제하시겠습니까?')) {
      dispatch(noticeDelLoading(noticeNo));
      alert('삭제되었습니다.');
      navigate('/notice');
    } else {
      alert('취소되었습니다.');
    }
  }, []);
  return (
    <S.Inner>
      <St.Title>공지사항</St.Title>
      {typeof content !== 'undefined' && (
        <>
          <St.Top>
            <St.Left>{content.title}</St.Left>
            <St.Right>
              <St.Name>
                작성자 : {content.id} <St.NameCheack />
              </St.Name>
              <St.Date>작성일 : {content.createdDate.slice(0, 10)}</St.Date>
              {content.modifiedDate !== null && (
                <St.Date>수정일 : {content.modifiedDate.slice(0, 10)}</St.Date>
              )}
              <St.Date>조회수 : {content.viewCount}</St.Date>
            </St.Right>
          </St.Top>
          <St.Content>
            <Content content={content.content} />
          </St.Content>
          <St.BtnWrap $active={false}>
            <S.Button
              $active={false}
              type="button"
              onClick={() => navigate(`/notice`)}
            >
              목록
            </S.Button>
            {data.role === 'ADMIN' && (
              <>
                <S.Button
                  $active
                  type="button"
                  onClick={() =>
                    navigate(`/notice/${noticeNo.noticeNo}/retouch`)
                  }
                >
                  수정하기
                </S.Button>
                <St.DelButton type="button" onClick={() => delButton()}>
                  삭제하기
                </St.DelButton>
              </>
            )}
          </St.BtnWrap>
          <Comment text="댓글" />
        </>
      )}
    </S.Inner>
  );
};
export default Detail;
