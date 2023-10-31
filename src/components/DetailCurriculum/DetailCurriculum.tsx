import React, {useState} from 'react'
import Curriculum from "components/Curriculum/Curriculum";
import * as St from "components/Detail/style";

const DetailCurriculum = () => {
  const [test, setTest] = useState('')
  console.log(test, setTest)
  return (
    <>
      <St.DraftArea>에디터영역</St.DraftArea>
      <St.SectionAreaWrap>
        <St.SectionTitle>커리큘럼</St.SectionTitle>
        <ul>
          <Curriculum />
          <Curriculum />
          <Curriculum />
        </ul>
      </St.SectionAreaWrap>
    </>
  )
}

export default DetailCurriculum