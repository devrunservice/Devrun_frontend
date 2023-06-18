import { styled } from "styled-components"

export const CurriculumItem = styled.li`
width: calc(50% - 20px);
margin-bottom: 20px;
&:nth-child(odd) {
  margin-right: 20px;
}
`
export const CurriculumItemHeader = styled.div`
  border-radius: 5px;
  background: ${props=>props.theme.bgGrayColor};
  padding: 18px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

`
export const CurriculumHidden = styled.div`
  margin-top: 14px;
  padding: 0 20px;
  width: 100%;
  ul {
    width: 100%;
  }
`
export const HiddenList = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px dashed #ddd;
  div {
    display: flex;
    align-items: center;
    span {
      margin-left: 8px;
    }
  }
`