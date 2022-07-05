import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import TitleInput from '../components/TitleInput';
import DateInput from '../components/DateInput';
import ExerciseInput from '../components/ExerciseInput';
import Modal from 'react-modal';

function FormUI() {
	const InitialStore = [
		[{ id: Number, weight: '' }],
		[{ id: Number, weight: '' }],
		[{ id: Number, weight: '' }],
		[{ id: Number, weight: '' }],
		[{ id: Number, weight: '' }],
		[{ id: Number, weight: '' }],
		[{ id: Number, weight: '' }],
		[{ id: Number, weight: '' }],
	];
	const today = format(new Date(), 'yyyy-MM-dd');
	const [startDate, setStartDate] = useState(new Date());
	const [toggleModal, setToggleModal] = useState(false);
	const [date, setDate] = useState(today);
	const [title, setTitle] = useState('');
	const [value, setValue] = useState(1);
	const [exercisesStore, setExercisesStore] = useState(InitialStore);

	// get all exercises
	const [exercises, setExercises] = useState([]);
	const getExercises = async () => {
		try {
			const response = await fetch("https://rurouni-dashboard.herokuapp.com/exercises");
			const jsonData = await response.json();
			setExercises(jsonData);
		} catch (err) {
			console.error(err.message);
		}
	};
	useEffect(() => {
		getExercises();
	}, []);

	const onSubmitForm = async (e) => {
		e.preventDefault();
		try {
			const body = {
				date,
				title,
				value,
				exercisesStore,
			};
			const response = await fetch('https://rurouni-dashboard.herokuapp.com/add_form', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			});
			console.log(body);
		} catch (err) {
			console.error(err.message);
		}
	};

	const resetForm = () => {
		setTitle('');
		setExercisesStore(InitialStore);
	};

	return (
		<div className='card form-container'>
			<form method='post' onSubmit={onSubmitForm}>
				<div className='addform-page__header flex'>
					<TitleInput
						title={title}
						setTitle={setTitle}
						name='title'
						onChange={setTitle}
					/>
					<DateInput
						date={date}
						name='date'
						onChange={setDate}
						startDate={startDate}
						setStartDate={setStartDate}
						setDate={setDate}
					/>
				</div>
				<div className='addform-page__body'>
					<h3>Упражнения</h3>
					<div className='form flex'>
						<div className='form__col'>
							<ExerciseInput
								options={exercises}
								store={exercisesStore}
								index={0}
								handleChange={setExercisesStore}
							/>
							<ExerciseInput
								options={exercises}
								store={exercisesStore}
								index={1}
								handleChange={setExercisesStore}
							/>
							<ExerciseInput
								options={exercises}
								store={exercisesStore}
								index={2}
								handleChange={setExercisesStore}
							/>
							<ExerciseInput
								options={exercises}
								store={exercisesStore}
								index={3}
								handleChange={setExercisesStore}
							/>
						</div>
						<div className='form__col'>
							<ExerciseInput
								options={exercises}
								store={exercisesStore}
								index={4}
								handleChange={setExercisesStore}
							/>
							<ExerciseInput
								options={exercises}
								store={exercisesStore}
								index={5}
								handleChange={setExercisesStore}
							/>
							<ExerciseInput
								options={exercises}
								store={exercisesStore}
								index={6}
								handleChange={setExercisesStore}
							/>
							<ExerciseInput
								options={exercises}
								store={exercisesStore}
								index={7}
								handleChange={setExercisesStore}
							/>
						</div>
					</div>
					<div className='btn-block flex'>
						<button onClick={() => setToggleModal(true)}>Добавить в дневник тренировок </button>
						<button className='btn-alt' onClick={() => {
								setTitle('Кардио');
								setValue(2);
								setDate(today);
								setToggleModal(true);}}
                >Сегодня было кардио 
            </button>
					</div>
				</div>
				<Modal
					isOpen={toggleModal}
					style={{
						overlay: {
							backgroundColor: 'rgba(000, 000, 000, 0.4)',
						},
						content: {
							backgroundColor: 'rgba(000, 000, 000, 0.0)',
							border: 'none',
						},
					}}>
					<div className='modal-container flex'>
						<div className='modal flex cols'>
							<div className='modal__img modal__img--success'></div>
							<p className='semi'>Тренировка успешно добавлена!</p>
							<button
								onClick={() => {
									setToggleModal(false);
									resetForm();}}
							>Закрыть
							</button>
						</div>
					</div>
				</Modal>
			</form>
		</div>
	);
}

export default FormUI;
