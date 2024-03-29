import { styled } from "styled-components";
import { BiArrowBack } from "react-icons/bi";


export const VideoViewWrap = styled.div`
    position:relative;
`
export const Left = styled.div`
    width:calc(100% - 70px);
    margin-right:70px;
`;
export const Top = styled.div`
  height: 3.75rem;
  background: ${(props: any) => props.theme.bg444};
  width: 100%;
  line-height: 3.75rem;
  padding: 0 1.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TopLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  width: calc(100% - 28.125rem);
  overflow: hidden;
`;
export const TopRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 28.125rem;
  padding-left: 2rem;
  gap: 1rem;
  > p {
    color: ${(props: any) => props.theme.textWhite};
    font-size: 0.75rem;
  }
  > p > span {
    color: ${(props: any) => props.theme.text999};
    padding-left: 0.625rem;
  }
`;
export const Back = styled.button`
  width: 2.1875rem;
  height: 2.1875rem;
  border-radius: 50%;
  background: ${(props: any) => props.theme.bgBlack};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  &:hover {
    background: ${(props: any) => props.theme.bg343a40};
  }
`;
export const BiArrow = styled(BiArrowBack)`
  color: ${(props: any) => props.theme.textWhite};
`;
export const Title = styled.h4`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${(props: any) => props.theme.textWhite};
  font-weight: 400;
  width: calc(100% - 2.1875rem);
`;


export const Center = styled.div`
  height: calc(100vh - 6.875rem);
  position: relative;
  width: 100%;

  > div > iframe , > div {
    height: 100%;
    width: 100%;
  }
`;

export const Bottom = styled.div`
  height: 3.125rem;
  background: ${(props: any) => props.theme.bg444};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.125rem;
  > button {
    color: ${(props: any) => props.theme.text999};
    background: transparent;
    display: flex;
    align-items: center;
    gap:5px;
  }
  > button:hover {
    color: ${(props: any) => props.theme.textWhite};
  }
`;
export const Right = styled.div`
    position:fixed;
    right:0;
    top:0;
    width:70px;
    height:100vh;
`; 

export const Button = styled.button`
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${(props: any) => props.theme.borderD};
  background: none;
  width: 100%;
  > p {
    font-size: 0.75rem;
    line-height: 1;
    margin-top: 0.5rem;
  }
  > svg {
    color: ${(props: any) => props.theme.textColor};
    font-size: 1.375rem;
  }
  &:hover p,
  &:hover svg {
    color: ${(props: any) => props.theme.mainColor};
  }
`;
export const CurriculumWrap = styled.aside`
  position: fixed;
  right: 70px;
  height: 100vh;
  top: 0;
  z-index: 1;
  width: 500px;
  background: ${(props: any) => props.theme.bgColor};
  border-right: 1px solid ${(props: any) => props.theme.borderD};
  display: flex;
  flex-direction: column;
`;