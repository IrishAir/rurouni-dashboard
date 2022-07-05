import React from 'react';

export default function TitleInput({ title, handleChange }) {
  return (
    <div>
      <h3>Название тренировкии</h3>
      <input 
        type="text" 
        className='input'
        value={title} 
        onChange={ e => handleChange(e.target.value)}/>
    </div>
  )
}
