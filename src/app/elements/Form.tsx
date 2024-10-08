import React from 'react'

const Form = () => {
  return (
      <div className='form-element'>
      <h2 className="head-text">URL Shortener</h2>
      <input className='url-input' type="url" name="long-url" id="long-url" required placeholder='Enter a long URL to shorten' />
    </div>
  )
}

export default Form