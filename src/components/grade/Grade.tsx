import React, { useState } from 'react'
import { StarOn, StarOff } from 'asset'
import * as St from './style'
const Grade = () => {
  const [stars, setStars] = useState([false, false, false, false, false])

  const handleStarClick = (index: number) => {
    setStars((prevState)=>prevState.map((_, i) => i < index + 1))
  }
  return (
    <St.GradeWrap>
      {
        stars.map((filled, index)=> (
          <div key={index} onClick={()=>handleStarClick(index)}>
            {filled ? <StarOn style={{marginLeft: 5}}/> : <StarOff style={{marginLeft: 5}} />}
          </div>
        ))
      }
    </St.GradeWrap>
  )
}
export default Grade