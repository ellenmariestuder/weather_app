// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

// import React from 'react'
// import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'

// const Hello = props => (
//   <div>Hello {props.name}!</div>
// )

// Hello.defaultProps = {
//   name: 'David'
// }

// Hello.propTypes = {
//   name: PropTypes.string
// }

// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <Hello name="React" />,
//     document.body.appendChild(document.createElement('div')),
//   )
// })

import React from 'react'
import ReactDOM from 'react-dom'

import '../../assets/stylesheets/application.css'
import Landing from '../components/Landing';

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('output_data')
  const data = JSON.parse(node.getAttribute('data'))
  ReactDOM.render(
    <Landing data={data} />,
    document.body.appendChild(document.createElement('div')),
  )
})
