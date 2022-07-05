import React from 'react';
import { Link } from 'react-router-dom';
import ExerciseCard from './ExerciseCard';

export default function SearchArea({ result, exercises }) {
  return (
    <div className="exercises-result-area flex jcsp">      
      {exercises.filter((exercise) => {
        if (result === '' ) {
          return exercise;
        } else if (exercise.name.toLowerCase().includes(result.toLowerCase())){
          return exercise;
        }
      }).map(exercise => (
        <Link key={exercise.id} to= {`/exercises/${exercise.id}`} state= {exercise.id} style={{ textDecoration: 'none' }}>
          <ExerciseCard 
            name = {exercise.name}
            primary = {exercise.primary_tag}
            secondary = {exercise.secondary_tag}
            />         
        </Link>
      ))}
    </div>
  )
}
