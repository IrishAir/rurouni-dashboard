import React from 'react';
import workoutPlan from '../workoutPlan.json';
import { Link } from 'react-router-dom';

export default function WorkoutPlan() {

  return (
    <div className="profile-workout-plan">
      <h2>Программа тренировок</h2>
      <div className="profile-workout-plan__item  flex jcsb">
        {workoutPlan.map(item => 
          <div className="card">
            <h3 className='regular'>{item.day}</h3>
            <ul className="links">
              {item.exercises.map(exercise => 
                <Link className="flex link" key={exercise.id} to={`/exercises/${exercise.id}`} state= {exercise.id}>
                  <span>{exercise.order}.</span>{exercise.name}
                </Link>      
                )}
            </ul>
          </div>  
          )}
      </div>      
    </div>
  );
}