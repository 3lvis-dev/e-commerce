import React from 'react'

const InputSearch = ({ setInputSearch }) => {

  const handleChange = (e) => {
    setInputSearch(e.target.value.trim())
  }

  return (
    <div className='conteiner__input-search'>
      <input className='input_search' onChange={handleChange} type="text" />
    </div>
  )
}

export default InputSearch