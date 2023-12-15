/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useRef} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'redux/store';
import html2canvas from 'html2canvas';
import JsPDF from 'jspdf';
import Logo from 'asset/images/Logo.png';
import {FiDownload} from 'react-icons/fi';
import {UserTop} from 'components';
import * as S from 'style/Common';
import * as St from './style';
import {certificationDetailLoading} from '../../../redux/reducer/certificationReducer';

const CertificationDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {lectureId} = useParams();

  const pdfCon = useRef<HTMLDivElement>(null);

  const certificationDetail = useSelector(
    (state: RootState) => state.certificationReducer.certificationDetail
  );

  const pdfDown = async () => {
    if (!pdfCon.current) return;

    // 이미지로 저장할때.
    // try {
    //   const pdf = pdfCon.current;
    //   const canvas = await html2canvas(pdf,{scale:2})
    //   canvas.toBlob((item)=>{
    //     if(item !== null){
    //       saveAs(item, "제목입니다.pdf");
    //     }
    //   })
    // } catch (error) {
    //   console.log("저장을 실패했습니다.")
    // }
    // PDF로 저장할때.
    html2canvas(pdfCon.current).then((canvas) => {
      const img = canvas.toDataURL('image/png', 'images-FiDownload.png');
      const pdf = new JsPDF();
      const imgProps = pdf.getImageProperties(img);
      const width = pdf.internal.pageSize.getWidth();
      const height = (imgProps.height * width) / imgProps.width;
      pdf.addImage(img, 'png', 0, 0, width, height);
      pdf.save('수료증.pdf');
    });
  };

  useEffect(() => {
    dispatch(certificationDetailLoading({lectureId: lectureId}));
  }, []);

  console.log(certificationDetail);

  return (
    <section>
      {/* <UserTop title="수료증" /> */}

      <St.CertWrap>
        <St.Certbox ref={pdfCon}>
          <St.Top>
            <St.SubTitle>
              <St.Dot>우수 수료 인증서</St.Dot> DevRun for business
            </St.SubTitle>
            <St.Title>
              Certificate <br />
              of Completion
            </St.Title>
            <St.Content>
              <St.ContentLi>
                <St.Context>이름</St.Context>
                <St.Contitle>{certificationDetail.userName}</St.Contitle>
              </St.ContentLi>
              <St.ContentLi>
                <St.Context>생년월일</St.Context>
                <St.Contitle>{certificationDetail.birthday}</St.Contitle>
              </St.ContentLi>
              <St.ContentLi>
                <St.Context>우수 수료 과정명</St.Context>
                <St.Contitle>{certificationDetail.lectureName}</St.Contitle>
              </St.ContentLi>
              <St.ContentLi>
                <St.Context>기간</St.Context>
                <St.Contitle>{`${certificationDetail.start} ~ ${certificationDetail.end}`}</St.Contitle>
              </St.ContentLi>
              <St.ContentLi>
                <St.Contitle>
                  위 사람은 DevRun의 상기 과정을 성실하게 수료하였음을
                  인증합니다.
                </St.Contitle>
              </St.ContentLi>
              <St.ContentLi>
                <St.ConDate>{certificationDetail.end}</St.ConDate>
              </St.ContentLi>
            </St.Content>
          </St.Top>
          <St.Bottom>
            <St.LogoIcon>
              <St.CopyText>
                (주) 데브런
                <br />
                서울시 강남구
                <br />
                http://devrun.net
              </St.CopyText>
              <img src={Logo} alt="로고" />
            </St.LogoIcon>
            <St.StampIcon />
          </St.Bottom>
        </St.Certbox>
      </St.CertWrap>
      <S.ButtonWrap $active={false}>
        <S.Button onClick={() => pdfDown()} $active={false}>
          다운로드 <FiDownload />
        </S.Button>
        <S.Button onClick={() => navigate('/certifications')} $active>
          목록
        </S.Button>
      </S.ButtonWrap>
    </section>
  );
};
export default CertificationDetail;
/* eslint-disable @typescript-eslint/no-unused-vars */
