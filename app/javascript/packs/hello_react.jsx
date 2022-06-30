import React from 'react'
import ReactDOM from 'react-dom'

import '../../assets/stylesheets/application.css'
import Landing from '../components/Landing';


document.addEventListener('DOMContentLoaded', () => {
  const node_c1 = document.getElementById('output_data_c1')
  const data_c1 = JSON.parse(node_c1.getAttribute('data'))

  const node_c2 = document.getElementById('output_data_c2')
  const data_c2 = JSON.parse(node_c2.getAttribute('data'))

  const node_c3 = document.getElementById('output_data_c3')
  const data_c3 = JSON.parse(node_c3.getAttribute('data'))

  const node_c4 = document.getElementById('output_data_c4')
  const data_c4 = JSON.parse(node_c4.getAttribute('data'))

  const node_c5 = document.getElementById('output_data_c5')
  const data_c5 = JSON.parse(node_c5.getAttribute('data'))

  // const node_c1_w = document.getElementById('output_data_c1_w')
  // const data_c1_w = JSON.parse(node_c1_w.getAttribute('data'))

  // const node_c2_w = document.getElementById('output_data_c2_w')
  // const data_c2_w = JSON.parse(node_c2_w.getAttribute('data'))

  // const node_c3_w = document.getElementById('output_data_c3_w')
  // const data_c3_w = JSON.parse(node_c3_w.getAttribute('data'))

  // const node_c4_w = document.getElementById('output_data_c4_w')
  // const data_c4_w = JSON.parse(node_c4_w.getAttribute('data'))

  // const node_c5_w = document.getElementById('output_data_c5_w')
  // const data_c5_w = JSON.parse(node_c5_w.getAttribute('data'))

  ReactDOM.render(
    <Landing
      data_c1={data_c1} data_c2={data_c2} data_c3={data_c3} data_c4={data_c4} data_c5={data_c5}
      // data_c1_w={data_c1_w} data_c2_w={data_c2_w} data_c3_w={data_c3_w} data_c4_w={data_c4_w} data_c5_w={data_c5_w}
    />,
    document.body.appendChild(document.createElement('div')),
  )
})
