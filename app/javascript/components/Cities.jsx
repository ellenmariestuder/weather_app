import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Cities = ({ setData, data_c1, data_c2, data_c3, data_c4, data_c5 }) => {

  return (
    <div className="container">
      <div className="buttons-section">

        <div className="button-container">
          <Link to="/city">
            <button className="city-button" onClick={() => setData(data_c1)}>{data_c1[0].name}</button>
            <button className="more-button"> + </button>
          </Link>
        </div>

        <div className="button-container">
          <Link to="/city">
            <button className="city-button" onClick={() => setData(data_c2)}>{data_c2[0].name}</button>
            <button className="more-button"> + </button>
          </Link>
        </div>

        <div className="button-container">
          <Link to="/city">
            <button className="city-button" onClick={() => setData(data_c3)}>{data_c3[0].name}</button>
            <button className="more-button"> + </button>
          </Link>
        </div>

        <div className="button-container">
          <Link to="/city">
            <button className="city-button" onClick={() => setData(data_c4)}>{data_c4[0].name}</button>
            <button className="more-button"> + </button>
          </Link>
        </div>

        <div className="button-container">
          <Link to="/city">
            <button className="city-button" onClick={() => setData(data_c5)}>{data_c5[0].name}</button>
            <button className="more-button"> + </button>
          </Link>
        </div>

        {/* <div>latitude: {data_city1[0].lat}</div>
        <div>longitude: {data_city1[0].lon}</div> */}


      </div>
    </div>
  )
}

export default Cities;