import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ExerciseCard from '../components/ExerciseCard';
import SearchBar from '../components/SearchBar';

export default function Exercises() {

  const [exercises, setExercises] = useState([]);
  
  const getExercises = async () => {
    try {
      const response = await fetch("http://localhost:5000/exercises");
      const jsonData = await response.json();

      setExercises(jsonData);
    } catch (err) {
      console.error(err.message);     
    }
  }

  useEffect(() => {
    getExercises();
  }, []);

  const exercisesCounter = exercises.length; 

  return (
    <div className="exercises-page">
      <h1>Искать упражнение</h1>
      <div className="exercises-page__block flex cols">
        <div className="exercises-search-area">
          <h3>Всего доступно упражнений  — {exercisesCounter}</h3>
          <div className="exercises-search-area__search">
            <SearchBar />
          </div>
        </div>
      </div>     
      <div className="exercises-result-area flex jcsp">      
        {exercises.map(exercise => (
          <Link key={exercise.id} to= {`/exercises/${exercise.id}`} state= {exercise.id} style={{ textDecoration: 'none' }}>
            <ExerciseCard 
              name = {exercise.name}
              primary = {exercise.primary_tag}
              secondary = {exercise.secondary_tag}
            />         
          </Link>
        ))}
      </div>
    </div>
  )
}
