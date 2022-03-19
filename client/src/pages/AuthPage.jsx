import React, { useState }  from 'react';
import Modal from 'react-modal';

export default function Auth({ setAuth }) {
  const [toggleModal, setToggleModal] = useState(false); 
  const [passwordInputs, setPasswordInputs] = useState({password: ""});
  const [inputValue, setInputValue] = useState("");

  const { password } = passwordInputs;

  const onChange = e => setPasswordInputs({ ...passwordInputs, [e.target.name]: e.target.value});

  const VerifyPassword = async (e) => {
    e.preventDefault();
    try {
      const body = { password: password }
      const response = await fetch("https://rurouni-dashboard.herokuapp.com/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });
      const parseRes = await response.json();
      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
      } else {
        setAuth(false);
      }
    } catch (err) {
        console.error(err.message);
    }
  };

  const resetForm = () => {
    setInputValue('');
  };

  return (
    <div className='auth-container flex cols'>
      <h2>Код для авторизации</h2>
      <div className="auth-body card">
        <form method="post" onSubmit={VerifyPassword}>
          <div className="flex cols">
            <input
              type='password'
              maxlength={6}
              name='password'
              value={inputValue}
              className='password'
              onChange={(e) => {onChange(e); setInputValue(e.target.value)}}
            />
            <button onClick={() => setToggleModal(true)}>Отправить</button>
          </div>
        </form>
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
          <div className='modal-container flex'>
            <div className="modal flex cols">
              <div className="modal__img modal__img--failure"></div>
              <p className='semi'>Введен неверный код авторизации!</p>
              <button onClick={() => {setToggleModal(false); resetForm()}}>Закрыть</button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  )
}