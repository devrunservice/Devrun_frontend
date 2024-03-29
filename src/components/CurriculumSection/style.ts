import {styled} from 'styled-components'

export const CurriculumSectionWrap = styled.section`
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 40px;
`
export const CurriculumHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px;
  background: ${props=>props.theme.bgGrayColor};
  h4 {
    color: ${props=>props.theme.black};
    font-weight: ${props=>props.theme.medium};
  }
  div {
    display: flex;
    align-items: center;
    > svg {
      margin-left: 20px;
      cursor: pointer;
    }
  }
  button {
    display: flex;
    align-items: center;
    background: none;
    padding: 0;
    svg {
      margin-right: 5px;
      cursor: pointer;
    }
  }
`
export const CurriculumMain = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px dashed #ddd;
  margin: 0 18px;
  padding: 15px 0;
  svg {
    margin-left: 20px;
    cursor: pointer;
  }
  p {
    font-size: 12px;
  }
  >div > input{
    width:600px;
  }
`
export const FlexLine = styled.div`
  display: flex;
`
export const FileInput = styled.input`
  &::-webkit-inner-spin-button{
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
  &::file-selector-button {
    display: none;
  }
  &#video-url {
    width: auto;
    flex: 1;
    border: 1px solid #222;
    padding: 1px 2px;
    border-radius: 5px;
    margin-right: 5px
  }
`