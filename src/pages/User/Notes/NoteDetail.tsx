/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'redux/store';
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

  console.log(noteDetail);

  return (
    <St.NoteDetailSection>
      <St.NoteDetailWrapper>
        <St.NoteTitle>라면 맛있게 먹는 법</St.NoteTitle>
        <St.NoteSubHeading>{`Chapter ${noteDetail.chapter} - ${noteDetail.subHeading}`}</St.NoteSubHeading>
        <St.NoteDate>2023-11-12</St.NoteDate>
      </St.NoteDetailWrapper>
      <Button
        $active={false}
        type="button"
        onClick={() => navigate(`/videoView/${lectureId}`)}
      >
        수정
      </Button>
    </St.NoteDetailSection>
  );
};

export default NoteDetail;
