import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Modal from 'react-modal';
import ExerciseInput from '../components/ExerciseInput';
import TitleInput from '../components/TitleInput';
import DateInput from '../components/DateInput';

export default function AddForm() {

  // hook variables
  const today = format(new Date(),"yyyy-MM-dd");
  const [date, setDate] = useState(today);
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [value, setValue] = useState(1);
  const [toggleModal, setToggleModal] = useState(false);
    
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
      const response = await fetch("/exercises");
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
                     exercises: [
                       [firstId, firstWeight], 
                       [secondId, secondWeight],
                       [thirdId, thirdWeight],
                       [fourthId, fourthWeight],
                       [fifthId, fifthWeight],
                       [sixthId, sixthWeight],
                       [seventhId, seventhWeight],
                       [eigthId, eigthWeight],]};
      const response = await fetch('http://localhost:5000/add_form', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });
    } catch (err) {
      console.error(err.message);    
    }
  };

  const resetForm = () => {
    setTitle('');
    setFirstWeight('');
    setSecondWeight('');
    setThirdWeight('');
    setFourthWeight('');
    setFifthWeight('');
    setSixthWeight('');
    setSeventhWeight('');
    setEigthWeight('');
  };

  return (
  <div className='addform-page'>
    <h1>Записать тренировку</h1>
    <div className="card form-container">
      <form method="post" onSubmit={onSubmitForm}>
        <div className='addform-page__header flex'>
            <TitleInput title={title} setTitle={setTitle} />
            <DateInput date={date} startDate={startDate} setStartDate={setStartDate} setDate={setDate}/>
        </div>
        <div className="addform-page__body">
          <h3>Упражнения</h3>
          <div className='form flex'> 
            <div className="form__col">
              <ExerciseInput options={exercises} setId={setFirstId} setWeight={setFirstWeight} value={firstWeight} />
              <ExerciseInput options={exercises} setId={setSecondId} setWeight={setSecondWeight} value={secondWeight} />
              <ExerciseInput options={exercises} setId={setThirdId} setWeight={setThirdWeight} value={thirdWeight} />
              <ExerciseInput options={exercises} setId={setFourthId} setWeight={setFourthWeight} value={fourthWeight} />
            </div>
            <div className="form__col">
              <ExerciseInput options={exercises} setId={setFifthId} setWeight={setFifthWeight} value={fifthWeight} />
              <ExerciseInput options={exercises} setId={setSixthId} setWeight={setSixthWeight} value={sixthWeight} />
              <ExerciseInput options={exercises} setId={setSeventhId} setWeight={setSeventhWeight} value={seventhWeight} />
              <ExerciseInput options={exercises} setId={setEigthId} setWeight={setEigthWeight} value={eigthWeight} />
            </div>
          </div>
          <div className="btn-block flex">
          <button onClick={() => setToggleModal(true)}>Добавить в дневник тренировок</button>
          <button 
            className='btn-alt' onClick={() => {setTitle("Кардио"); setValue(2); setDate(today); setToggleModal(true);}}>Сегодня было кардио</button>
          </div>
        </div>
        <Modal 
          isOpen={toggleModal}
          style={{
            overlay: {
              backgroundColor: 'rgba(000, 000, 000, 0.4)'
            },
            content: {
              backgroundColor: 'rgba(000, 000, 000, 0.0)',
              border: 'none'
            }}}>
          <div className="modal-container flex">
            <div className='modal flex cols'>
              <div className='modal__img modal__img--success'></div>
              <p className='semi'>Тренировка успешно добавлена!</p>
              <button onClick={() => {setToggleModal(false); resetForm()}}>Закрыть</button>
            </div>
          </div>
        </Modal>
      </form>
    </div>
  </div>
)}
