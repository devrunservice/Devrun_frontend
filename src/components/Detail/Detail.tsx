import React, { useEffect, useState } from "react";
// import LectureCard from "components/LectureCard/LectureCard";
import { /* HeartFill, */ Link } from "asset";
import DetailCurriculum from "components/DetailCurriculum/DetailCurriculum";
import DetailComment from "components/DetailComment/DetailComment"
// import axios from "axios";
import { useLocation } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
import { DetailAPI } from "types";
import { detail } from "utils/api";
import * as St from "./style";
// import "swiper/swiper.css";


const Detail = () => {
  // const [test, setTest] = useState([1, 2, 34, 1, 2, 3, 4]); // eslint-disable-line
  const [category, setCategory] = useState(1)
  const location = useLocation()
  const [id, setId] = useState('')
  // const [tag, setTag] = useState([])
  const [data, setData] = useState<DetailAPI | undefined>()

  const getDetail = async() => {
    // const url = 'https://devrun.site/api/lectures/22'
    // axios.get(url).then(res=> {
    //   console.log(res)
    //   setData({...res.data})
    // }).catch(err=>console.log(err))
    try {
      const response = await detail.getDetailAPT(id)
      setData({...response.data})
    } catch(err) {
      console.log(err)
    }
  }
  useEffect(()=> {
    getDetail()
  }, [])

  useEffect(()=> {
    const path = location.pathname.split('/');
    const pathId = path[path.length - 1]
    setId(pathId)
  }, [location])
  const changeCategory = (num:number) => {
    setCategory(num)
  }
  return (
    <St.DetailWrap>
      <St.PreviewArea>
        <St.DetailThum>
          <img src={data?.lectureThumbnail} alt="img"/>
        </St.DetailThum>
        <St.DetailInfo>
          <St.DetailInfoTitle>{data?.lectureName}</St.DetailInfoTitle>
          <St.DetailUtils>
            <St.DetailUtilsItem>{data?.lectureCategory.lectureMidCategory}</St.DetailUtilsItem>
            <St.DetailUtilsItem>{data?.mentoId.name}</St.DetailUtilsItem>
            <St.DetailUtilsItem>
              <Link href="/" />
              공유하기
            </St.DetailUtilsItem>
          </St.DetailUtils>

          <St.ShortSpacer />

          {/* <St.DetailHashWrap>
            <St.DetailHash>#{data?.lectureTag}</St.DetailHash>
          </St.DetailHashWrap> */}
        </St.DetailInfo>
      </St.PreviewArea>

      <St.DetailMainWrap>
        <St.DetailTab>
          <St.DetailTabItem style={{fontWeight: category === 1 ? 'bold' : 'normal'}} onClick={()=>changeCategory(1)}>커리큘럼</St.DetailTabItem>
          <St.DetailTabItem style={{fontWeight: category === 2 ? 'bold' : 'normal'}} onClick={()=>changeCategory(2)}>수강평</St.DetailTabItem>
        </St.DetailTab>
        {
          category === 1 && data ? <DetailCurriculum data={data} /> : <DetailComment />
        }
        <St.SectionAreaWrap>
          <St.SectionTitle>다른 강의 함께 보기</St.SectionTitle>
          {/* <Swiper spaceBetween={20} slidesPerView={4}>
            <St.ListWrap>
              {test.map((list, index) => (
                <SwiperSlide key={index}>
                </SwiperSlide>
              ))}
            </St.ListWrap>
          </Swiper> */}
        </St.SectionAreaWrap>
      </St.DetailMainWrap>
    </St.DetailWrap>
  );
};

export default Detail;
