import React, { useState } from 'react'
import "./MainLayout.css"
import HomePage from '../Pages/HomePage/HomePage';
import { Link, Outlet } from 'react-router-dom';
import SearchBar from '../Components/SearchBar/SearchBar';
import SearchCard from '../Components/SearchCard/SearchCard';
import Navbar from '../Components/Navbar/Navbar';
import LogedNavbar from '../Components/Navbar/LogedNavbar';
import { NavLink } from 'react-router-dom';

function MainLayout() {
   const [hotels, setHotels] = useState([]);
   const [hasSearched, setHasSearched] = useState(false);

  const handleResults = (results) => {
    setHotels(results);
    setHasSearched(true); 
  };

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));



//  function toggleSidebar() {
//             const sidebar = document.querySelector('.sidebar');
//             sidebar.classList.toggle('collapsed');
//         }

const [isCollapsed, setIsCollapsed] = useState(true);

function toggleSidebar() {
  setIsCollapsed(prev => !prev);
}

  return (
    <>
    <section className=' position-relative'>


  {currentUser ? <LogedNavbar /> : <Navbar />}

 


   <nav className={`sidebar rounded-3 d-flex flex-column flex-shrink-0 position-fixed ${isCollapsed ? 'collapsed' : ''}`}>
  <button className="toggle-btn" onClick={toggleSidebar}>
    <i className="fa-solid fa-bars-staggered"></i>
  </button>

  <div className="p-4">
    <img src="/images/Vector.png" className='hide-on-collapse' alt="Logo" />
  </div>

  <div className="nav flex-column">
    {/* <Link className="sidebar-link active text-decoration-none p-3">
      <i className="fas fa-home me-3"></i>
      <span className="hide-on-collapse">Home</span>
    </Link>

      {currentUser && (
       <Link to="userBookings" className="sidebar-link text-decoration-none p-3">
      <i className="fa-solid fa-image-portrait me-3"></i>
      <span className="hide-on-collapse">Bookings</span>
    </Link>
        )}

    <Link className="sidebar-link text-decoration-none p-3">
      <i className="fa-solid fa-earth-americas me-3"></i>
      <span className="hide-on-collapse">Explore</span>
    </Link>

    <Link className="sidebar-link text-decoration-none p-3">
      <i className="fa-solid fa-circle-question me-3"></i>
      <span className="hide-on-collapse">Support</span>
    </Link> */}
    <NavLink
  to="/"
  className="sidebar-link text-decoration-none p-3"
>
  <i className="fas fa-home me-3"></i>
  <span className="hide-on-collapse">Home</span>
</NavLink>

{currentUser && (
  <NavLink
    to="/userBookings"
    className="sidebar-link text-decoration-none p-3"
  >
    <i className="fa-solid fa-image-portrait me-3"></i>
    <span className="hide-on-collapse">Bookings</span>
  </NavLink>
)}

<NavLink
  to="/searchPage"
  className="sidebar-link text-decoration-none p-3"
>
  <i className="fa-solid fa-earth-americas me-3"></i>
  <span className="hide-on-collapse">Explore</span>
</NavLink>

<NavLink
  to="/support"
  className="sidebar-link text-decoration-none p-3"
>
  <i className="fa-solid fa-circle-question me-3"></i>
  <span className="hide-on-collapse">Support</span>
</NavLink>
  </div>

  <div className="profile-section mt-auto p-4">
    <div className="d-flex align-items-center">
      <div className="ms-3 profile-info border-0">
        {!currentUser && (
          <Link to="/register">
            <button className='btn btn-light text-danger py-2 px-4 rounded-pill'>Sign Up Now</button>
          </Link>
        )}
      </div>
    </div>
  </div>
</nav>
 

    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-11 col-sm-11 col-md-11 ms-auto p-0">
  
        </div>
      </div>
    </div>
  
    </section>

    <section className='components main-bg '>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-11 col-sm-11 col-md-11 ms-auto p-0">
            <div class="container-fluid">
                <div class="row">
                  <SearchBar onResults={handleResults}/>
 <Outlet />
                   {/* {hasSearched ? (
        hotels.length > 0 ? (
          <div className="row mt-4">
            {hotels.map((hotel) => (
              <SearchCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        ) : (
          <div className="py-5 text-center mx-auto">
            <div className="container">
              <img
                src="/images/ResultNotFound.png"
                alt="ResultNotFound"
                className="img-fluid mb-3"
                style={{ maxWidth: '300px' }}
              />
              <p className="fs-4 fw-bold">No Result Found</p>
            </div>
          </div>
        )
      ) : (
        <Outlet />
      )} */}
                  {/* {hotels.length>0?      <div className="row mt-4">
        {hotels.map((hotel) => (
  <SearchCard key={hotel.id} hotel={hotel} />
        ))}
      </div>:<Outlet></Outlet>} */}

                  {/* <div className='py-5 text-center mx-auto'>
    <div class="container">
        <img src="images/ResultNotFound.png" alt="ResultNotFound"/>
        <p className='fs-4 fw-bold'>No Result Found</p>
    </div>
</div> */}



              {/* <HomePage></HomePage> */}
            </div>
            </div>
          
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default MainLayout