import * as St from './style'
import * as Dst from '../CreateNewVideo/style'
import { Pencil, PlusCircle, Trash } from 'asset';
const CurriculumSection = () => {
  return (
    <>
      <St.CurriculumSectionWrap>
        <St.CurriculumHeader>
          <h4>섹션 0. 개요</h4>
          <div>
            <button>
              <PlusCircle/>수업 추가하기
            </button>
            <Pencil/>
            <Trash/>
          </div>
        </St.CurriculumHeader>

        <St.CurriculumMain>
          <div>?</div>
          <div>
            <Pencil/>
            <Trash/>
          </div>
        </St.CurriculumMain>

      </St.CurriculumSectionWrap>
      <Dst.NextCreateBtn>등록</Dst.NextCreateBtn>
    </>
  );
};

export default CurriculumSection;