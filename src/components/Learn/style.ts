import { styled } from "styled-components";

export const LearnLi = styled.div`
  width: 280px;
  cursor: pointer;
`;
export const ImgWrap = styled.div`
  width: 100%;
  height: 157px;
  background: ${(props: any) => props.theme.bgGrayColor};
  overflow: hidden;
  border-radius: 10px;
`;
export const Img = styled.img`
  width: inherit;
  height: inherit;
  object-fit: cover;
  padding: 0;
  max-width: 100%;
`;
export const TitleText = styled.p`
  margin: 20px 0 15px;
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
export const TextWrap = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  line-height: 1;
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
