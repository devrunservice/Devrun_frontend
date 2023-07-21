/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Exclamation } from "asset";
import profile from "asset/images/profile.png";
import * as St from "./styles";

const ImageUploader = ({ page }: { page: string }) => {
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
      <St.ImageWrap>
        {page === "profileUpdate" && (
          <img src={profile} alt="default profile" />
        )}
        {page === "createVideo" && imgUrl && <img src={imgUrl} alt="" />}
      </St.ImageWrap>
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
  );
};

export default ImageUploader;
