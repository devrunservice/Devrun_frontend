import { styled } from "styled-components";
import { Close } from "asset";
import { BsArrowLeftShort } from "react-icons/bs";

export const Top = styled.div`
  padding: 20px 25px;
  border-bottom: 1px solid ${(props: any) => props.theme.borderD};
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

export const Deletes = styled(Close)`
  cursor: pointer;
`;
export const Arr = styled(BsArrowLeftShort)`
  cursor: pointer;
  margin-right: 5px;
`;
export const TopButton = styled.button`
  background: none;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props: any) => props.theme.black};
  display: flex;
  align-items: center;
  padding: 0;
`;
export const Title = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props: any) => props.theme.black};
`;