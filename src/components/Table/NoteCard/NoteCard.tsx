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
    <St.NoteCard>
      <St.NoteTitle>{noteTitle}</St.NoteTitle>
      <St.NoteSubHeading>{`Chapter ${chapter} - ${subHeading}`}</St.NoteSubHeading>
      <St.NoteDate>{date}</St.NoteDate>
      <St.NotePreview>{`${contentPreview}...`}</St.NotePreview>
    </St.NoteCard>
  );
};

export default NoteCard;
