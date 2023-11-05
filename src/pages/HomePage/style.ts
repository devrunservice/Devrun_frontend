import {styled} from 'styled-components'
import { Search, Arrow } from "asset";
import MainVisual from "asset/images/MainVisual.jpg";


export const MainBg = styled.div`
  max-width: 1200px;
  width:100%;
  margin: 0 auto 100px;
`
export const SwiperBox = styled.div`
`
export const ListWrap = styled.div`
display: grid;
align-items: center;
`
export const ListTitle = styled.h3`
  color: ${(props:any) => props.theme.black};
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

export const SearchTitle = styled(ListTitle)`
  font-size: 1.5625rem;
  text-align:center;
`;

export const SearchBox = styled.div`
  position: relative;
  width: 40rem;
  margin: 0 auto;
`;
export const SearchInput = styled.input`
  border: 1px solid ${(props: any) => props.theme.borderC};
  border-radius: 3.125rem;
  height: 3.75rem;
  padding: 0 4rem 0 1.5625rem;
  width: 100%;
  outline: 0;
  margin-bottom: 2rem;
  background: ${(props: any) => props.theme.bgNavcolor};
  font-size: 1rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.5s;
  &:hover ,&:focus{
    background: ${(props: any) => props.theme.bgColor};
  }
`;
export const SearchIcon = styled(Search)`
  position: absolute;
  margin: auto 0;
  right: 1.5625rem;
  top: 1rem;
  cursor: pointer;
  
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
  width: 80px;
  > p {
    color: ${(props: any) => props.theme.black};
    font-size: 0.875rem;
  }
`;
export const CategoryIcon = styled.div`
  position: relative;
  width: 2.5rem;
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
export const NoticeBg = styled.div`
  background: ${(props: any) => props.theme.bgGrayColor};
  width:100%;
`;
export const Notice = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  display: flex;
  gap: 2rem;
  padding: 2.4rem 0;
`;
export const NoticeLeft = styled.p`
  color: ${(props: any) => props.theme.black};
  font-weight: 600;
  line-height: 1;
  width:4rem;
`;
export const NoticeRightUl = styled.ul`
  width:calc(100% - 6rem)
`;
export const NoticeRightLi = styled.li`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${(props: any) => props.theme.borderD};
  line-height: 1;
  padding-bottom: 0.875rem;
  margin-bottom: 0.875rem;
  cursor: pointer;
  &:last-child {
    border-bottom: 0px solid ${(props: any) => props.theme.borderD};
    padding-bottom: 0rem;
    margin-bottom: 0rem;
  }
  > p {
    width: calc(100% - 9.5%);
    padding-right: 2rem;
    font-size: 0.875rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  > span {
    width: 9.5%;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Arr = styled(Arrow)`
  transform: rotateZ(-90deg);
  font-size:0;
`;