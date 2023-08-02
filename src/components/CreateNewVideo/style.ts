import { styled } from "styled-components";
import { IPriceButton } from "types";

export const CreateVideoWrap = styled.section`
  width: 1200px;
  margin: 0 auto;
`
export const CreateVideoArticle = styled.article`
  border-bottom: 1px solid #ddd;
  padding-bottom: 30px;
  margin-top: 30px;
  > div {
    display: flex;
    align-items: center;
  }
`
export const ArticleTitle = styled.h4`
  color: #1d1d1d;
  margin-bottom: 15px;
  font-weight: ${props=>props.theme.semiBold};
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    font-size: ${props=>props.theme.size14};
    font-weight: 400;
    display: flex;
    align-items: center;
    background: none;
    svg {
      margin-right: 5px;
    }
  }
`
export const BasicInput = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ddd;
  outline: none;
`
export const ShortInput = styled(BasicInput)`
  width: 25%;
  &::-webkit-inner-spin-button{
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
  &::file-selector-button {
    display: none;
  }
  &#uploader {
    width: auto;
    flex: 1;
  }
`
export const InputNotice = styled.p`
  display: flex;
  align-items: center;
  color: #555555;
  margin-top: 10px;
  font-size: ${props=>props.theme.size14};
  svg {
    margin-right: 5px;
  }
`
export const SelectPriceBtn = styled.div`
  margin-right: 20px;
`
export const PriceBtn = styled.button<IPriceButton>`
  padding: 12px 15px;
  background: ${(props) => (props.active ? "#fff" : "#604B8E")};
  color: ${(props) => (props.active ? "#000" : "#fff")};
  border: 1px solid ${(props) => props.theme.mainColor};
  /* border-radius: ${(props) => (props.active ? "5px 0 0 5px" : "0px 5px 5px 0px")}; */
`;

export const UploadArea = styled.div`
  display: flex;
  align-items: center;
`
export const LectureImageWrap = styled.div`
  border-radius: 10px;
  background: #ddd;
  width: 50%;
  height: 250px;
  margin-right: 30px;
  border: 1px solid #ddd;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`
export const UploadVideoWrap = styled.div`
  width: 50%;
  align-self: self-start;
  > div {
    display: flex;
    align-items: center;
  }
  label {
    box-sizing: border-box;
    padding: 12px;
    color: ${props=>props.theme.mainColor};
    border: 1px solid ${props=>props.theme.mainColor};
    border-radius: 5px;
    margin-left: 10px;
  }
`
export const CategorySelect = styled.select`
  > div {
    display: flex;
  }
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ddd;
  outline: none;
  min-width: 25%;
  &:nth-child(2) {
    flex: 1;
    margin-left: 10px;
  }
`
export const MBThirty = styled.div`
  display: block !important;
  margin-bottom: 30px;
`
export const NextCreateBtn = styled.button`
  display: block;
  margin-left: auto;
  border: none;
  border-radius: 5px;
  background: ${props=>props.theme.mainColor};
  color: ${props=>props.theme.textWhite};
  padding: 12px 25px;
  /* padding-left: 25px; */
  /* padding-right: 25px; */
`
export const Curriculum = styled.div`
  
`
export const TagItemWarp = styled.div`
  margin-top: 10px;
  svg {
    margin-left: 5px;
    fill: #fff;
    rect {
      fill: #fff;
    }
  }
`
export const TagItem = styled.span`
  border: 1px solid #ddd;
  padding: 10px;
  box-sizing: border-box;
  display: inline-block;
  margin-right: 5px;
  border-radius: 5px;
  background: ${props=>props.theme.mainColor};
  color: ${props=>props.theme.textWhite};
`

export const OtherBtn = styled.button`
  display: block;
  border: none;
  border-radius: 5px;
  background: #604B8E;
  color: #fff;
  padding: 12px 25px;
`