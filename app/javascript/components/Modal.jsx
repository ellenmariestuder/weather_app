import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Modal = ({ data }) => {
  // const Modal = ({ data_c1 }) => {
  // const [count, setCount] = useState(0);
  // const increase = () => setCount(count + 1);
  // const decrease = () => setCount(count - 1);

  return (
    <div>
      <h3>Here's the weather in {data[0].name}: </h3>
      <div>Please check back again. </div>
      <Link to="/">Close</Link>
    </div>
  )
}

export default Modal;