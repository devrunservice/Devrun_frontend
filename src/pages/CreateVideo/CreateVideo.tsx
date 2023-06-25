import React, { useState } from 'react';
import CreateNewVideo from 'components/CreateNewVideo/CreateNewVideo';
import CreateVideoTwo from 'components/CreateVideoTwo/CreateVideoTwo';

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