import React from 'react';
import StatCard from './StatCard';
import personalRecord from '../img/personal-record.png';
import currentWeight from '../img/current-weight.png';
import volume from '../img/volume.png';
import quantity from '../img/quantity.png';

export default function ExerciseStats(props) {
  return (
    <div className='flex jcsb'>
      <StatCard 
        src={personalRecord} 
        alt='Личный рекорд' 
        lable='Личный рекорд'
        title={`${props.personalRecord} ${props.units}`}
      />
      <StatCard 
        src={currentWeight} 
        alt='Текущий вес' 
        lable='Текущий вес'
        title={`${props.currentWeight} ${props.units}`}
      />
      <StatCard 
        src={volume} 
        alt='Последняя тренировка' 
        lable='Последняя тренировка'
        title={`${props.lastTrained}`}
      />
      <StatCard 
        src={quantity} 
        alt='Количество тренировок' 
        lable='Количество тренировок'
        title={`${props.totalTrained}`}
      />
    </div>
  )
}