import React from 'react';
import { NoticeList, Comment } from "components";
import * as St from "style/Theme";

const NoticeDetail = () => (
      <St.WhiteBg>
        <St.Inner>
          <NoticeList />
          <Comment/>
        </St.Inner>
      </St.WhiteBg>
    )
export default NoticeDetail;