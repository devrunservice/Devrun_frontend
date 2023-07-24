import React from "react";

interface ListType {
  key?: number;
  title: string;
}

const List: React.FC<ListType> = ({ title }) => (
  <li>
    <p>{title}</p>
    <p>노트수3 · 작성일: 2023.06.13</p>
  </li>
);

export default List;
