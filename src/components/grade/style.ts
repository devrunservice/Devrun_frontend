import styled from 'styled-components'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";




export const GradeWrap = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props: any) => props.theme.bgGrayColor};

  padding: 40px 0;
  text-align: center;
  > div {
    display: flex;
    align-self: center;
    gap: 5px;
    margin-bottom: 15px;
  }
  > div > button {
    padding: 0;
    font-size: 0;
  }
  > p {
    font-size: 0.875rem
  }
`;

export const StarOn = styled(AiFillStar)`
  fill: ${(props: any) => props.theme.textYello};
  font-size: 30px;
`;

export const StarOff = styled(AiOutlineStar)`
  fill: ${(props: any) => props.theme.textYello};
  font-size: 30px;
  
`;