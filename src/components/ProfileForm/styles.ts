import { styled } from "styled-components";
import { Input } from "style/Common";

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.6rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputForm = styled(Input)`
  width: 90%;
`;

export const P = styled.p`
  padding: 0.8rem 0 0.8rem 0.4rem;
`;

export const ChangeBtn = styled.button`
  color: ${(props: any) => props.theme.brandColor};
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
`;
