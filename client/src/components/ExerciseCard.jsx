import React from 'react';
import primary from '../img/battery-full.svg';
import secondary from '../img/battery-half.svg';

export default function ExerciseCard(prop) {
  return (
    <div className="exercises-page__item card flex cols">
      <h3 className="regular">{prop.name}</h3>
      <div className="tag-area flex">
        <div className='tag-area__item flex'>
          <img src={primary} alt={prop.primary} />
          <p className="description">{prop.primary}</p>
        </div>
        <div className='tag-area__item flex'>
          <img src={secondary} alt={prop.secondary} />
          <p className="description">{prop.secondary}</p>
        </div>
      </div>
    </div>
  )
}