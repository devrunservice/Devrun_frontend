import React from 'react';
import DOMPurify from 'dompurify';
import * as St from "./style";

interface ContentType {
  content: string;
}

const Content: React.FC<ContentType> = ({content}) => {
  return (
    <St.Con
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(content),
      }}
    />
  );
};

export default Content;
