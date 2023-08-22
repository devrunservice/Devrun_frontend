import {styled} from 'styled-components';

export const Section = styled.section<{isOpen: boolean}>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.bgBlack};
  opacity: 50%;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: ${(props) => props.theme.bgWhite};
  width: 400px;
  max-width: 90%;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalHeader = styled.div`
  padding: 1rem;
`;
export const ModalBody = styled.div`
  padding: 1rem;
`;
