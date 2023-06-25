import CurriculumSection from 'components/CurriculumSection/CurriculumSection';
import * as St from '../CreateNewVideo/style'
import { PlusCircle } from 'asset';
const CreateVideoTwo = () => {
  return (
    <St.CreateVideoWrap>
      <St.CreateVideoArticle>
        <St.ArticleTitle>
          <span>커리큘럼 등록</span>
          <button>
            <PlusCircle/>섹션추가하기
          </button>
        </St.ArticleTitle>

        <CurriculumSection />

      </St.CreateVideoArticle>
    </St.CreateVideoWrap>
  );
};

export default CreateVideoTwo;