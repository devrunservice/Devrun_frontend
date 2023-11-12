import React, { useEffect, useState } from "react";
import LectureCard from "components/LectureCard/LectureCard";
// import { ListWrap } from "components/Home/style";
import { HeartFill, Link/* , Circle, MoreBtn */ } from "asset";
import DetailCurriculum from "components/DetailCurriculum/DetailCurriculum";
import DetailComment from "components/DetailComment/DetailComment"
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { DetailAPI } from "types";
import * as St from "./style";
import "swiper/swiper.css";


const Detail = () => {
  const [test, setTest] = useState([1, 2, 34, 1, 2, 3, 4]); // eslint-disable-line
  const [category, setCategory] = useState(1)
  
  const [data, setData] = useState<DetailAPI>()

  const getDetail = () => {
    const url = 'https://devrun.site/api/lectures/22'
    axios.get(url).then(res=> {
      console.log('res',res.data)
      setData({...res.data})
    }).catch(err=>console.log(err))
  }
  useEffect(()=> {
    getDetail()
  }, [])
  const changeCategory = (num:number) => {
    setCategory(num)
  }
  return (
    <St.DetailWrap>
      <St.PreviewArea>
        <St.DetailThum>
          <img src={data?.lectureThumbnail} alt="" />
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

          <St.DetailHashWrap>
            {/* {
              data.lectuerTag.map(list=> {
                <St.DetailHash>#{list}</St.DetailHash>
              })
            } */}
            {/* <St.DetailHash>#</St.DetailHash> */}
            {/* <St.DetailHash>#</St.DetailHash> */}
            {/* <St.DetailHash>#</St.DetailHash> */}
          </St.DetailHashWrap>
        </St.DetailInfo>
      </St.PreviewArea>

      <St.DetailMainWrap>
        <St.DetailTab>
          {/* <St.DetailTabItem>카테고리</St.DetailTabItem> */}
          <St.DetailTabItem style={{fontWeight: category === 1 ? 'bold' : 'normal'}} onClick={()=>changeCategory(1)}>커리큘럼</St.DetailTabItem>
          <St.DetailTabItem style={{fontWeight: category === 2 ? 'bold' : 'normal'}} onClick={()=>changeCategory(2)}>수강평</St.DetailTabItem>
          {/* <St.DetailTabItem>질의응답</St.DetailTabItem> */}
          {/* <St.DetailTabItem>수강전 문의</St.DetailTabItem> */}
        </St.DetailTab>
        {
          category === 1 ? <DetailCurriculum data={data} /> : <DetailComment />
        }
      </St.DetailMainWrap>
    </St.DetailWrap>
  );
};

export default Detail;
