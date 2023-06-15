import {styled} from 'styled-components'
import MainVisual from "asset/images/MainVisual.jpg";


export const MainBg = styled.div`
  max-width: 1280px;
  min-height: 100vh;
  margin: 0 auto 100px;
  padding: 0 20px;
  background: ${props => props.theme.color}
`
export const SwiperBox = styled.div`
`
export const ListWrap = styled.div`
display: grid;
align-items: center;
`
export const ListTitle = styled.h3`
  color: ${props=>props.theme.textBlack};
  font-weight: ${props=>props.theme.fontSemiBold};
  font-size: ${props=>props.theme.fontSize18px};
  margin-bottom: 20px;
`
export const ListEachArea = styled.div`
  margin-bottom: 30px;
`
export const RecommendClassWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 18px;
`
export const RecommendClass = styled.li`
  background: ${(props) => props.theme.bgGrayColor};
  color: ${(props) => props.theme.textBlack};
  list-style: none;
  font-size: ${(props) => props.theme.fontSize16px};
  font-weight: ${(props) => props.theme.fontSemiBold};
  text-align: center;
  border-radius: 10px;
  padding: 18px 0;
  &:hover {
    background: ${(props) => props.theme.mainColor};
    color: #fff;
  }
`; 
//main evnt
export const EventBanner = styled.div`
  margin-bottom: 50px;
`


export const FullWidthImg = styled.div`
  width: 100vw;
  height: 300px;
  background: url(${MainVisual});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;