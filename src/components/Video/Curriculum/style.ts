import { styled } from "styled-components";
import { Delete } from "asset";


export const Top = styled.div`
  padding: 20px 25px;
`;
export const Title = styled.strong`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props: any) => props.theme.black};
`;
export const Deletes = styled(Delete)`
  cursor: pointer;
`;
export const SubTitle = styled.em`
display:block;
  margin: 1.25rem 0 0.75rem;
  font-size: 1.125rem;
  font-weight: 500;
  color: ${(props: any) => props.theme.black};
  line-height: 1.5;
`;
export const SubContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
   > p {
    font-size: 0.875rem;
    line-height: 1;
  }
  > p:first-child {
    width: 100%;
  }
`;
export const Gauge = styled.div`
  margin-top: 1.5625rem;
  width: 100%;
  background: ${(props: any) => props.theme.bgGrayColor};
  height: 5px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  > span {
    top: 0;
    bottom: 0;
    left: 0;
    position: absolute;
  }
`;

export const Bottom = styled.div``;

export const SectionTitle = styled.div`
  background: ${(props: any) => props.theme.bgGrayColor};
  padding: 20px 25px;
  border-top: 1px solid ${(props: any) => props.theme.borderD};
  border-bottom: 1px solid ${(props: any) => props.theme.borderD};
  > p {
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;
  }
  > em {
    color: ${(props: any) => props.theme.black};
    font-weight: 600;
    display: block;
    margin-top: 0.75rem;
    line-height: 1;
  }
`;
