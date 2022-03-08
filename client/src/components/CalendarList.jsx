import React from 'react'
import {format, parseISO} from 'date-fns';
import { ru } from 'date-fns/locale';

export default function CalendarList(props) {
  return (
    <div className="calendar-block flex">
      <div className="workout-list">
        {props.workoutList.sort((a, b) => a.day > b.day  ? -1 : 1).map(item =>
            <div className='workout-list__item flex jcsb'>
              <div className='workout-list__col'>
                <p className='light workout-list__date'>{format(parseISO(item.day), "d MMMM, EEEE", { locale: ru })}</p>
              </div>
              <div className='workout-list__col'>
                <p className='light workout-list__name'>{item.title}</p>
              </div>
            </div>
            )}
      </div>
    </div>
  )
}