import * as St from "style/Theme";
import { NoticeCom, Pagination } from "components";

const Notice = () => {
  return (
    <St.WhiteBg>
      <St.Inner>
        <NoticeCom />
        <Pagination />
      </St.Inner>
    </St.WhiteBg>
  );
};
export default Notice;
