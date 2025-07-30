import React from 'react'

function BookingCard({ booking }) {
     const {
    hotelName,
    address,
    amenities,
    image,
    checkIn,
    checkOut,
    total,
    pricePerNight,
    rating,
  } = booking;
  return (
    <>
    
       {/* <div className="d-flex flex-row shadow-sm mb-4" style={{ borderRadius: "15px", overflow: "hidden" }}>
  
      <Card.Img src={image} alt={hotelName} style={{ width: '250px', objectFit: 'cover' }} />

    
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <div className="d-flex justify-content-between">
            <Card.Title>{hotelName}</Card.Title>
            <Badge bg="primary" className="align-self-start">
              {rating?.score} ★
            </Badge>
          </div>
          <Card.Subtitle className="text-muted">
            {address?.city}, {address?.country}
          </Card.Subtitle>
          <small className="text-muted">Near {address?.street}</small>

          <div className="mt-2 d-flex gap-3 text-muted">
            {amenities?.includes("Parking") && <FaParking />}
            {amenities?.includes("Wifi") && <FaWifi />}
          </div>

          <div className="mt-2 text-success fw-bold">Total: ${total}</div>
          <div className="text-muted">Price/night: ${pricePerNight}</div>
        </div>

        <div className="mt-3 text-muted d-flex gap-3">
          <div><FaCalendarAlt /> From: {checkIn}</div>
          <div><FaCalendarAlt /> To: {checkOut}</div>
        </div>
      </Card.Body>
    </div>
     */}

<div className="d-flex bg-light flex-row shadow-sm mb-4 border rounded-4 overflow-hidden p-0">
  {/* Image */}
  <img
    src={image}
    alt={hotelName}
    style={{ width: '250px', objectFit: 'cover' }}
    className="img-fluid"
  />

  {/* Details */}
  <div className="d-flex flex-column justify-content-between p-3 flex-grow-1">
    <div>
      <div className="d-flex justify-content-between align-items-start">
        <h5 className="mb-1">{hotelName}</h5>
        <span className="badge bg-primary">{rating?.score} ★</span>
      </div>
      <h6 className="text-muted mb-0">
        {address?.city}, {address?.country}
      </h6>
      <small className="text-muted">Near {address?.street}</small>

      <div className="mt-2 d-flex gap-3 text-muted">
        {amenities?.includes("Parking") && <i className="fas fa-parking"></i>}
        {amenities?.includes("Wifi") && <i className="fas fa-wifi"></i>}
      </div>

      <div className="mt-2 text-success fw-bold">Total: ${total}</div>
      <div className="text-muted">Price/night: ${pricePerNight}</div>
    </div>

    <div className="mt-3 text-muted d-flex gap-3">
      <div><i className="fas fa-calendar-alt me-1"></i> From: {checkIn}</div>
      <div><i className="fas fa-calendar-alt me-1"></i> To: {checkOut}</div>
    </div>
  </div>
</div>

    </>
  )
}

export default BookingCard