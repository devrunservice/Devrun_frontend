/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Exclamation} from 'asset';
import * as St from './styles';
import {openModal} from '../../redux/reducer/modalReducer';

const ImageUploader = ({
  page,
  onUpLoadImg,
}: {
  page: string;
  onUpLoadImg: (file: File) => void;
}) => {
  const dispatch = useDispatch();

  const [imgUrl, setImgUrl] = useState('');

  const handleUpLoadImg = (file: File) => {
    if (typeof onUpLoadImg === 'function') {
      onUpLoadImg(file);
    }
  };

  const uploadImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {files} = e.target;
    if (!files) {
      return;
    }
    if (files.length > 0) {
      const file = files[0];
      if (file.size > 1024 * 1024 * 2) {
        dispatch(openModal('이미지 용량을 초과하였습니다.'));
      }
      const url = URL.createObjectURL(file);
      setImgUrl(url);
      handleUpLoadImg(file);
    }
  };

  return (
    <St.UploadArea $page={page}>
      {page === 'profileUpdate' && (
        <St.Imgbox>
          {imgUrl && <img src={imgUrl} alt="updated profile" />}
        </St.Imgbox>
      )}
      {page === 'createVideo' && (
        <St.ImageWrap>{imgUrl && <img src={imgUrl} alt="" />}</St.ImageWrap>
      )}
      <St.UploadVideoWrap $page={page}>
        <div>
          <St.ShortInput
            onChange={uploadImg}
            accept="image/*"
            id="uploader"
            type="file"
            placeholder="선택된 이미지 없음"
          />
          <St.ImageBtn htmlFor="uploader">파일선택</St.ImageBtn>
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
  );
};

export default ImageUploader;
