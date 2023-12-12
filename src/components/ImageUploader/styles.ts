import {BasicInput} from 'components/CreateNewVideo/style';
import {styled} from 'styled-components';

export const UploadArea = styled.div<{$page: string}>`
  display: flex;
  align-items: center;
  margin: ${(props) => (props.$page === 'profileUpdate' ? '2rem' : '0')} 0;
`;

export const ImageWrap = styled.div`
  border-radius: 10px;
  background: #ddd;
  width: 50%;
  height: 250px;
  margin-right: 30px;
  border: 1px solid #ddd;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Imgbox = styled.div`
  align-items: center;
  width: 110px;
  height: 110px;
  margin-right: 2rem;
  border-radius: 50%;
  background: #ddd;
  overflow: hidden;
  img {
    width: inherit;
    height: inherit;
    object-fit: cover;
    padding: 0;
    max-width: 100%;
  }
`;

export const UploadVideoWrap = styled.div<{$page: string}>`
  width: ${(props) =>
    props.$page === 'profileUpdate' ? 'calc(100%-110px)' : '50%'};
  align-self: self-start;
  > div {
    display: flex;
    align-items: center;
  }
  label {
    box-sizing: border-box;
    padding: 12px;
    color: ${(props) => props.theme.mainColor};
    border: 1px solid ${(props) => props.theme.mainColor};
    border-radius: 5px;
    margin-left: 10px;
  }
`;

export const ShortInput = styled(BasicInput)`
  width: 25%;
  &::-webkit-inner-spin-button {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
  &::file-selector-button {
    display: none;
  }
  &#uploader {
    width: auto;
    flex: 1;
  }
`;

export const ImageBtn = styled.label`
  cursor: pointer;
`;

export const InputNotice = styled.p`
  display: flex;
  align-items: center;
  color: #555555;
  margin-top: 10px;
  font-size: 0.875rem;
  svg {
    margin-right: 5px;
  }
`;
