import React from 'react';
import StatCard from './StatCard';
import bicep from '../img/bicep.png';
import cardio from '../img/cardio.png';
import progress from '../img/progress.png';
import lastVisit from '../img/last-visit.png';

export default function ProfileStats(props) {
  
  const cardioCount = props.data.filter(function(item) {
    return item.value > 1;
  });

  const weightCount = props.data.filter(function(item) {
    return item.value <= 1;
  });
  
  const workoutsCounter = props.data.length;
  const lastWorkoutDate = props.data?.sort((a, b) => a.day < b.day  ? -1 : 1).at(-1)?.day;
  const progressCounter = workoutsCounter / 313 * 100; //52 sundays

  return (
    <div className="profile-stats jcsb flex">
      <StatCard 
        src={bicep} 
        alt='Силовых тренировок' 
        lable='Силовых тренировок'
        title={weightCount.length}
      />
      <StatCard 
        src={cardio} 
        alt='Кардио тренировок' 
        lable='Кардио тренировок'
        title={cardioCount.length}
      />
      <StatCard 
        src={progress} 
        alt='Общий прогресс' 
        lable='Общий прогресс'
        title={`${Math.ceil(progressCounter)} %`}
      />
      <StatCard 
        src={lastVisit} 
        alt='Последнее посещение' 
        lable='Последнее посещение'
        title={lastWorkoutDate}
      />
    </div>
  )
}