import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from "axios";
import "./HomePage.css"
import RecomendedHotelCard from '../../Components/RecomendedHotelCard/RecomendedHotelCard';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


import { FreeMode, Pagination } from "swiper/modules";

function HomePage() {
      const [RecomendedHotels, setRecomendedHotels] = useState([]);
      const [BestOffers, setBestOffers]=useState([])
  const [loading, setLoading] = useState(true);

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
 
axios.get("https://booking-app-db.vercel.app/best_offer")
      .then((response) => {
        setBestOffers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching hotel data:", error);
        setLoading(false);
      });      

  },[])



  return (
    <>




      <div className='py-5'>
      <h1>Recommended Hotels</h1>
   
      
    <Swiper 
  
        slidesPerView={1}
        spaceBetween={20}
        freeMode={true}
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
        className="hotelSwiper z-1"
      >

          {RecomendedHotels.map(hotel => (
        <SwiperSlide key={hotel.id}>
              <RecomendedHotelCard key={hotel.id} hotel={hotel} />
        </SwiperSlide>
        
          
        ))}
      </Swiper>
      
   

    </div>
<section className='py-4'>
    <div className='best_offers bg-light p-4 rounded-4 '>
        <h2 className=' fw-bold'>Best Offer</h2>
        <div class="container-fluid">
            <div class="row gy-4">
                  {BestOffers.map(offer => (

                       <div class="col-lg-4 col-md-6 col-sm-6">
<div className='offer-card p-3 d-flex align-items-center bg-main h-100 '>
    <img src={offer.image} alt={offer?.name} className=' rounded-circle mx-3'/>
    <div className='bestOfferContent'>
        <h5 className='m-0'>{offer?.name}</h5>
        <p className='text-muted m-0'>{offer?.location}</p>
    </div>
</div>
                      </div>
        ))}
             
            </div>
        </div>
    </div>
</section>

    </>
  )
}

export default HomePage