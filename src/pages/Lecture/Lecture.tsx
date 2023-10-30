import React, { useState } from "react";
import { Pagination, LectureCard } from "components";
import * as St from "./style";

const Lecture = () => {
const [pageno, setPageno] = useState<number>(1);
const tapList = [  {list: '학습순'}, { list: '신청순'},{list: '제목순'},];
  const [tapOpen, setTapOpen] = useState<boolean>(false);
  const [tapLists, setTaplists] = useState(tapList[0].list);
  const tapOpsion = (item: string) => {
    setTaplists(item);
    setTapOpen(false);
  };
  return (
    <>
      <St.Top>
        <St.Title>
          <span>422</span>개의 강의 0
        </St.Title>
        <St.Tap $active={tapOpen === true}>
          <St.TapLabel onClick={() => setTapOpen(!tapOpen)}>
            {tapLists}
          </St.TapLabel>
          <St.Arr $active={tapOpen === true} />
          {tapOpen && (
            <St.TapUl>
              {tapList.map((item) => (
                <St.TapLi key={item.list} onClick={() => tapOpsion(item.list)}>
                  {item.list}
                </St.TapLi>
              ))}
            </St.TapUl>
          )}
        </St.Tap>
      </St.Top>
      <St.LectureCardUl>
        <LectureCard/>
      </St.LectureCardUl>
      <Pagination pageno={pageno} setPageno={setPageno} />
    </>
  );
}

export default Lecture