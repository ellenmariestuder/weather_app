import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Modal = () => {
  // const [count, setCount] = useState(0);
  // const increase = () => setCount(count + 1);
  // const decrease = () => setCount(count - 1);

  return (
    <div>
      <div>This is the modal</div>
      <Link to="/">Close</Link>
    </div>
  )
}

export default Modal;