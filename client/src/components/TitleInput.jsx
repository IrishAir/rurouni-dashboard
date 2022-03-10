import React from 'react';

export default function TitleInput(props) {
  return (
    <div>
      <h3>Название тренировкии</h3>
      <input 
        type="text" 
        className='input'
        value={props.title} 
        onChange={ e => props.setTitle(e.target.value)}/>
    </div>
  )
}
