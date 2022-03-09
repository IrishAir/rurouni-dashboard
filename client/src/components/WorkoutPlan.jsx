import React from 'react';
import workoutPlan from '../workoutPlan.json';

export default function WorkoutPlan() {

  return (
    <div className="profile-workout-plan">
      <h2>Программа тренировок</h2>
      <div className="profile-workout-plan__wrapper flex jcsb">

        {workoutPlan.map(item => 
          <div className="card">
            <h3 className='regular'>{item.day}</h3>
            <ul className="links">
              {item.exercises.map(exercise => 
                <li className='flex'><span>{exercise.order}.</span><p>{exercise.name}</p></li>
                )}
            </ul>
          </div>        
          )}

      </div>      
    </div>
  )
}