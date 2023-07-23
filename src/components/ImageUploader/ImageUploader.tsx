/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { ImageUploaderType } from "types";
import { Exclamation } from "asset";
import * as St from "./styles";

const ImageUploader: React.FC<ImageUploaderType> = ({ page }) => {
  const [imgUrl, setImgUrl] = useState("");

  const uploadImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) {
      return;
    }
    if (files.length > 0) {
      const file = files[0];
      if (file.size > 1024 * 1024 * 2) {
        alert("이미지 용량을 초과하였습니다.");
        return;
      }
      const url = URL.createObjectURL(file);
      setImgUrl(url);
    }
  };
  return (
    <St.UploadArea>
      {page === "profileUpdate" && (
        <St.Imgbox>
          {imgUrl && <img src={imgUrl} alt="updated profile" />}
        </St.Imgbox>
      )}
      {page === "createVideo" && (
        <St.ImageWrap>{imgUrl && <img src={imgUrl} alt="" />}</St.ImageWrap>
      )}
      <St.UploadVideoWrap page={page}>
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
