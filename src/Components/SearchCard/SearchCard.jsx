import React from 'react'
import { Link } from 'react-router-dom';

function SearchCard({ hotel }) {


const { name, address, images, rating, amenities, pricing } = hotel;

  const price = pricing[0]?.price || 0;
  const discount = pricing[0]?.discountPercent || 0;
  const finalPrice = price - price * (discount / 100);

  return (
    <>
    <div className='col-lg-6 '>
     <div className="card p-0 mb-3 shadow-sm" style={{ borderRadius: "15px", overflow: "hidden" }}>
      <div className="row g-0">
     
        <div className="col-md-4">
          <img
            src={images?.main}
            alt={name}
            className="img-fluid h-100 w-100 object-fit-cover"
            style={{ height: "100%", objectFit: "cover" }}
          />
        </div>

      
        <div className="col-md-8">
          <div className="card-body d-flex flex-column justify-content-between h-100">
    
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h5 className="card-title mb-1">{name}</h5>
                <p className="text-muted small mb-2">
                  Near {address?.city}, {address?.country}
                </p>
              </div>
              <span className="badge p-2 bg-primary rounded-2">
                {rating?.score} ★
              </span>
            </div>

       
            <div className="mb-2">
              {amenities?.slice(0, 2).map((a, index) => (
                <span key={index} className="me-3 text-muted">
                  <i className="bi bi-check-circle me-1"></i> {a}
                </span>
              ))}
            </div>

        
            <div className="d-flex justify-content-between align-items-center">
              <div className='d-flex align-items-center'>
              
                  <small className="text-warning fw-bold me-2">{hotel.pricing[0].discount}</small>
             
                <div className="fs-4 fw-bold">${hotel.pricing[0].discountedPrice}</div>
              </div>

              <div className="d-flex gap-2">
                 <Link className="nav-link active" rel="stylesheet" to={`/HotelDetails/${hotel.id}`}>
                     <button className="btn btn-outline-secondary btn-sm">View Details</button>
                 </Link>
              
                <button className="btn btn-primary btn-sm">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  

    </>
  )
}

export default SearchCard