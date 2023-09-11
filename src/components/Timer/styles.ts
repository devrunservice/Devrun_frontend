import {styled} from 'styled-components';

export const Timer = styled.div<{page: string}>`
  position: absolute;
  top: 0.7rem;
  right: ${(props) => {
    switch (props.page) {
      case 'signup':
        return '8.7rem';
      case 'findaccount':
        return '7rem';
      case 'profileUpdate':
        return '10.5rem';
      default:
        return '7rem'; // 기본값 설정
    }
  }};
`;
