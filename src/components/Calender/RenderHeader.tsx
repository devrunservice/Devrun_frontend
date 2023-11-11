import React from 'react';
import {format} from 'date-fns';
import {Arrow} from 'asset';
import {CalenderHeaderType} from 'types';
import * as St from './styles';

const RenderHeader: React.FC<CalenderHeaderType> = ({
  currentMonth,
  prevMonth,
  nextMonth,
}) => {
  return (
    <St.HeaderSection>
      <div>
        <St.Month>{format(currentMonth, 'M')}월</St.Month>
        <St.Year>{format(currentMonth, 'yyyy')}</St.Year>
      </div>
      <St.NextButton>
        <St.ArrowButton $direction="left" onClick={prevMonth}>
          <Arrow />
        </St.ArrowButton>
        <St.ArrowButton $direction="right" onClick={nextMonth}>
          <Arrow />
        </St.ArrowButton>
      </St.NextButton>
    </St.HeaderSection>
  );
};

export default RenderHeader;
