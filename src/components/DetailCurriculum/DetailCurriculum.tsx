import React from 'react'
import Curriculum from "components/Curriculum/Curriculum";
import { DetailAPI } from "types";
import * as St from "components/Detail/style";

interface dataProps {
  data: DetailAPI,
}

const DetailCurriculum:React.FC<dataProps> = ({data}) => {
  return (
    <>
      <St.DraftArea>에디터영역</St.DraftArea>
      <St.SectionAreaWrap>
        <St.SectionTitle>커리큘럼</St.SectionTitle>
        <ul>
          {
            data?.lectureSections?.map((list, index) => (
              <Curriculum data={data} list={list} key={index}/>
            ))
          }
          {/* <Curriculum data={data.lectureSections}/> */}
        </ul>
      </St.SectionAreaWrap>
    </>
  )
}

export default DetailCurriculum