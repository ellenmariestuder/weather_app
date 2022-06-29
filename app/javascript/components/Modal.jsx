import React, { useState } from 'react'

const Modal = ({ data, details, show, setShow }) => {

  const content = show && (
    <div className="modal">
      <h3>Here's the weather in {data[0].name}: </h3>
      <div>{details.main.temp} </div>
      <button onClick={() => setShow(false)}> X </button>
    </div>

  )

  return content
}

export default Modal;