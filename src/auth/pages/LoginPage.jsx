import React, { useContext, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


export const LoginPage = () => {

  const [username, setUsername] = useState('');

  const handleChange = (e) => {
    e.preventDefault();

    setUsername(e.target.value)
  }

  const navigate = useNavigate();
  
  const {login} = useContext(AuthContext)

  const handleLogIn = (e) => {

    e.preventDefault();

    if (!username.length){
      alert('Please enter a username');
      return
    }

    login(username);

    navigate('/', {
      replace: true,
    })
  }

  return (
    <div
      className='container mt-5'
    >
      <h1>Heroes App</h1>
      <div class="alert alert-primary d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Danger:">
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
          This is a simulation of a LogIn
        </div>
      </div>
      <hr />

      <form onSubmit={handleLogIn}>
        
        <div class="form-group mt-3 mb-3">
          <label for="name">Username</label>
          <input value={username} onChange={handleChange} type="text" class="form-control" id="name" placeholder="Enter your username here" />
        </div>

        <button
          type='submit'
          className='btn btn-primary'
        >
          LogIn
        </button>
      </form>

    </div>
  )
}
