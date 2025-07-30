import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <>
    
     <div class="container-fluid header">
            <div class="row">
                <div class="col-10 ms-auto">


        {/* <nav className="navbar navbar-expand-lg bg-transparent pb-5">
  <div className="container-fluid">

     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> 
    <div className="ms-auto" id="navbarNav">
      <ul className="navbar-nav ms-auto mt-2">
  
        <li className="nav-item">
        
          <Link className="nav-link text-light fs-5" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light fs-5" to="register">Sign Up</Link>
        </li>
 
      </ul>
    </div>
  </div>
</nav> */}
<nav className="navbar navbar-expand-lg bg-transparent py-3">
  <div className="container-fluid">


    {/* <button
      className="navbar-toggler border-0"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#mainNavbar"
      aria-controls="authNavbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button> */}

  <button
                className="navbar-toggler ms-auto  border-0 bg-primary  text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mainNavbar"
                aria-controls="mainNavbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
               
                <i class="fa-solid fa-bars-staggered text-white"></i>
              </button>


    <div className="collapse navbar-collapse" id="mainNavbar">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item mx-auto mx-sm-auto mx-md-auto ">
          <Link className="nav-link text-light fs-5" to="/login">
            Login
          </Link>
        </li>
        <li className="nav-item mx-auto mx-sm-auto mx-md-auto me-lg-2">
          <Link className="nav-link text-light fs-5" to="/register">
            Sign Up
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


        {/* <nav className="navbar main-nav navbar-expand-lg   py-5">
  <div className="container">

  
    <div className=" w-100" >
      <ul className="navbar-nav">
  
        <li className="nav-item">
           
          <Link className="nav-link text-light" to=""> <i class="fa-solid fa-bed fs-3 text-light d-inline-block w-100"></i>Hotel</Link>
        </li>
      <li className="nav-item">
           
          <a className="nav-link text-light" href="#"> <i class="fa-solid fa-house fs-3 text-light d-inline-block w-100"></i>villa</a>
        </li>

        <li className="nav-item">
           
          <a className="nav-link text-light" href="#"> <i class="fa-solid fa-taxi fs-3 text-light d-inline-block w-100"></i>taxi</a>
        </li>

        <li className="nav-item">
           
          <a className="nav-link text-light" href="#"> <i class="fa-solid fa-plane-departure fs-3 text-light d-inline-block w-100"></i>flights</a>
        </li>
 
      </ul>
    </div>
  </div>
</nav> */}

<nav className="navbar navbar-expand-lg bg-transparent py-3">
  <div className="container-fluid">
    {/* <button
      className="navbar-toggler border-0"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#mainMenu"
      aria-controls="mainMenu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button> */}

    <div className="collapse navbar-collapse" id="mainNavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item  text-center">
          <NavLink className="nav-link text-light sidebar-link text-decoration-none " to="">
            <i className="fa-solid fa-bed fs-3 d-block"></i>
            Hotel
          </NavLink>
        </li>
        <li className="nav-item text-center sidebar-link text-decoration-none">
          <NavLink className="nav-link text-light" to="#">
            <i className="fa-solid fa-house fs-3 d-block"></i>
            Villa
          </NavLink>
        </li>
        <li className="nav-item  text-center sidebar-link text-decoration-none ">
          <NavLink className="nav-link text-light" to="#">
            <i className="fa-solid fa-taxi fs-3 d-block"></i>
            Taxi
          </NavLink>
        </li>
        <li className="nav-item  text-center sidebar-link text-decoration-none ">
          <NavLink className="nav-link text-light" to="#">
            <i className="fa-solid fa-plane-departure fs-3 d-block"></i>
            Flights
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>


                </div>
            </div>
        </div>
    
    </>
  )
}

export default Navbar