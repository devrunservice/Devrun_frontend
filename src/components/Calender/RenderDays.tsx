/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  addDays,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  parse,
} from 'date-fns';
import {CalenderDateType} from 'types';
import {FlexColumn, FlexRow} from 'style/Common';
import * as St from './styles';

const RenderDays: React.FC<CalenderDateType> = ({
  currentMonth,
  selectedDate,
  onDateClick,
}) => {
  const monthStart = startOfMonth(currentMonth); // 오늘이 속한 달의 시작일
  const monthEnd = endOfMonth(monthStart); // 오늘이 속한 달의 마지막일
  const startDate = startOfWeek(monthStart); // monthStart가 속한 주의 시작일
  const endDate = endOfWeek(monthEnd); // monthEnd가 속한 주의 마지막일

  const rows = [];
  let days = [];
  let day = startDate;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const isDisabled = !isSameMonth(day, monthStart);
      const isSelected = selectedDate && isSameDay(day, selectedDate);
      const isNotValid = format(currentMonth, 'M') !== format(day, 'M');

      const formattedDate = format(day, 'd');
      const cloneDay = day;
      days.push(
        <St.Cell
          className={`${
            isDisabled
              ? 'disabled'
              : isSelected
              ? 'selected'
              : isNotValid
              ? 'notValid'
              : 'valid'
          }`}
          onClick={() => onDateClick(cloneDay)}
        >
          <span className={isNotValid ? 'notValid' : ''}>{formattedDate}</span>
        </St.Cell>
      );
      day = addDays(day, 1);
    }
    rows.push(<FlexRow>{days}</FlexRow>);
    days = [];
  }

  return <FlexColumn>{rows}</FlexColumn>;
};

export default RenderDays;
