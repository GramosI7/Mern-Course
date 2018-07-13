import React from "react";
import {NavLink} from 'react-router-dom';


const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse container" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <NavLink to="/" className="nav-link">Home</NavLink><span className="sr-only">(current)</span>
              </li>
              <li className="nav-item active">
                <NavLink className="nav-link" to="/cours">Cours</NavLink><span className="sr-only">(current)</span>
              </li>
              <li className="nav-item active">
                <NavLink className="nav-link" to="/add">Add Cours</NavLink><span className="sr-only">(current)</span>
              </li>
            </ul>

            <form className="form-inline">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0">Search</button>
            </form>

          </div>

          <ul className="navbar-nav mr-rigth mt-2 mt-lg-0">
              <li className="nav-item active">
                <NavLink to="/login" className="nav-link">Login</NavLink><span className="sr-only">(current)</span>
              </li>
              <li className="nav-item active">
                <NavLink className="nav-link" to="/register">Register</NavLink><span className="sr-only">(current)</span>
              </li>
            </ul>
        </nav>
    )
}

export default Navbar;