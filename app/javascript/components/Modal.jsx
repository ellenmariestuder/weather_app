import React from 'react'

const Modal = ({ details, show, setShow }) => {

  const content = show && (
    <div className="modal">
      <div className="modal-title">{details.name}</div>
      <div className="conditions">{details.weather[0].main} </div>
      <button className="close-modal" onClick={() => setShow(false)}>x</button>
      <h1>{Math.round(details.main.temp)}°F </h1>
      <div className="feels-like">Feels like {Math.round(details.main.feels_like)}° </div>
      <div className="temp-hi">Hi: {Math.round(details.main.temp_max)}° </div>
      <div className="temp-lo">Lo: {Math.round(details.main.temp_min)}° </div>
    </div>

  )

  return content
}

export default Modal;