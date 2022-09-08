import React from 'react'
import './style/formLogout.css'

const FormLogout = ({ isLogged, setIsLooged }) => {

  const handleClick = () => {
    setIsLooged()
    localStorage.removeItem('token')
  }

  return (
    <article className='form__container'>
      <div className='form__logout'>
        <i className="form-logout__icon fa-solid fa-user"></i>
        <h2 className='form-logout__username'>
          {`${isLogged?.firstName} ${isLogged?.lastName}`}
        </h2>
        <i className='bx bx-user-check form-logout__check'></i>
        <button onClick={handleClick} className='form-logout__btn'>Logout</button>
      </div>
    </article>
  )
}

export default FormLogout