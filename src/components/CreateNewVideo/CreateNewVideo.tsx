import React from 'react';
import { Exclamation } from 'asset';
import * as St from './style'

const CreateNewVideo = () => (
    <St.CreateVideoWrap>
      <St.CreateVideoArticle>
        <St.ArticleTitle>강좌명</St.ArticleTitle>
        <St.BasicInput type="text" placeholder='영문, 숫자 5-11자'/>
        <St.InputNotice>
          <Exclamation/>
          수업 내용이 무엇인지 알 수 있는 과목명으로 설정하는 것을 권장합니다.
        </St.InputNotice>
      </St.CreateVideoArticle>

      <St.CreateVideoArticle>
        <St.ArticleTitle>가격</St.ArticleTitle>
        <div>
          <St.SelectPriceBtn>
            <St.FreeBtn>무료</St.FreeBtn>
            <St.PayBtn>유료</St.PayBtn>
          </St.SelectPriceBtn>
          <St.ShortInput type="number" placeholder='0'/>
        </div>
      </St.CreateVideoArticle>

      <St.CreateVideoArticle>
        <St.ArticleTitle>강좌 이미지</St.ArticleTitle>
        <St.UploadArea>
          <St.LectureImageWrap />
          <St.UploadVideoWrap>
            <div>
              <St.ShortInput id='uploader' type='file' placeholder='선택된 이미지 없음' />
              <label htmlFor="uploader">파일선택</label>
            </div>
            <St.InputNotice><Exclamation/>최대 2MB까지 업로드 가능합니다.</St.InputNotice>
            <St.InputNotice><Exclamation/>528 X 297 픽셀 이미지 사용</St.InputNotice>
          </St.UploadVideoWrap>
        </St.UploadArea>
      </St.CreateVideoArticle>

      <St.CreateVideoArticle>
          <St.ArticleTitle>강좌 카테고리</St.ArticleTitle>
        <div>
          <St.CategorySelect>
            <option value="">프로그래밍</option>
            <option value="">프로그래밍</option>
            <option value="">프로그래밍</option>
          </St.CategorySelect>
          <St.CategorySelect>
            <option value="">프로그래밍</option>
            <option value="">프로그래밍</option>
            <option value="">프로그래밍</option>
          </St.CategorySelect>
        </div>
      </St.CreateVideoArticle>

      <St.CreateVideoArticle>
        <St.MBThirty>
          <St.ArticleTitle>태그</St.ArticleTitle>
          <St.BasicInput placeholder='텍스트 입력 후 엔터를 눌러 태그를 추가하세요' />
          <St.InputNotice><Exclamation/>최대 10개까지 입력할 수 있습니다.</St.InputNotice>
        </St.MBThirty>

        <St.MBThirty>
          <St.ArticleTitle>한줄설명</St.ArticleTitle>
          <St.BasicInput placeholder='예: 프로그래밍 강의입니다.' />
        </St.MBThirty>

        <St.MBThirty>
          <St.ArticleTitle>소개 영상</St.ArticleTitle>
          <St.BasicInput placeholder='Youtube동영상 URL을 넣어주세요.' />
        </St.MBThirty>

        <St.MBThirty>
          <St.ArticleTitle>강좌 소개</St.ArticleTitle>
          <h1>에디터 들어갈부분</h1>
        </St.MBThirty>
        <St.NextCreateBtn>다음</St.NextCreateBtn>
      </St.CreateVideoArticle>

    </St.CreateVideoWrap>
  )

export default CreateNewVideo;