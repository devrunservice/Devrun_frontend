import React, {  useState, useEffect } from "react";
import { Learn, SearchBar } from "components";
import * as St from "./style";

const Learning = () => {
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  const [tap, SetTap] = useState<number>(1);
  const tapList = [
    { id: 0, list: "학습순" },
    { id: 1, list: "신청순" },
    { id: 2, list: "제목순" },
  ];
  const [tapOpen, setTapOpen] = useState<boolean>(false);
  const [tapLists, setTaplists] = useState(tapList[0].list);
  const tapOpsion = (item: string) => {
    setTaplists(item);
    setTapOpen(false);
  };
  return (
    <section>
      <St.Top>
        <St.Title>내 학습 관리</St.Title>
        <SearchBar />
      </St.Top>
      <St.LearnCon>
        <St.TapWrap>
          <St.Left>
            <St.Btn onClick={() => SetTap(1)} $active={tap === 1}>
              전체
            </St.Btn>
            <St.Btn onClick={() => SetTap(2)} $active={tap === 2}>
              학습중
            </St.Btn>
            <St.Btn onClick={() => SetTap(3)} $active={tap === 3}>
              완료
            </St.Btn>
          </St.Left>
          <St.Tap $active={tapOpen === true}>
            <St.TapLabel onClick={() => setTapOpen(!tapOpen)}>
              {tapLists}
            </St.TapLabel>
            <St.Arr $active={tapOpen === true} />
            {tapOpen && (
              <St.TapUl>
                {tapList.map((item) => (
                  <St.TapLi key={item.id} onClick={() => tapOpsion(item.list)}>
                    {item.list}
                  </St.TapLi>
                ))}
              </St.TapUl>
            )}
          </St.Tap>
        </St.TapWrap>
        <St.LearnUl>
          {tap === 1 && <Learn />}
          {tap === 2 && <Learn />}
          {tap === 3 && <Learn />}
        </St.LearnUl>
      </St.LearnCon>
      {/* <Pagination /> */}
    </section>
  );
};
export default Learning;
