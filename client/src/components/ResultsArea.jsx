import React from 'react';
import { Link } from 'react-router-dom';
import ExerciseCard from './ExerciseCard';

export default function SearchArea(props) {
  return (
    <div className="exercises-result-area flex jcsp">      
      {props.exercises.filter((exercise) => {
        if (props.result === '' ) {
          return exercise;
        } else if (exercise.name.toLowerCase().includes(props.result.toLowerCase())){
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
