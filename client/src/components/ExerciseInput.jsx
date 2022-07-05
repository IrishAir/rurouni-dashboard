import React from 'react';
import Select from 'react-select';

export default function ExerciseInput({ options, store, index, handleChange }) {
	return (
		<div className='form__item'>
			<Select
				options={options}
				getOptionLabel={(option) => option.name}
				getOptionValue={(option) => option.id}
				onChange={(e) => { 
          handleChange([...store], (store[index] = {...store[index], id: e.id}));
				}}
			/>
			<div className='weight-input'>
				<label>
					<p className='description'>Введите вес</p>
				</label>
				<input
					type='number'
					className='input'
				  onChange={(e) => { 
            handleChange([...store], (store[index] = {...store[index], weight: e.target.value}));
				  }}
				/>
			</div>
		</div>
	);
}
