import React from 'react';
import { ResponsiveCalendar } from '@nivo/calendar'
import { BasicTooltip } from '@nivo/tooltip';
import {format, parseISO} from 'date-fns';
import { ru } from 'date-fns/locale';

export default function ProfileDashboard(props) {

  const theme = {
    fontSize: 12,
    fontFamily: 'Inter',
    fontWeight: 300,
    textColor: '#64748B',  
  };

  const russianMonths = [
        'Янв',
        'Фев',
        'Март',
        'Апр',
        'Май',
        'Июнь',
        'Июль',
        'Авг',
        'Сен',
        'Окт',
        'Ноя',
        'Дек',
    ];


    const CalTooltip = (props) => {
      return (
          <BasicTooltip
              id={props.data.title}
              value={format(parseISO(props.day), "d MMM", { locale: ru })}
              color={props.color}
              enableChip
          />
      );
  };

  return (
    <ResponsiveCalendar
    data={props.data}
    from="2022-01-01"
    to="2022-12-31"
    emptyColor=  '#F1F5F9' //"rgba(0,0,0,0.0)"
    pixelRatio={20}
    colors={[ '#4ADE80', '#4ADE80', '#4ADE80', '#a5efc0' ]}
    margin={{ bottom: 23, left: 10 }}
    monthBorderColor="rgba(0,0,0,0.0)"
    monthLegendPosition='after'
    monthLegendOffset={18}
    monthSpacing={35}
    dayBorderWidth={0}
    dayBorderColor="rgba(0,0,0,0.0)"
    theme={theme}
    monthLegend={(year, month) => russianMonths[month]}
    yearLegend={() => ''}
    tooltip={CalTooltip}   
/>   
  )
}
