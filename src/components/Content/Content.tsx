import React from 'react';
import DOMPurify from 'dompurify';

interface ContentType {
  content: string;
}

const Content: React.FC<ContentType> = ({content}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(content),
      }}
    />
  );
};

export default Content;
