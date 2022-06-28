import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Modal = ({ data }) => {

  return (
    <div>
      <h3>Here's the weather in {data[0].name}: </h3>
      <div>Please check back again. </div>
      <Link to="/">Close</Link>
    </div>
  )
}

export default Modal;