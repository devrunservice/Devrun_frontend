/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'redux/store';
import DOMPurify from 'dompurify';
import {mypage} from 'utils/api';
import {Button} from 'style/Common';
import * as St from './styles';
import {noteDetailLoading} from '../../../redux/reducer/dashboardReducer';

const NoteDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {lectureId, noteId} = useParams();

  useEffect(() => {
    dispatch(noteDetailLoading({id: noteId}));
  }, []);

  const noteDetail = useSelector(
    (state: RootState) => state.dashboardReducer.noteDetailData
  );

  const handleClick = async () => {
    const response = await mypage.getVideoId(Number(lectureId));
    navigate(`/videoView/${lectureId}/${response.data}`);
  };

  return (
    <St.NoteDetailSection>
      <St.NoteDetailWrapper>
        <St.NoteTitle>{noteDetail.noteTitle}</St.NoteTitle>
        <St.NoteSubHeading>{`Chapter ${noteDetail.chapter} - ${noteDetail.subHeading}`}</St.NoteSubHeading>
        <St.NoteDate>{noteDetail.date}</St.NoteDate>
      </St.NoteDetailWrapper>
      <St.NoteContent
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(noteDetail.content),
        }}
      />
      <St.NoteEditBtn>
        <Button
          $active={false}
          type="button"
          onClick={() => navigate(`/notes/${lectureId}`)}
        >
          목록
        </Button>
        <Button $active={false} type="button" onClick={handleClick}>
          수정
        </Button>
      </St.NoteEditBtn>
    </St.NoteDetailSection>
  );
};

export default NoteDetail;
