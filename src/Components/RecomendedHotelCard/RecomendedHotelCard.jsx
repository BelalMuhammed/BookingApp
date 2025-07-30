import React from 'react';
import "./RecomendedHotelCard.css";
import { Link } from 'react-router-dom';
function RecomendedHotelCard({hotel}) {
      const {
    name,
    address,
    rating,
    pricing,
    amenities,
    description,
    images,
  } = hotel;

    const price = pricing?.[0]; // first room type (e.g., single)

  return (
    <>

    <div className='card rounded-4   z-1'>
        <div className='d-flex align-items-center flex-wrap flex-lg-nowrap flex-md-nowrap p-4 z-1'>
         
            <img src={images?.main} alt={name}  className=' RecomendedCardSadow rounded-4 mx-auto'  style={{ width: "178px", height: "180px", objectFit: "cover"}}/>
            <div className='card-content w-100   ps-4'>
                <span className=" text-muted">HOTEL</span>
                  <h4>{name}</h4>
                <p>{address?.city}, {address?.state}, {address?.country}</p>
  <div className='d-flex justify-content-between align-items-center'>

                       {price && (
        <p className='m-0'>
          <strong>Price:</strong> ${price.discountedPrice} {price.currency} 
        </p>
      )}
 <Link className="nav-link active " rel="stylesheet" to={`/HotelDetails/${hotel.id}`}>
      {/* <button className=""> */}
      <span className='RecomendedCardBtn'>
 Book Now
      </span>
       
        {/* </button> */}
 </Link>
 
                </div>
            </div>
        </div>
    </div>
{/* 
    <div className="card" style={{ border: "1px solid #ccc", borderRadius: 8, padding: 16, backgroundColor: "white" }}>
      <img
        src={images?.main}
        alt={name}
        style={{ width: "100%", height: 200, objectFit: "cover", borderRadius: 8 }}
      />
      <h2>{name}</h2>
      <p>{address?.city}, {address?.state}, {address?.country}</p>
      <p><strong>Rating:</strong> {rating?.score} ⭐ ({rating?.reviewCount} reviews - {rating?.status})</p>
      {price && (
        <p>
          <strong>Price:</strong> ${price.discountedPrice} {price.currency} ({price.roomType})
        </p>
      )}
      <p><strong>Amenities:</strong> {amenities?.slice(0, 4).join(", ")}</p>
      <p>{description?.slice(0, 120)}...</p>
    </div> */}

    </>

  )
}

export default RecomendedHotelCard