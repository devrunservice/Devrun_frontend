import React, { useState } from 'react';
import { CreateNewVideo,CreateVideoTwo } from 'components';

export interface ButtonProps {
  ChangePage: React.ButtonHTMLAttributes<HTMLButtonElement>
  onClick: () => void;
}

const CreateVideo = () => {
  const [createPage, setCreatePage] = useState<number>(1)
  const ChangePage = () => {
    setCreatePage(2)
  }
  return (
    <div>
      {
        createPage === 1 ? <CreateNewVideo ChangePage={ChangePage}/> : <CreateVideoTwo/>
      }
    </div>
  );
};

export default CreateVideo;