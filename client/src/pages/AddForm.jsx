import React, { useState, useEffect } from 'react';
import Select from 'react-select'
import {format} from 'date-fns';

export default function AddForm() {
  // hook variables
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(1);
  const today = format(new Date(),"yyyy-MM-dd");
    
  // exercises hooks
  const [firstId, setFirstId] = useState("");
  const [firstWeight, setFirstWeight] = useState("");

  const [secondId, setSecondId] = useState("");
  const [secondWeight, setSecondWeight] = useState("");

  const [thirdId, setThirdId] = useState("");
  const [thirdWeight, setThirdWeight] = useState("");

  const [fourthId, setFourthId] = useState("");
  const [fourthWeight, setFourthWeight] = useState("");

  const [fifthId, setFifthId] = useState("");
  const [fifthWeight, setFifthWeight] = useState("");

  const [sixthId, setSixthId] = useState("");
  const [sixthWeight, setSixthWeight] = useState("");

  const [seventhId, setSeventhId] = useState("");
  const [seventhWeight, setSeventhWeight] = useState("");

  const [eigthId, setEigthId] = useState("");
  const [eigthWeight, setEigthWeight] = useState("");
  
  // get all exercises
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

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { date, title, value, 
                    firstId, firstWeight,
                    secondId, secondWeight,
                    thirdId, thirdWeight,
                    fourthId, fourthWeight,
                    fifthId, fifthWeight,
                    sixthId, sixthWeight,
                    seventhId, seventhWeight,
                    eigthId, eigthWeight
                  };
      const response = await fetch('http://localhost:5000/add_form', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });
      console.log(response);
    } catch (err) {
      console.error(err.message);    
    }
  }

  return <div className='addform-page'>
    <h1>Записать тренировку</h1>
    <div className="card form-container">
      <form method="post" onSubmit={onSubmitForm}>
        <div className='addform-page__header flex'>
          <div>
          <h3>Название тренировкии</h3>
          <input 
            type="text" 
            className='input'
            value={title} 
            onChange={ e => setTitle(e.target.value)}/>
          </div>
          <div>
          <h3>Дата проведения</h3>
          <input 
            type="text" 
            className='input'
            placeholder={today}
            value={date} 
            onChange={ e => setDate(e.target.value)}/>
          </div>
        </div>
        <div className="addform-page__body">
          <h3>Упражнения</h3>
          <div className='form flex'> 
            <div className="form__col">
              <div className='form__item'>            
                <Select 
                  options={exercises}  
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option.id}
                  onChange={e => {setFirstId(e.id)}}
                  />
                <input 
                  type="number" 
                  className='input'
                  value={firstWeight}
                  onChange={ e => setFirstWeight(e.target.value)}/>
              </div>
              <div className='form__item'>            
                <Select 
                  options={exercises}  
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option.id}
                  onChange={e => {setSecondId(e.id)}}
                  />
                <input 
                  type="number" 
                  className='input'
                  value={secondWeight}
                  onChange={ e => setSecondWeight(e.target.value)}/>
              </div>
              <div className='form__item'>            
                <Select 
                  options={exercises}  
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option.id}
                  onChange={e => {setThirdId(e.id)}}
                  />
                <input 
                  type="number" 
                  className='input'
                  value={thirdWeight}
                  onChange={ e => setThirdWeight(e.target.value)}/>
              </div>
              <div className='form__item'>            
                <Select 
                  options={exercises}  
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option.id}
                  onChange={e => {setFourthId(e.id)}}
                  />
                <input 
                  type="number" 
                  className='input'
                  value={fourthWeight}
                  onChange={ e => setFourthWeight(e.target.value)}/>
              </div>
            </div>
            <div className="form__col">
              <div className='form__item'>            
                <Select 
                  options={exercises}  
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option.id}
                  onChange={e => {setFifthId(e.id)}}
                  />
                <input 
                  type="number" 
                  className='input'
                  value={fifthWeight}
                  onChange={ e => setFifthWeight(e.target.value)}/>
              </div>
              <div className='form__item'>            
                <Select 
                  options={exercises}  
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option.id}
                  onChange={e => {setSixthId(e.id)}}
                  />
                <input 
                  type="number" 
                  className='input'
                  value={sixthWeight}
                  onChange={ e => setSixthWeight(e.target.value)}/>
              </div>
              <div className='form__item'>            
                <Select 
                  options={exercises}  
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option.id}
                  onChange={e => {setSeventhId(e.id)}}
                  />
                <input 
                  type="number" 
                  className='input'
                  value={seventhWeight}
                  onChange={ e => setSeventhWeight(e.target.value)}/>
              </div>
              <div className='form__item'>            
                <Select 
                  options={exercises}  
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option.id}
                  onChange={e => {setEigthId(e.id)}}
                  />
                <input 
                  type="number" 
                  className='input'
                  value={eigthWeight}
                  onChange={ e => setEigthWeight(e.target.value)}/>
              </div>
            </div>
          </div>
          <div className="btn-block flex">
          <button>Добавить в дневник тренировок</button>
          <button className='btn-alt' onClick={() => {setTitle("Кардио"); setValue(2); setDate(today)}}>Сегодня было кардио</button>
          </div>
        </div>
      </form>
    </div>
  </div>;
}
