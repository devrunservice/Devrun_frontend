import { NoticeList, Comment } from "components";
import * as St from "style/Theme";
const NoticeDetail =()=>{
    return (
      <St.WhiteBg>
        <St.Inner>
          <NoticeList />
          <Comment/>
        </St.Inner>
      </St.WhiteBg>
    );
}
export default NoticeDetail;