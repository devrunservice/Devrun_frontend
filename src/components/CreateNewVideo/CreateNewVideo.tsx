import React, { ChangeEvent, useEffect, useState } from 'react';
import { Close, Exclamation } from 'asset';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import Quill from 'components/Quill/QuillComponent';
import axios from 'axios';
import { deleteTag, bigCategoryType, midCategoryType, setCategoryNo, onImageUrl, onImageFile, onLectureIntro, /* onLectureCategory, */ /* onLectureIntroduce, */ onLectureName, onLecturePrice, onLectureTag } from '../../redux/reducer/createVideoReducer';
import * as St from './style'

export interface StyledButtonProps {
  active: string;
}

const CreateNewVideo = ({ChangePage}:{ChangePage:any}) => {
  const dispatch = useDispatch()
  const videoStore = useSelector((state:RootState)=>state.createVideoSlice)
  const tags = videoStore.lectureTag
  
  /* 가격 무료 유료 선택 */
  const [isActive, setIsActive] = useState<boolean>(false)
  const [priceState, setPriceState] = useState<boolean>(false)
  const [isCategory, setIsCategory] = useState<any[]>([])

  const getCategory = () => {
    const url = 'https://devrun.site/lectureregist/categories'
    axios.get(url).then(res=>{
      console.log(res.data)
      setIsCategory([...res.data])
      console.log('isCategory',isCategory)
    })
  }
  // const getSectionNum = () => {
  //   const url = 'https://devrun.site/lectureregist/lastsectionid'
  //   axios.get(url).then(res=>console.log(res))
  // }

  useEffect(()=> {
    getCategory()
    // getSectionNum()
  }, [])
  
  // useEffect(() => {
  //   console.log('isCategory', isCategory);
  // }, [isCategory]); 
  
  const freePayment = () => {
    setIsActive(false)
    setPriceState(false)
    dispatch(onLecturePrice(0))
  }
  const pricePayment = () => {
    setIsActive(true)
    setPriceState(true)
  }
  /* 강의제목 */
  const nameInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(onLectureName(e.target.value))
  }
  /* 가격 */
  const priceInput = (e: ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    dispatch(onLecturePrice(value))
  }

  /* 이미지업로드 */
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
      dispatch(onImageFile(files[0]))
      dispatch(onImageUrl(url))
    }
  }

  /* 카테고리 */
  // const [isMid, setIsMid] = useState('')
  const changeType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value)
    // const selectedBigCategory = e.target.value;
    // setIsMid(selectedBigCategory)
    dispatch(bigCategoryType(e.target.value))
  }
  const changeMid = (e:React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(midCategoryType(e.target.value))
    const result = isCategory.filter(list=>list.lectureMidCategory === e.target.value)[0].categoryNo
    console.log('result', result)
    dispatch(setCategoryNo(result))
  }
  // const changeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   dispatch(onLectureCategory(e.target.value))      
  // }


  /* 태그 */
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
      dispatch(onLectureTag([
        tagInput
      ]))
      setTagInput('')
      
    }
  }
  const deleteTags =(tag: number | string) => {
    dispatch(deleteTag(tag))
  }

  /* 한줄설명 */
  const explanationInput = (e: any) => {
    dispatch(onLectureIntro(e.target.value))
  }
  
  const renderOptions = () => {
    return isCategory
      .filter((option, index, self) => 
        index === self.findIndex(item => item.lectureBigCategory === option.lectureBigCategory)
      )
      .map((option, index) => (
        <option key={index} value={option.lectureBigCategory}>{option.lectureBigCategory}</option>
      ));

  };
  /* 소개영상 */



  return (
    <St.CreateVideoWrap>
      <St.CreateVideoArticle>
        <St.ArticleTitle>강좌명</St.ArticleTitle>
        <St.BasicInput
          onChange={nameInput}
          value={videoStore.lectureName}
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
            <St.ShortInput onChange={priceInput} value={videoStore.lecturePrice} type="number" placeholder="0" />
          )}
        </div>
      </St.CreateVideoArticle>

      <St.CreateVideoArticle>
        <St.ArticleTitle>강좌 이미지</St.ArticleTitle>
        <St.UploadArea>
          <St.LectureImageWrap>
            {videoStore.lectureThumbnail && <img src={videoStore.lectureThumbnailUrl} alt="" />}
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
          <St.CategorySelect value={videoStore.lectureCategory.lectureBigCategory} onChange={changeType}>
            {renderOptions()}
          </St.CategorySelect>
          <St.CategorySelect value={videoStore.lectureCategory.lectureMidCategory} onChange={changeMid}>
            {isCategory
              .filter((option) => option.lectureBigCategory === videoStore.lectureCategory.lectureBigCategory)
              .map((option, index) => (
                <option key={index} value={option.lectureMidCategory}>
                  {option.lectureMidCategory}
                </option>
              ))
            }
          </St.CategorySelect>
        </div>
      </St.CreateVideoArticle>
            <div>{videoStore.lectureCategory.lectureMidCategory}</div>
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
            value={videoStore.lectureIntro}
            placeholder="예: 프로그래밍 강의입니다."
          />
        </St.MBThirty>

        <St.MBThirty>
          <St.ArticleTitle>강좌 소개</St.ArticleTitle>
          <div>
            <Quill/>
          </div>
        </St.MBThirty>
        <St.NextCreateBtn type="button" onClick={() => ChangePage()}>
          다음
        </St.NextCreateBtn>
      </St.CreateVideoArticle>
    </St.CreateVideoWrap>
  );
}
export default CreateNewVideo
