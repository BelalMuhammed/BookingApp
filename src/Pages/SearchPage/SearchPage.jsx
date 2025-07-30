import React from 'react'
import { useSelector } from 'react-redux';
import SearchCard from '../../Components/SearchCard/SearchCard';

function SearchPage() {
     const hotels = useSelector((state) => state.search.hotels);
     console.log(hotels, "from search page");
     
  return (
  <>
     <div class="container-fluid bg-light  py-2 px-4 rounded">
  <div class="d-flex align-items-center gap-2 p-2">
    <h5 class="mb-0 fw-bold">Hotels</h5>
    <span class="text-muted">|</span>
    <small class="text-muted">Total</small>
 
    <a  class="text-primary text-decoration-none small">{hotels.length} result</a>
  </div>
</div>


                         
       { hotels.length > 0 ? (
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
      }
    </>
  )
}

export default SearchPage