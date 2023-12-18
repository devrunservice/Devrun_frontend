import React from 'react';
import * as St from './style';

const RenderDates = () => {
  const date = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <St.DatesSection>
      {date.map((item) => (
        <St.Date key={item}>{item}</St.Date>
      ))}
    </St.DatesSection>
  );
};

export default RenderDates;
