import React from 'react';
import DatePicker from "react-datepicker";
import {format} from 'date-fns';
import { ru } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css'

export default function DateInput({ date, startDate, handleChange, handleStartDate }) {
	return (
		<div>
			<h3>Дата проведения</h3>
			<div className='input date-input'>
				<DatePicker
					locale={ru}
					selected={startDate}
					dateFormat='d MMMM yyyy'
					onChange={(date) => {
						handleChange(format(date, 'yyyy-MM-dd'));
						handleStartDate(date);
					}}
					onFocus={(date) => {
						handleChange(format(date, 'yyyy-MM-dd'));
						handleStartDate(date);
					}}
				/>
				<span className='date-icon'></span>
			</div>
		</div>
	);
}