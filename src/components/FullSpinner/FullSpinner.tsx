import React from "react";
import * as St from "./styles";

const Spinner = () => (
  <St.Section>
    <St.SpinnerIconWrap>
      <div>Loading....</div>
      <St.SpinnerIcon />
    </St.SpinnerIconWrap>
  </St.Section>
);

export default Spinner;
