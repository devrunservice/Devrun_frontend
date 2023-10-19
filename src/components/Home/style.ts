import {styled} from 'styled-components'
import MainVisual from "asset/images/MainVisual.jpg";


export const MainBg = styled.div`
  max-width: 1200px;
  margin: 0 auto 100px;
`
export const SwiperBox = styled.div`
`
export const ListWrap = styled.div`
display: grid;
align-items: center;
`
export const ListTitle = styled.h3`
  color: ${(props) => props.theme.black};
  font-weight: 700;
  font-size: 1.375rem;
  line-height: 1;
  margin-bottom: 1.875rem;
`;
export const ListEachArea = styled.div`
  margin-bottom: 3.75rem;
`;


// main event
export const EventBanner = styled.div`
  margin-bottom: 5rem;
`


export const FullWidthImg = styled.div`
  width: 100vw;
  height: 300px;
  background: url(${MainVisual});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Section = styled.ul`
  display: flex;
  justify-content: space-between;
`;
export const SectionLi = styled.li`
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: ${(props: any) => props.theme.black};
    font-size: 0.875rem;
  }
`;
export const CategoryIcon = styled.div`
  position: relative;
  width: 3.125rem;
  > svg {
    width: inherit;
    height: inherit;
    object-fit: cover;
    padding: 0;
    max-width: 100%;
  }
`;
export const ListUl = styled.ul`
  display: flex;
  gap: 1.25rem;
  align-items: center;
`;



export const Listli = styled.li`
  border: 1px solid ${(props) => props.theme.borderD};
  border-radius: 10px;
  width: 36.875rem;
  display: flex;
  overflow: hidden;
`;
export const ListImg = styled.div`
  width: 15rem;
  height: 8.4375rem;
  background: #f7f7f7;
  overflow: hidden;
`;
export const Img = styled.img`
  width: inherit;
  height: inherit;
  object-fit: cover;
  padding: 0;
  max-width: 100%;
`;
export const ListTextBox = styled.div`
  padding: 1.25rem;
  width: calc(100% - 15rem);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`;
export const ListEm = styled.em`
  display:block;
  color: ${(props: any) => props.theme.black};
  font-weight: 600;
  line-height: 22px;
  height: 44px;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
export const ListText = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content: space-between;
  > span {
    font-size: 0.875rem;
    display: block;
    line-height: 1;
  }
`;
export const Gauge = styled.div`
  width: 100%;
  background: ${(props: any) => props.theme.bgGrayColor};
  height: 5px;
  border-radius: 5px;
  position: relative;
  margin-top: 12px;
  overflow: hidden;
  > span {
    top: 0;
    bottom: 0;
    left: 0;
    position: absolute;
  }
`;
