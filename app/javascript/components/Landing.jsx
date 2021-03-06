import React, { useState } from 'react'
import Cities from './Cities'
import Modal from './Modal'

const Landing = ({ data_c1, data_c2, data_c3, data_c4, data_c5 }) => {
  const [details, setDetails] = useState();
  const [show, setShow] = useState(false);

  const handleClick = (details) => {
    setDetails(details);
    setShow(!show);

    console.log(details);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      console.log(event.target.value)
      window.localStorage.setItem('city', event.target.value);
      getCoords(event.target.value);
      openModal();
    }
  }

  const getCoords = (city) => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q= "
      + city
      + "&units=imperial&appid=d864613bf3c891e810c6ba0054f4396c"
    )
      .then((response) => response.json())
      .then((details) => setDetails(details))
      .catch((error) => {
        alert("Enter valid city")
        console.error("Error:", error);
      });
    console.log(details);
  }

  const openModal = () => {
    if (details) { setShow(true) }
  }

  return (
    <div className="background">
      <div className="container">
        <h1 className="title">Weather</h1>

        <div className="sub-container">
          <form>
            <img className="search-icon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2Ljk2NiA1Ni45NjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ljk2NiA1Ni45NjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPHBhdGggZD0iTTU1LjE0Niw1MS44ODdMNDEuNTg4LDM3Ljc4NmMzLjQ4Ni00LjE0NCw1LjM5Ni05LjM1OCw1LjM5Ni0xNC43ODZjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMywxMC4zMTgtMjMsMjMgIHMxMC4zMTgsMjMsMjMsMjNjNC43NjEsMCw5LjI5OC0xLjQzNiwxMy4xNzctNC4xNjJsMTMuNjYxLDE0LjIwOGMwLjU3MSwwLjU5MywxLjMzOSwwLjkyLDIuMTYyLDAuOTIgIGMwLjc3OSwwLDEuNTE4LTAuMjk3LDIuMDc5LTAuODM3QzU2LjI1NSw1NC45ODIsNTYuMjkzLDUzLjA4LDU1LjE0Niw1MS44ODd6IE0yMy45ODQsNmM5LjM3NCwwLDE3LDcuNjI2LDE3LDE3cy03LjYyNiwxNy0xNywxNyAgcy0xNy03LjYyNi0xNy0xN1MxNC42MSw2LDIzLjk4NCw2eiIgZmlsbD0iIzAwMDAwMCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
            <input type="text" name="name" placeholder="Search" onKeyDown={handleKeyDown} />
          </form>

          <Cities handleClick={handleClick} data_c1={data_c1} data_c2={data_c2} data_c3={data_c3} data_c4={data_c4} data_c5={data_c5} />
          <Modal show={show} setShow={setShow} details={details} />

          <div className="footer-text">
            Built with <a href="https://openweathermap.org" target="_blank">openweathermap.org</a> API
            by <a href="https://github.com/ellenmariestuder" target="_blank">@ellenmariestuder</a></div>
        </div>
      </div>
    </div>
  )
}

export default Landing;