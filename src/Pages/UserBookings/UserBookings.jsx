import React from 'react'
import { useSelector } from 'react-redux';
import BookingCard from '../../Components/BookingCard/BookingCard';

function UserBookings() {
   const currentUser = useSelector(state => state.auth.currentUser);
  return (
    <>
        <div class="container-fluid bg-light  py-2 px-4 rounded">
  <div class="d-flex align-items-center gap-2 p-2">
    <h5 class="mb-0 fw-bold">My Bookings</h5>
    <span class="text-muted">|</span>
 
    <a  class="text-primary text-decoration-none small">My Bookings</a>
  </div>
</div>
    <section className='my-4'>
           <h2>Your Bookings</h2>
      {currentUser?.bookings?.length > 0 ? (
        currentUser?.bookings?.map((booking, index) => (
          <BookingCard key={index} booking={booking} />
        ))
      ) : (
            <section className='NotFound  mx-auto text-center'>

    <img src="/images/pageNotFound.png" alt="notFound"/>

<p className='fw-bold'>No booking Found</p>
    </section>
      )}
    </section>
    </>
  )
}

export default UserBookings