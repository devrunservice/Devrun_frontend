/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {addMonths, subMonths} from 'date-fns';
import {RenderHeader, RenderDates, RenderDays} from 'components';
import * as St from './style';

const Calender = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const onDateClick = (day: Date) => {
    setSelectedDate(day);
  };

  return (
    <St.CalenderSection>
      <RenderHeader
        currentMonth={currentMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <RenderDates />
      <RenderDays
        currentMonth={currentMonth}
        selectedDate={selectedDate}
        onDateClick={onDateClick}
      />
    </St.CalenderSection>
  );
};

export default Calender;
