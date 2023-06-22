import React, { useState } from 'react';
import * as St from "style/Theme";
import { NoticeCom, Pagination } from "components";

const Notice = () => {
  const [count, setCount] = useState<number>(0); // eslint-disable-line @typescript-eslint/no-unused-vars
    return (
      <St.WhiteBg>
        <St.Inner>
          <NoticeCom />
          <Pagination count={count}/>
        </St.Inner>
      </St.WhiteBg>
    )
}
export default Notice;
