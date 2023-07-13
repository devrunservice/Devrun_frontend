/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { /* MouseEventHandler, */ useRef, useState } from "react";
import CurriculumSection from "components/CurriculumSection/CurriculumSection";
import Modal from "components/Modal/Modal";
import { PlusCircle } from "asset";
// import { RootState } from "redux/store";
import { useDispatch } from "react-redux";
import { SectionType } from "types";
import {
  addClass,
  addSection,
  changeTitle,
  deleteSection,
  onTitleWrite,
} from "../../redux/reducer/createVideoSlice";
// import { deleteSection } from '../../redux/reducer/createVideoSlice';
import * as St from "../CreateNewVideo/style";

const CreateVideoTwo = ({ PrevPage }: { PrevPage: any }) => {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const dispatch = useDispatch();
  // const createVideoSlice = useSelector((state:RootState)=>state.createVideoSlice.section)
  const nextId = useRef<number>(1);
  const nextSubId = useRef<number>(1);
  const [section, setSection] = useState<SectionType>({
    num: nextId,
    title: "",
    isReadOnly: false,
    subTitle: [
      {
        subNum: 0,
        className: "",
        url: "",
        isReadOnly: false,
      },
    ],
  });

  const addSections = () => {
    dispatch(addSection({ ...section, num: nextId.current }));
    nextId.current += 1;
  };
  const deleteSections = (id: number) => {
    // dispatch(
    //   deleteSection(createVideoSlice.filter((list: any) => list.num !== id)),
    // );
  };
  const addClasses = (id: number) => {
    dispatch(
      addClass({
        id,
        subNum: nextSubId.current,
        className: "",
        url: "",
        isReadOnly: false,
      }),
    );
    nextSubId.current += 1;
  };
  const changeTitles = (
    e: React.KeyboardEvent<HTMLInputElement>,
    id: number,
  ) => {
    if (e.key === "Enter") {
      dispatch(
        changeTitle({
          id,
          value: e.currentTarget.value,
        }),
      );
    }
  };
  const onTitleWrites = (id: number) => {
    dispatch(onTitleWrite({ id, isReadOnly: false }));
  };
  const [onModal, setOnModal] = useState<boolean>(false);
  const modalOn = (index: number) => {
    console.log(index);
    setOnModal(true);
  };
  return (
    <St.CreateVideoWrap>
      <St.CreateVideoArticle>
        <St.ArticleTitle>
          <button onClick={() => PrevPage()} type="button">
            이전
          </button>
          <span>커리큘럼 등록</span>
          <button onClick={addSections}>
            <PlusCircle />
            섹션추가하기
          </button>
        </St.ArticleTitle>
        {/* {createVideoSlice.map((list: any, index: number) => (
          <CurriculumSection
            item={list}
            key={index}
            modalOn={modalOn}
            deleteSections={deleteSections}
            addClasses={addClasses}
            changeTitles={changeTitles}
            onTitleWrites={onTitleWrites}
          />
        ))} */}
        <div>
          <St.NextCreateBtn>등록</St.NextCreateBtn>
        </div>
      </St.CreateVideoArticle>
      {onModal && <Modal />}
      {/* <Modal /> */}
    </St.CreateVideoWrap>
  );
};

export default CreateVideoTwo;
