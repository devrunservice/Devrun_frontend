import * as St from './style'
import { ArrowBottom, Play } from 'asset'

const Curriculum = () => {
  return (
    <St.CurriculumItem>
      <St.CurriculumItemHeader>
        <span>섹션</span>
        <div>
          <span>10강 · 총 60분</span>
          <ArrowBottom/>
        </div>

      </St.CurriculumItemHeader>
      <St.CurriculumHidden>
        <ul>
          <St.HiddenList>
            <div>
              <Play/>
              <span>프론트엔드...</span>
            </div>
            <div>19:22</div>
          </St.HiddenList>
        </ul>
      </St.CurriculumHidden>
    </St.CurriculumItem>
  );
};

export default Curriculum;