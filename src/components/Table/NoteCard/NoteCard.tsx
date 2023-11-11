/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import * as I from 'types';
import * as St from '../style';

const NoteCard: React.FC<I.NoteListType> = ({
  noteId,
  noteTitle,
  videoId,
  chapter,
  subHeading,
  date,
  contentPreview,
}) => {
  const navigate = useNavigate();
  const {lectureId} = useParams();

  const handleClick = () => {
    navigate(`/notes/${lectureId}/${noteId}`);
  };

  return (
    <St.NoteCardLi onClick={handleClick}>
      <div>{noteTitle}</div>
      <div>{`Chapter ${chapter} - ${subHeading}`}</div>
      <div>{date}</div>
      <div>{contentPreview}</div>
    </St.NoteCardLi>
  );
};

export default NoteCard;
