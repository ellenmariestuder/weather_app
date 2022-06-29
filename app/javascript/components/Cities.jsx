import React, { useState } from 'react'

const Cities = ({ handleClick, data_c1, data_c2, data_c3, data_c4, data_c5, data_c1_w, data_c2_w, data_c3_w, data_c4_w, data_c5_w }) => {

  return (
    <div className="container">
      <div className="buttons-section">

        <div className="button-container" onClick={() => handleClick(data_c1, data_c1_w)}>
          <button className="city-button">{data_c1[0].name}</button>
          <button className="more-button"> Currently: {Math.round(data_c1_w.main.temp)}°F </button>
          <button className="more-button"> + </button>
        </div>

        <div className="button-container" onClick={() => handleClick(data_c2, data_c2_w)}>
          <button className="city-button">{data_c2[0].name}</button>
          <button className="more-button"> Currently: {Math.round(data_c2_w.main.temp)}°F </button>
          <button className="more-button"> + </button>
        </div>

        <div className="button-container" onClick={() => handleClick(data_c3, data_c3_w)}>
          <button className="city-button">{data_c3[0].name}</button>
          <button className="more-button"> Currently: {Math.round(data_c3_w.main.temp)}°F </button>
          <button className="more-button"> + </button>
        </div>

        <div className="button-container" onClick={() => handleClick(data_c4, data_c4_w)}>
          <button className="city-button">{data_c4[0].name}</button>
          <button className="more-button"> Currently: {Math.round(data_c4_w.main.temp)}°F </button>
          <button className="more-button"> + </button>
        </div>

        <div className="button-container" onClick={() => handleClick(data_c5, data_c5_w)}>
          <button className="city-button">{data_c5[0].name}</button>
          <button className="more-button"> Currently: {Math.round(data_c5_w.main.temp)}°F </button>
          <button className="more-button"> + </button>
        </div>

        {/* <div>latitude: {data_city1[0].lat}</div>
        <div>longitude: {data_city1[0].lon}</div> */}


      </div>
    </div>
  )
}

export default Cities;