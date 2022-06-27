import React, { useState } from 'react'

const Landing = ({ data }) => {
  // const [count, setCount] = useState(0);
  // const increase = () => setCount(count + 1);
  // const decrease = () => setCount(count - 1);

  return (
    // this div is where the output data is getting passed
    <div>
      {/* <button onClick={decrease}>-</button>
      <span>{count}</span>
      <button onClick={increase}>+</button> */}
      <h1>Weather App</h1>
      <h3>Check out the weather.</h3>
      <div>
        <button>City 1</button>
        <button>City 2</button>
        <button>City 3</button>
        <button>City 4</button>
        <button>City 5</button>
      </div>

      <div>
        Here's the output:
        <div>
          {data[0].name}
        </div>
      </div>
    </div>
  )
}

export default Landing;