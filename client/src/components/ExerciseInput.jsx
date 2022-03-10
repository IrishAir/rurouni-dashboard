import React from 'react';
import Select from 'react-select';

export default function ExerciseInput(props) {

  return (
    <div className='form__item'>            
      <Select 
        options={props.options}  
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option.id}
        onChange={e => {props.setId(e.id)}}
        />
      <div className='weight-input'>
      <label><p className='description'>Введите вес</p></label>  
      <input 
        type="number" 
        className='input'
        value={props.value}
        onChange={ e => props.setWeight(e.target.value)}/>
      </div>
    </div>
  )
}
