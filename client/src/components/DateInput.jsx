import React from 'react';
import DatePicker from "react-datepicker";
import {format} from 'date-fns';
import { ru } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css'

export default function DateInput(props) {
  return (
  <div>
    <h3>Дата проведения</h3>
    <div className='input date-input'>
      <DatePicker
        locale={ru}
        selected={props.startDate}
        dateFormat="d MMMM yyyy"
        onChange={(date) => {props.setDate(format(date, "yyyy-MM-dd")); props.setStartDate(date)}}
        onFocus={(date) => {props.setDate(format(date, "yyyy-MM-dd")); props.setStartDate(date)}}/>
      <span className="date-icon"></span>
    </div>
  </div>
  )
}