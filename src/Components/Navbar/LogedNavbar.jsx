import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux';
function LogedNavbar() {
  const currentUser = useSelector((state) => state.auth.currentUser);

  
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
   
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <>
    
      



 <div className="container-fluid header-loged">
      <div className="row">
        <div className="col-10 ms-auto">
          <nav className="navbar navbar-expand-lg bg-transparent py-4">
            <div className="container-fluid">
              {/* Toggle Button */}
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

              {/* Collapsible Content */}
              <div className="collapse navbar-collapse " id="mainNavbar">
                {/* Left Side Links */}
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item mx-auto mx-sm-auto mx-md-auto me-lg-2  ">
                    <Link className="nav-link text-light" to="">
                      <i className="fa-solid fa-bed fs-4 d-block"></i>Hotel
                    </Link>
                  </li>
                  <li className="nav-item mx-auto mx-sm-auto mx-md-auto me-lg-2 ">
                    <Link className="nav-link text-light" to="#">
                      <i className="fa-solid fa-house fs-4 d-block"></i>Villa
                    </Link>
                  </li>
                  <li className="nav-item mx-auto mx-sm-auto mx-md-auto me-lg-2 ">
                    <Link className="nav-link text-light" to="#">
                      <i className="fa-solid fa-taxi fs-4 d-block"></i>Taxi
                    </Link>
                  </li>
                  <li className="nav-item mx-auto mx-sm-auto mx-md-auto me-lg-2 ">
                    <Link className="nav-link text-light" to="#">
                      <i className="fa-solid fa-plane-departure fs-4 d-block"></i>Flights
                    </Link>
                  </li>
                </ul>

                {/* Right Side: User Dropdown */}
                <div className="dropdown ms-auto position-relative">
                  <button
                    className="btn d-flex align-items-center bg-primary text-white rounded-pill px-2 py-1"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    style={{ height: "40px" }}
                  >
                    <img
                    
                      src="/images/userProfile.png"
                      alt="Profile"
                      className="rounded-circle me-2"
                      width="30"
                      height="30"
                    />
                    <span className="fw-medium">{currentUser.name}</span>
                    <i className="fa-solid fa-caret-down ms-2"></i>
                  </button>

                  {dropdownOpen && (
                    <ul
                      className="dropdown-menu show mt-2"
                     
                    >
                      <li>
                        <button
                          className="dropdown-item text-danger"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    </>
  )
}

export default LogedNavbar