import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
 import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { addBookingToCurrentUser } from '../../Store/slices/authSlice';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

function BookingPage() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [roomType, setRoomType] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

const handleBooking = (data) => {


  if (!checkIn || !checkOut || !selectedRoom) return alert("Please fill in booking details.");

  const bookingData = {
    hotelId: hotel.id,
    hotelName: hotel.name,
    checkIn,
    checkOut,
    roomType,
    pricePerNight: selectedRoom.originalPrice,
    total: totalPrice,
    image: hotel.images.main,
    address: hotel.address,
    rating:hotel.rating,
    amenities:hotel.amenities,
userData:data
  };

  dispatch(addBookingToCurrentUser(bookingData));
  Swal.fire({
  title: "Booking Success",
  icon: "success",
});
 
};


  useEffect(() => {
    axios.get(`https://booking-app-db.vercel.app/hotels/${id}`)
      .then((res) => {
        setHotel(res.data);
      })
      .catch((err) => console.error('Error fetching hotel:', err));
  }, [id]);

  useEffect(() => {
    if (hotel?.pricing?.length) {
      setRoomType(hotel.pricing[0].roomType);
    }
  }, [hotel]);

  const selectedRoom = useMemo(() => {
    return hotel?.pricing?.find(p => p.roomType === roomType);
  }, [roomType, hotel]);

  const nights = useMemo(() => {
    if (checkIn && checkOut) {
      const inDate = dayjs(checkIn);
      const outDate = dayjs(checkOut);
    
      const diff = outDate.diff(inDate, 'day');
      return diff > 0 ? diff : 0;
    }
    return 0;
  }, [checkIn, checkOut]);

  const totalPrice = selectedRoom ? selectedRoom.originalPrice * nights : 0;

  if (!hotel) return <div className="container my-5">Loading...</div>;

  return (
    <>
    <div class="container-fluid bg-light  py-2 px-4 rounded">
  <div class="d-flex align-items-center gap-2 p-2">
    <h5 class="mb-0 fw-bold">Booking</h5>
    <span class="text-muted">|</span>
    <small class="text-muted">Hotels</small>
    <span class="text-muted">&gt;</span>
        <small class="text-muted">Hotels Details</small>
    <span class="text-muted">&gt;</span>
    <a  class="text-primary text-decoration-none small">Booking</a>
  </div>
</div>
     <div className="container my-5">
      <div className="row gy-4">
    

         <div className="col-md-8">
      <div className="p-4 shadow rounded bg-white">
        <h4 className="fw-bold">Your Details</h4>
        <p className="text-muted">{hotel.description}</p>

        <form onSubmit={handleSubmit(handleBooking)}>
          <div className="row mb-3">
            <div className="col-md-3">
              <label className="form-label">Title</label>
              <select className="form-select" {...register("title", { required: true })}>
                <option value="">Select</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Ms">Ms</option>
              </select>
              {errors.title && <span className="text-danger">Required</span>}
            </div>
            <div className="col-md-4">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="John"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && <span className="text-danger">Required</span>}
            </div>
            <div className="col-md-5">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your last name"
                {...register("lastName", { required: true })}
              />
              {errors.lastName && <span className="text-danger">Required</span>}
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="yourmail@gmail.com"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-danger">Required</span>}
          </div>

          <div className="row mb-4">
            <div className="col-md-4">
              <label className="form-label">Country</label>
              <select className="form-select" {...register("country", { required: true })}>
                <option value="">Select</option>
                <option value="Egypt">Egypt</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
              {errors.country && <span className="text-danger">Required</span>}
            </div>
            <div className="col-md-8">
              <label className="form-label">Mobile</label>
              <input
                type="tel"
                className="form-control"
                placeholder="+20 000 0000 000"
                {...register("mobile", { required: true })}
              />
              {errors.mobile && <span className="text-danger">Required</span>}
            </div>
          </div>

          <h4 className="fw-bold">Payment Details</h4>

          <div className="mb-3">
            <label className="form-label">Card Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="**** **** ****"
              {...register("cardNumber", { required: true })}
            />
            {errors.cardNumber && <span className="text-danger">Required</span>}
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">CVV</label>
              <input
                type="text"
                className="form-control"
                placeholder="123"
                {...register("cvv", { required: true })}
              />
              {errors.cvv && <span className="text-danger">Required</span>}
            </div>
            <div className="col-md-6">
              <label className="form-label">Expiry Date</label>
              <input
                type="text"
                className="form-control"
                placeholder="8/8/2030"
                {...register("expiryDate", { required: true })}
              />
              {errors.expiryDate && <span className="text-danger">Required</span>}
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label">Card Holder</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ahmed Mohamed Ahmed Aly"
              {...register("cardHolder", { required: true })}
            />
            {errors.cardHolder && <span className="text-danger">Required</span>}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            PAY NOW
          </button>
        </form>
      </div>
    </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card shadow rounded h-100">
            <div className="card-body p-3">
              <h5 className="fw-bold mb-3">Summary</h5>
              <img
                src={hotel.images.main}
                alt={hotel.name}
                className="img-fluid rounded mb-3"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <h6 className="fw-bold mb-1">{hotel.name}</h6>
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">
                  <i className="bi bi-geo-alt-fill text-primary me-1"></i>
                  {hotel.address.street}, {hotel.address.city}
                </small>
                <span className="text-danger fw-bold">{selectedRoom?.discount}</span>
              </div>
              <h2 className="fw-bold mt-2">
                ${selectedRoom?.originalPrice || 0}{' '}
                <small className="fs-6 text-muted">{selectedRoom?.currency}</small>
              </h2>
              <p className="text-muted">{selectedRoom?.priceUnit}</p>

              <div className="mb-2">
                <label className="form-label fw-bold">Check In</label>
                <input
                  type="date"
                  className="form-control"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                    min={new Date().toISOString().split("T")[0]} 
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Check Out</label>
                <input
                  type="date"
                  className="form-control"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                   min={new Date().toISOString().split("T")[0]} 
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Room Type</label>
                <select
                  className="form-select"
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                >
                  {hotel?.pricing?.map((room) => (
                    <option key={room.roomType} value={room.roomType}>
                      {room.roomType.charAt(0).toUpperCase() + room.roomType.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <ul className="list-unstyled">
                <li className="d-flex justify-content-between">
                  <span>Price Per Night</span>
                  <span>${selectedRoom?.originalPrice || 0}</span>
                </li>
                <li className="d-flex justify-content-between">
                  <span>Nights</span>
                  <span>{nights}</span>
                </li>
                <hr />
                <li className="d-flex justify-content-between fw-bold">
                  <span>Total Price</span>
                  <span>${totalPrice}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
   
  );
}

export default BookingPage;
