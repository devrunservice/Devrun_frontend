import {styled} from 'styled-components'

// preview
export const DetailWrap = styled.div`
`
export const PreviewArea = styled.section`
  width: 100vw;
  background: #000;
  padding: 50px 0 80px;
`
export const DetailThum = styled.div`
  position: relative;
  margin: 0 auto;
  border: 3px solid ${props=>props.theme.mainColor};
  /* width, height 는 임시로 설정 */
  width: 1000px;
  height: 400px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
`
export const DetailInfo = styled.div`
  margin-top: 30px;
  color: ${props=>props.theme.textWhite};
  text-align: center;
`
export const DetailInfoTitle = styled.div`
  margin-bottom: 20px;
  font-weight: ${props=>props.theme.bold}
`
export const DetailUtils = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const DetailUtilsItem = styled.span`
  display:inline-flex;
  align-items: center;
  position: relative;
  margin:5px;
  padding-right: 10px;
  box-sizing: border-box;
  &::after {
    display: inline-block;
    content: '';
    width: 1px;
    height: 50%;
    background: #fff;
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
  }
  &:last-child::after {
    display: none;
  }
`
export const ShortSpacer = styled.span`
  position: relative;
  display: block;
  padding:30px 0;
  margin: 0 auto;
  text-align: center;
  &::after {
    width: 40px;
    height: 3px;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
  }
`
export const DetailHashWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
export const DetailHash = styled.span`
  display: inline-block;
  padding: 10px 15px;
  background: #1c1c1c;
  border-radius: 5px;
  margin: 5px;
`

// main content & info
export const DetailMainWrap = styled.section`
  width: 1200px;
  margin: 0 auto;

`
export const DetailTab = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ddd;
  margin-bottom: 30px;
`
export const DetailTabItem = styled.li`
  padding: 15px 30px;
  
`
export const DraftArea = styled.section`
  color: ${prosp=> prosp.theme.mainColor};
  height: 500px;
  text-align: center;
  padding: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const SectionTitle = styled.div`
  font-weight: ${props=>props.theme.semiBold};
  font-size: 25px;
  margin-bottom: 20px;
`
export const SectionAreaWrap = styled.section`
  margin-top: 50px;
  padding-bottom: 50px;
  border-bottom: 1px solid #ddd;
  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`
export const CourseReviewArea = styled.section`

`
export const ReviewCreateArea = styled.div`
  textarea {
    width: 100%;
    min-height: 90px;
    border-radius: 5px;
    border: 1px solid #ddd;
    padding: 20px;
    margin-bottom: 20px;
  }
`
export const ReviewCreateBtnArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
  margin-bottom: 45px;
  button {
    border: 1px solid ${props=>props.theme.mainColor};
    border-radius: 5px;
    padding: 13px 25px;
  }
`
export const ReviewCancelBtn = styled.button`
  background: none;
  margin-left: 20px;
`
export const ReviewCreateBtn = styled.button`
  background-color: ${props=>props.theme.mainColor};
  color: ${props=>props.theme.textWhite};
  margin-left: 10px;
`
export const CommentList = styled.li`
  border-top: 1px solid #ddd;
  padding-bottom: 30px;
`
export const CommentInfoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
  div {
    display: flex;
    align-items: center;
    span {
      margin-left: 10px;
    }
  }
  span {
    display: block;
    svg {
      width: 16px;
      height: 16px;
    }
  }
`
export const CommentArea = styled.div`
  margin: 15px 0;
`
export const CommentUtils = styled.div`
display: flex;
align-items: center;
svg {
    path {
      stroke: #000;
    }
  }
  span {
    margin-left: 5px;
  }
`
export const CommentTime = styled.div`
  margin-left: 15px;
`
export const RecommentBtb = styled.button`
  color: ${props=>props.theme.mainColor};
  background: ${props=>props.theme.textWhite};
  margin: 0;
  padding: 0;
`
export const RecommentList = styled.li`
  background: ${props=>props.theme.bgGrayColor};
  padding: 20px;
  margin-top: 30px;
  > div {
    padding: 0;
  }
`
export const MoreLectureBtn = styled.button`
  width: 100%;
  border: 1px solid #ddd;
  padding: 18px 0;
  background: #fff;
`
export const MoreLectureArea = styled.section`

`