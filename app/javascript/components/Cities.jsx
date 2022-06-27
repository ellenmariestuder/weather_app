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

        <Link to="/city">Go to city</Link>

        <div className="button-container">
          <button component={Link} to="/city" className="city-button">City 1 ({data[0].name})</button>
          <button className="more-button"> + </button>
        </div>

        <div className="button-container">
          <button className="city-button">City 2 ({data[0].name})</button>
          <button className="more-button"> + </button>
        </div>

        <div className="button-container">
          <button className="city-button">City 3 ({data[0].name})</button>
          <button className="more-button"> + </button>
        </div>

        <div className="button-container">
          <button className="city-button">City 4 ({data[0].name})</button>
          <button className="more-button"> + </button>
        </div>

        <div className="button-container">
          <button className="city-button">City 5 ({data[0].name})</button>
          <button className="more-button"> + </button>
        </div>

      </div>
    </div>
  )
}

export default Cities;