import * as St from './style'
import { HeartFill, Link } from 'asset'
import Curriculum from 'components/Curriculum/Curriculum'
// import { Link } from 'asset'

const Detail = () => {
  return (
    <St.DetailWrap>
      <St.PreviewArea>
        <St.DetailThum>
          아무래도 여기는 강의 썸네일이 들어가고 재생버튼을 가운데 둬야 할듯합니다. 재생버튼 클릭하면 미리보기 시작
        </St.DetailThum>
        <St.DetailInfo>
          <St.DetailInfoTitle>제목들어갈곳</St.DetailInfoTitle>
          <St.DetailUtils>
            <St.DetailUtilsItem>카테고리</St.DetailUtilsItem>
            <St.DetailUtilsItem>강사명</St.DetailUtilsItem>
            <St.DetailUtilsItem>
              <HeartFill /> 2
            </St.DetailUtilsItem>
            <St.DetailUtilsItem>
              <Link />
              공유하기
            </St.DetailUtilsItem>
          </St.DetailUtils>

          <St.ShortSpacer/>

          <St.DetailHashWrap>
            <St.DetailHash>#</St.DetailHash>
            <St.DetailHash>#</St.DetailHash>
            <St.DetailHash>#</St.DetailHash>
          </St.DetailHashWrap>
        </St.DetailInfo>
      </St.PreviewArea>

      <St.DetailMainWrap>
        <St.DetailTab>
          <St.DetailTabItem>카테고리</St.DetailTabItem>
          <St.DetailTabItem>커리큘럼</St.DetailTabItem>
          <St.DetailTabItem>수강평</St.DetailTabItem>
          <St.DetailTabItem>질의응답</St.DetailTabItem>
          <St.DetailTabItem>수강전 문의</St.DetailTabItem>
        </St.DetailTab>

        <St.DraftArea>
          에디터영역
        </St.DraftArea>       
        <St.SectionAreaWrap>
          <St.SectionTitle>커리큘럼</St.SectionTitle>
          <ul>
            <Curriculum/>
            <Curriculum/>
            <Curriculum/>
          </ul>
        </St.SectionAreaWrap>

        <St.SectionAreaWrap>
          <St.SectionTitle>수강평</St.SectionTitle>
          <St.ReviewCreateArea>
            <textarea placeholder='수강평을 작성해 주세요.'></textarea>
            <St.ReviewCreateBtnArea>
              <span>
                0 / 300
              </span>
              <St.ReviewCancelBtn>취소</St.ReviewCancelBtn>
              <St.ReviewCreateBtn>등록</St.ReviewCreateBtn>
            </St.ReviewCreateBtnArea>
          </St.ReviewCreateArea>
        </St.SectionAreaWrap>
      </St.DetailMainWrap>

    </St.DetailWrap>
  )
}

export default Detail