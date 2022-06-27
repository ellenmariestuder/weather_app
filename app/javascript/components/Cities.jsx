import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Cities = ({ data }) => {
  // const Cities = () => {
  // const [count, setCount] = useState(0);
  // const increase = () => setCount(count + 1);
  // const decrease = () => setCount(count - 1);

  return (
    <div className="container">
      <div className="buttons-section">

        <div className="button-container">
          <Link to="/city">
            <button className="city-button">City 1 ({data[0].name})</button>
            <button className="more-button"> + </button>
          </Link>
        </div>

        <div className="button-container">
          <Link to="/city">
            <button className="city-button">City 2 ({data[0].name})</button>
            <button className="more-button"> + </button>
          </Link>
        </div>

        <div className="button-container">
          <Link to="/city">
            <button className="city-button">City 3 ({data[0].name})</button>
            <button className="more-button"> + </button>
          </Link>
        </div>

        <div className="button-container">
          <Link to="/city">
            <button className="city-button">City 4 ({data[0].name})</button>
            <button className="more-button"> + </button>
          </Link>
        </div>

        <div className="button-container">
          <Link to="/city">
            <button className="city-button">City 5 ({data[0].name})</button>
            <button className="more-button"> + </button>
          </Link>
        </div>


      </div>
    </div>
  )
}

export default Cities;