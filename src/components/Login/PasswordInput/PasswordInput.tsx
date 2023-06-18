import {useState} from 'react';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import * as St from './styles';
import {Input} from 'style/Common';

interface PasswordInputProps {
  placeholder: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({placeholder}) => {
  const [showPwd, setShowPwd] = useState<boolean>(false);

  const handleChange = () => {
    setShowPwd(!showPwd);
  };

  return (
    <St.PwdWrapper>
      <Input type={showPwd ? 'text' : 'password'} placeholder={placeholder} />
      <St.Icons onClick={handleChange}>
        {showPwd ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
      </St.Icons>
    </St.PwdWrapper>
  );
};

export default PasswordInput;
