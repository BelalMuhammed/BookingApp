import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import RecomendedHotelCard from '../../Components/RecomendedHotelCard/RecomendedHotelCard';

function HotelDetails() {

  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
 const [RecomendedHotels, setRecomendedHotels] = useState([]);
  useEffect(() => {
    axios.get(`https://booking-app-db.vercel.app/hotels/${id}`)
      .then((res) => {
        setHotel(res.data);
        console.log(res.data);
        
      });
  }, [id]);


useEffect(()=>{
  axios.get("https://booking-app-db.vercel.app/recommended_hotels")
      .then((response) => {
        setRecomendedHotels(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching hotel data:", error);
        setLoading(false);
      });
},[])

if (!hotel) return <div className="container my-5">Loading...</div>;
  return (
    <>

<div class="container-fluid bg-light  py-1 px-4 rounded">
  <div class="d-flex align-items-center gap-2 p-2">
    <h5 class="mb-0 fw-bold">Hotel Details</h5>
    <span class="text-muted">|</span>
    <small class="text-muted">Hotels</small>
    <span class="text-muted">&gt;</span>
    <a  class="text-primary text-decoration-none small">Hotel Details</a>
  </div>
</div>

<div className="container bg-light p-3 rounded-3 my-5">
  <h2 className="mb-3">{hotel?.name}</h2>
  <div className="container-fluid">
    <div className="row  align-items-stretch" style={{ minHeight: '500px' }}>
      {/* Carousel Column */}
      <div className="col-12 col-lg-6 d-flex">
        <div
          id="hotelCarousel"
          className="carousel slide mb-4 w-100 h-100"
          data-bs-ride="carousel"
        >
          {/* Image Slides */}
          <div className="carousel-inner h-100 rounded-3 overflow-hidden">
            {hotel?.images?.gallery?.map((img, index) => (
              <div
                className={`carousel-item h-100 ${index === 0 ? 'active' : ''}`}
                key={index}
              >
                <img
                  src={img}
                  className="d-block w-100 h-100"
                  style={{ objectFit: 'cover', borderRadius: '10px' }}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>

          {/* Indicators with Thumbnails */}
          <div className="carousel-indicators mt-3 position-absolute">
            {hotel?.images?.gallery?.map((img, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#hotelCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? 'active' : ''}
                aria-current={index === 0}
                aria-label={`Slide ${index + 1}`}
                style={{
                  width: 60,
                  height: 40,
                  backgroundImage: `url(${img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '2px solid #fff',
                  margin: '0 4px',
                  borderRadius: '4px',
                  opacity: 0.7,
                }}
              />
            ))}
          </div>

          {/* Prev/Next Buttons */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#hotelCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" />
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#hotelCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" />
          </button>
        </div>
      </div>

      {/* Info Column */}
      <div className="col-12 col-lg-6">
        <h4>Hotel Review</h4>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <span className="p-2 rounded-2 bg-primary text-light fw-bold me-2">
              {hotel?.rating?.score}
            </span>
            <div>
              <p className="m-0">{hotel?.rating?.status}</p>
              <p className="text-muted m-0">{hotel?.rating?.reviewCount} Reviews</p>
            </div>
          </div>
          <div>
            <p className="text-danger h4 m-0">{hotel?.pricing[0]?.discount}</p>
            <p className="fs-2 m-0">
             {hotel?.pricing[0]?.originalPrice} <span className="fs-5 text-muted">{hotel?.pricing[0]?.currency}</span>
            </p>
            <p className="m-0">{hotel?.pricing[0]?.priceUnit}</p>
          </div>
        </div>

        <div>
          <h4>About</h4>
          <p>{hotel?.description}</p>
        </div>

        <p className="text-muted">
          {hotel?.address?.street}, {hotel?.address?.city}, {hotel?.address?.state}, {hotel?.address?.country}
        </p>

        <div className="mt-4">
          <h4>Popular Services</h4>
          <ul className="d-flex flex-wrap p-0">
            {hotel?.amenities.map((amenity, index) => (
              <li key={index} className="list-unstyled me-3">{amenity}</li>
            ))}
          </ul>
        </div>
       
 <Link className="nav-link active" rel="stylesheet" to={`/BookingPage/${hotel?.id}`}>
   <button className="btn btn-primary w-100">Pay Now</button>
 </Link>
       
      </div>
    </div>
  </div>
</div>

    <div className='py-5'>
      <h2>Recommended Hotels</h2>
   
      
    <Swiper
        slidesPerView={1}
        spaceBetween={20}
        freeMode={false}
        // pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        className="hotelSwiper"
      >

          {RecomendedHotels.map(hotel => (
        <SwiperSlide key={hotel.id}>
              <RecomendedHotelCard key={hotel.id} hotel={hotel} />
        </SwiperSlide>
        
          
        ))}
      </Swiper>
      
   

    </div>

    </>
  )
}

export default HotelDetails