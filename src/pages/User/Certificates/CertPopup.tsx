import React from "react";
import { ICert } from "types";
import { FiDownload } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import * as St from "./style"

const CertPopup = (props: ICert) => (
  <St.PopupWrap>
    <St.Popup>
      <St.ButtonWrap>
        <St.Btn onClick={props.popupBtn}>
          <IoClose />
        </St.Btn>
        <St.Btn>
          <FiDownload />
        </St.Btn>
      </St.ButtonWrap>

      <St.Popupbox>asdsad</St.Popupbox>
    </St.Popup>
    <St.PopupBg onClick={props.popupBtn} />
  </St.PopupWrap>
);
export default CertPopup;
