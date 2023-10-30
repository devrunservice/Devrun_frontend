import { styled } from "styled-components";
import { ButtonWrap } from "style/Common";
import { BsCheckAll } from "react-icons/bs";



export const Title = styled.h4`
  margin-bottom: 1.875rem;
  font-size: 1.5625rem;
  font-weight: 700;
  color: ${(props: any) => props.theme.black};
`;
export const Top = styled.div`
  border-bottom: 1px solid ${(props: any) => props.theme.borderC};
  border-top: 1px solid ${(props: any) => props.theme.borderC};
  padding: 1.875rem 0;
  
`;
export const Left = styled.em`
  display: block;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${(props: any) => props.theme.black};
`;
export const Right = styled.div`
  margin-top: 1.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const Name = styled.p`
  color: ${(props: any) => props.theme.black};
  display: flex;
  align-items: center;
  svg {
    margin-left: 0.3125rem;
  }
`;
export const Date = styled.p`
  color: ${(props: any) => props.theme.black};
`;
export const Content = styled.div`
  width: 100%;
  min-height: 31.25rem;
  > pre {
    white-space: break-spaces;
  }

  padding-top: 2.5rem ;
  
`;
export const NameCheack = styled(BsCheckAll)`
  color: ${(props: any) => props.theme.mainColor};
  font-size: 1.25rem;
`;
export const BtnWrap = styled(ButtonWrap)`
  border-bottom: 1px solid ${(props: any) => props.theme.borderC};
  padding-bottom: 2.5rem;
  margin-bottom: 3.75rem;
`;

export const DelButton = styled.button`
  background: ${(props: any) => props.theme.textRed};
  color: ${(props: any) => props.theme.textWhite};
  width: 5.625rem;
  border-radius: 0.3125rem;
  height: 3rem;
  font-size: 0.875rem;
`;