import React from 'react';
import * as St from '../style';

const TableHeader = () => {
  return (
    <St.TableLi>
      <St.Num>No</St.Num>
      <St.Text>제목</St.Text>
      <St.With15>작성일</St.With15>
      <St.With15>답변 여부</St.With15>
    </St.TableLi>
  );
};

export default TableHeader;
