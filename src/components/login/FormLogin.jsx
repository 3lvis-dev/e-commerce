import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import './style/formLogin.css'

const FormLogin = ({ setIsLooged }) => {
  const {register, handleSubmit, reset} = useForm()

  const submit = (data) => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
    axios.post(URL, data)
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.data.token)
        setIsLooged(res.data.data.user)
      })
      .catch(err => console.log(err))

    reset({
      email: '',
      password: ''
    })
  }

  return (
    <div className='form__container'>
      <form className='login__form' onSubmit={handleSubmit(submit)} >
        <h2 className='form__title'>Welcome! Enter your email and password to continue</h2>

        <div className='form'>
          <div className='form__grupo'>
            <i className='bx bxs-envelope'></i>
            <input {...register('email')} type="email" id="email" required /><span className='barra'></span>
            <label className='login__label' htmlFor="email">email</label>
          </div>

          <div className='form__grupo'>
            <i className='bx bxs-lock-alt'></i>
            <input {...register('password')} type="password" id="password" required /><span className='barra'></span>
            <label className='login__label' htmlFor="password">Password</label>
          </div>
        </div>

        <button className='login__btn'>Login</button>
      </form> 
    </div>
  )
}

export default FormLogin