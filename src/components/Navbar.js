import React from 'react'
import propTypes from 'prop-types'

export default function Navbar(props) {
  return (
      <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode === 'light'? 'light': 'danger'}`}>
        <div className="container-fluid">
        <a className="navbar-brand" href="/"><strong>{props.title}</strong></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">{props.AboutText}</a>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-success" type="submit">Search</button>
           </form> */}
          <div className={`form-check form-switch text-${props.mode === 'light'? 'black' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox"  id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkMode</label>
        </div>
        </div>
      </div>
    </nav>
  )
}


Navbar.prototypes = {
  title: propTypes.string.isRequired,
  AboutText: propTypes.string.isRequired,
}

Navbar.defaultProps = {
  title: "Title",
  AboutText: "About"
}

