import React from 'react'
// import { HeartFill, Circle, MoreBtn } from "asset";
import Comment from 'components/Comment/Comment';
import * as St from 'components/Detail/style'

const DetailComment = () => {
  return (
    <St.SectionAreaWrap>
      <Comment 
        text="수강평"
        sub=" · 수강생분들이 직접 작성하신 수강평입니다."
        path="lectures"
      />
    </St.SectionAreaWrap> 
  )
}

export default DetailComment