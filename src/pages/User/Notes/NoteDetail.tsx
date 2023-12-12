/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'redux/store';
import {mypage} from 'utils/api';
import {Content, BasicModal} from 'components';
import {Button} from 'style/Common';
import * as St from './styles';
import {
  noteDeleteLoading,
  noteDetailLoading,
} from '../../../redux/reducer/dashboardReducer';
import {openModal} from '../../../redux/reducer/modalReducer';

const NoteDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {lectureId, noteId} = useParams();

  const {noteDetailData: noteDetail, noteDeleteData: noteDelete} = useSelector(
    (state: RootState) => state.dashboardReducer
  );

  useEffect(() => {
    dispatch(noteDetailLoading({id: noteId}));
  }, []);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const {name} = e.target as HTMLButtonElement;

    if (name === 'noteList') {
      navigate('/questions');
    } else if (name === 'noteEdit') {
      const response = await mypage.getVideoId(Number(lectureId));
      navigate(`/videoView/${lectureId}/${response.data}`);
    } else {
      await dispatch(openModal('해당 노트를 삭제하시겠습니까?'));
    }
  };

  const handleConfirm = () => {
    try {
      dispatch(noteDeleteLoading(Number(noteId)));
      navigate(`/notes/${lectureId}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <St.NoteDetailSection>
      <St.NoteDetailWrapper>
        <St.NoteTitle>{noteDetail.noteTitle}</St.NoteTitle>
        <St.NoteSubHeading>{`Chapter ${noteDetail.chapter} - ${noteDetail.subHeading}`}</St.NoteSubHeading>
        <St.NoteDate>{`최근 수정일 : ${noteDetail.date}`}</St.NoteDate>
      </St.NoteDetailWrapper>
      <St.NoteContent>
        <Content content={noteDetail.content} />
      </St.NoteContent>
      <St.NoteBtn>
        <Button
          $active={false}
          name="noteList"
          type="button"
          onClick={handleClick}
        >
          목록
        </Button>
        <Button $active type="button" name="noteEdit" onClick={handleClick}>
          수정
        </Button>
        <Button $active type="button" name="noteDelete" onClick={handleClick}>
          삭제
        </Button>
      </St.NoteBtn>
      <BasicModal logicActive onConfirm={handleConfirm} />
    </St.NoteDetailSection>
  );
};

export default NoteDetail;
