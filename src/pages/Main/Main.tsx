import React from 'react'
import styled from 'styled-components'
import MainEvent from './MainEvent'



const Main = () => {
  return (
    <>
      <MainEvent />
      <MainBg color="red">
        메인
      </MainBg>
    </>
  )
}

const MainBg = styled.div`
  max-width: 1280px;
  min-height: 100vh;
  margin: 0 auto;
  background: ${props => props.color}
`

export default Main