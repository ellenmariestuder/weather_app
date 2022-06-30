import React from 'react'

const Cities = ({ handleClick, data_c1, data_c2, data_c3, data_c4, data_c5 }) => {

  return (
    <div className="cities-container">
      <div className="buttons-section">

        <div className="button-container" onClick={() => handleClick(data_c1)}>
          <button className="city-button">{data_c1.name}</button>
          <button className="more-button"> Currently: {Math.round(data_c1.main.temp)}°F </button>
          <button className="plus-button"> + </button>
        </div>

        <div className="button-container" onClick={() => handleClick(data_c2)}>
          <button className="city-button">{data_c2.name}</button>
          <button className="more-button"> Currently: {Math.round(data_c2.main.temp)}°F </button>
          <button className="plus-button"> + </button>
        </div>

        <div className="button-container" onClick={() => handleClick(data_c3)}>
          <button className="city-button">{data_c3.name}</button>
          <button className="more-button"> Currently: {Math.round(data_c3.main.temp)}°F </button>
          <button className="plus-button"> + </button>
        </div>

        <div className="button-container" onClick={() => handleClick(data_c4)}>
          <button className="city-button">{data_c4.name}</button>
          <button className="more-button"> Currently: {Math.round(data_c4.main.temp)}°F </button>
          <button className="plus-button"> + </button>
        </div>

        <div className="button-container" onClick={() => handleClick(data_c5)}>
          <button className="city-button">{data_c5.name}</button>
          <button className="more-button"> Currently: {Math.round(data_c5.main.temp)}°F </button>
          <button className="plus-button"> + </button>
        </div>

      </div>
    </div>
  )
}

export default Cities;