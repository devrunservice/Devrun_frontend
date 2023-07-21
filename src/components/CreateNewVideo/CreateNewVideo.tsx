import React, { ChangeEvent, useState } from 'react';
import { Close, Exclamation } from 'asset';
import { useDispatch, useSelector } from 'react-redux';
// import { CreateLectureType } from 'types';
import { RootState } from 'redux/store';
import { deleteTag, onCategoryType, onImageUrl, onLectureCategory, onLectureExplane, onLectureIntroduce, /* onLectureCategory, */ onLectureName, onLecturePrice, onLectureTag } from '../../redux/reducer/createVideoSlice';
import * as St from './style'

export interface StyledButtonProps {
  active: boolean;
}

const CreateNewVideo = ({ChangePage}:{ChangePage:any}) => {
  const dispatch = useDispatch()// eslint-disable-line @typescript-eslint/no-unused-vars
  // const test = useSelector((state: {createVideo: CreateLectureType}) => state.createVideo)// eslint-disable-line @typescript-eslint/no-unused-vars
  const createVideoSlice = useSelector((state:RootState)=>state.createVideoSlice)
  console.log(createVideoSlice)
  // const lectureNameVal = createVideoSlice.lectureName
  const tags = createVideoSlice.lectureTag
  
  /* 가격 무료 유료 선택 */
  const [isActive, setIsActive] = useState<boolean>(false)
  const [priceState, setPriceState] = useState<boolean>(false)
  const freePayment = () => {
    setIsActive(false)
    setPriceState(false)
  }
  const pricePayment = () => {
    setIsActive(true)
    setPriceState(true)
  }

  /* 강의제목 */
  // const [lectureName, setLectureName] = useState('')
  const nameInput = (e: ChangeEvent<HTMLInputElement>) => {
    // setLectureName(e.target.value)
    dispatch(onLectureName(e.target.value))
  }
  /* 가격 */
  // const [price, setPrice] = useState<number>(0)// eslint-disable-line @typescript-eslint/no-unused-vars
  const priceInput = (e: ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    const regex = value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
    let comma = Number(regex.replaceAll(",", ""));
    if (comma === 0) {
      comma = 0;
    } else {
      // setPrice(comma)
      dispatch(onLecturePrice(comma))
    }
  }

  /* 이미지업로드 */
  // const [imgUrl, setImgUrl] = useState('')
  const uploadImg = (e: ChangeEvent<HTMLInputElement>) => {
    const {files} = e.target
    if(!files) {
      return
    }
    if (files.length > 0) {
      const file = files[0];
      if (file.size > 1024 * 1024 * 2) {
        alert('이미지 용량을 초과하였습니다.');
        return;
      }
      const url = URL.createObjectURL(file);
      // setImgUrl(url);
      dispatch(onImageUrl(url))
    }
  }

  /* 카테고리 */
  // const [type, setType] = useState<string>('front')// eslint-disable-line @typescript-eslint/no-unused-vars
  // const [category, setCategory] = useState<string>('html')// eslint-disable-line @typescript-eslint/no-unused-vars
  const changeType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // setType(e.target.value)
    dispatch(onCategoryType(e.target.value))
  }
  const changeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // setCategory(e.target.value)

    dispatch(onLectureCategory(e.target.value))
  }

  /* 태그 */
  // const [tags, setTags] = useState<string[]>([])
  const [tagInput, setTagInput] = useState('')
  const tagChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagInput((e.target.value).trim())
  }
  const tagKeyPressEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
      if(tagInput === '') {
        return
      }
      if(tags.some(tag=>tag === tagInput)) {
        alert('해당 태그는 이미 추가하셨습니다.')
        setTagInput('')
        return
      }
      
      if(tags.length > 10){  
        alert('태그는 10개까지 작성 가능합니다.') 
        return;
      }
      // setTags([...tags, tagInput])
      dispatch(onLectureTag([
        // ...createVideoSlice.lectureTag
        tagInput
      ]))
      setTagInput('')
      
    }
  }
  const deleteTags =(tag: number | string) => {
    // setTags(tags.filter((tag,idx) => idx !== index))
    dispatch(deleteTag(tag))
  }

  /* 한줄설명 */
  // const [explanation, setExplanation] = useState('')
  const explanationInput = (e: any) => {
    // setExplanation(e.target.value)
    dispatch(onLectureExplane(e.target.value))
  }
  /* 소개영상 */
  // const [introduce, setIntroduce] = useState('')
  const introduceInput = (e:any) => {
    // setIntroduce(e.target.value)
    dispatch(onLectureIntroduce(e.target.value))
  }
  // console.log(lectureName,price,imgUrl)
  return (
    <St.CreateVideoWrap>
      <St.CreateVideoArticle>
        <St.ArticleTitle>강좌명</St.ArticleTitle>
        <St.BasicInput
          onChange={nameInput}
          value={createVideoSlice.lectureName}
          type="text"
          placeholder="영문, 숫자 5-11자"
        />
        <St.InputNotice>
          <Exclamation />
          수업 내용이 무엇인지 알 수 있는 과목명으로 설정하는 것을 권장합니다.
        </St.InputNotice>
      </St.CreateVideoArticle>

      <St.CreateVideoArticle>
        <St.ArticleTitle>가격</St.ArticleTitle>
        <div>
          <St.SelectPriceBtn>
            <St.PriceBtn
              type="button"
              active={isActive === true}
              onClick={freePayment}
            >
              무료
            </St.PriceBtn>
            <St.PriceBtn
              type="button"
              active={isActive === false}
              onClick={pricePayment}
            >
              유료
            </St.PriceBtn>
          </St.SelectPriceBtn>
          {priceState && (
            <St.ShortInput onChange={priceInput} value={createVideoSlice.lecturePrice} type="number" placeholder="0" />
          )}
          {/* <St.ShortInput type="number" placeholder='0'/> */}
        </div>
      </St.CreateVideoArticle>

      <St.CreateVideoArticle>
        <St.ArticleTitle>강좌 이미지</St.ArticleTitle>
        <St.UploadArea>
          <St.LectureImageWrap>
            {createVideoSlice.imageUrl && <img src={createVideoSlice.imageUrl} alt="" />}
            {/* <img src={URL.createObjectURL(imgUrl)} alt="" /> */}
          </St.LectureImageWrap>
          <St.UploadVideoWrap>
            <div>
              <St.ShortInput
                onChange={uploadImg}
                accept="image/*"
                id="uploader"
                type="file"
                placeholder="선택된 이미지 없음"
              />
              <label htmlFor="uploader">파일선택</label>
            </div>
            <St.InputNotice>
              <Exclamation />
              최대 2MB까지 업로드 가능합니다.
            </St.InputNotice>
            <St.InputNotice>
              <Exclamation />
              528 X 297 픽셀 이미지 사용
            </St.InputNotice>
          </St.UploadVideoWrap>
        </St.UploadArea>
      </St.CreateVideoArticle>

      <St.CreateVideoArticle>
        <St.ArticleTitle>강좌 카테고리</St.ArticleTitle>
        <div>
          <St.CategorySelect value={createVideoSlice.categoryType} onChange={changeType}>
            <option value="front">프론트엔드</option>
            <option value="back">백엔드</option>
          </St.CategorySelect>
          {
            createVideoSlice.categoryType === 'front' 
            ?
            <St.CategorySelect value={createVideoSlice.lectureCategory} onChange={changeCategory}>
              <option value="html">HTML/CSS</option>
              <option value="javascript">JavaScript</option>
              <option value="react">React</option>
              <option value="vue">Vue</option>
              <option value="angular">Angular</option>
            </St.CategorySelect> 
            : 
            <St.CategorySelect value={createVideoSlice.lectureCategory} onChange={changeCategory}>
              <option value="c#">C#</option>
              <option value="spring">Spring</option>
              <option value="java">Java</option>
            </St.CategorySelect>
          }
          {/* <St.CategorySelect>
            <option value="">HTML/CSS</option>
            <option value="">JavaScript</option>
            <option value="">React</option>
            <option value="">Vue</option>
            <option value="">Angular</option>
          </St.CategorySelect>
          <St.CategorySelect>
            <option value="">C#</option>
            <option value="">Spring</option>
          </St.CategorySelect> */}
        </div>
      </St.CreateVideoArticle>

      <St.CreateVideoArticle>
        <St.MBThirty>
          <St.ArticleTitle>태그</St.ArticleTitle>
          <St.BasicInput
            onChange={tagChangeInput}
            onKeyDown={tagKeyPressEvent}
            value={tagInput}
            placeholder="텍스트 입력 후 엔터를 눌러 태그를 추가하세요"
          />
          <St.InputNotice>
            <Exclamation />
            공백없이 작성해 주십시오.
          </St.InputNotice>
          <St.InputNotice>
            <Exclamation />
            최대 10개까지 입력할 수 있습니다.
          </St.InputNotice>
          <St.TagItemWarp>
            {tags.map((tag, index) => (
              <St.TagItem key={index}>
                {tag}
                <Close onClick={() => deleteTags(tag)} />
              </St.TagItem>
            ))}
          </St.TagItemWarp>
        </St.MBThirty>

        <St.MBThirty>
          <St.ArticleTitle>한줄설명</St.ArticleTitle>
          <St.BasicInput
            onChange={explanationInput}
            value={createVideoSlice.lectureExplane}
            placeholder="예: 프로그래밍 강의입니다."
          />
        </St.MBThirty>

        <St.MBThirty>
          <St.ArticleTitle>소개 영상</St.ArticleTitle>
          <St.BasicInput
            onChange={introduceInput}
            value={createVideoSlice.lectureIntroduce}
            placeholder="Youtube동영상 URL을 넣어주세요."
          />
        </St.MBThirty>

        <St.MBThirty>
          <St.ArticleTitle>강좌 소개</St.ArticleTitle>
          <h1>에디터 들어갈부분</h1>
        </St.MBThirty>
        <St.NextCreateBtn type="button" onClick={() => ChangePage()}>
          다음
        </St.NextCreateBtn>
      </St.CreateVideoArticle>
    </St.CreateVideoWrap>
  );
}
export default CreateNewVideo