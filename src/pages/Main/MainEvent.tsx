import styled from 'styled-components'
import { MainVisual } from 'asset'

const MainEvent = () => {
  return (
    <EventBanner>
      <FullWidthImg/>
    </EventBanner>
  )
}

const EventBanner = styled.div`
  margin-bottom: 50px;
`
const FullWidthImg = styled.div`
  width: 100vw;
  height: 300px;
  background-image: url(${MainVisual});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export default MainEvent