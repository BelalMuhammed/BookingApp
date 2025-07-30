import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import MainLayout from './Layouts/MainLayout'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import HotelDetails from './Pages/HotelDetails/HotelDetails'
import NotFound from './Pages/NotFound/NotFound'
import BookingPage from './Pages/BookingPage/BookingPage'
import UserBookings from './Pages/UserBookings/UserBookings'
import SearchPage from './Pages/SearchPage/SearchPage'
import ProtectedRoute from './Routes/ProtectedRoute'
function App() {

let x = createBrowserRouter([
  {path:"login",element:<Login/>},
  {path:"register",element:<Register/>},
  {path:"",element:<MainLayout/>,children:[
  {index:true, element:<HomePage/>},
  {path:"HotelDetails/:id", element:<HotelDetails/>},
  {path:"BookingPage/:id", element:(<ProtectedRoute><BookingPage/></ProtectedRoute>)},
    {path:"userBookings", element:(<ProtectedRoute><UserBookings /></ProtectedRoute>)},
  {path:"searchPage", element:<SearchPage/>},
  {path:"*",element:<NotFound/>}
]}])
  return (
    <>

<RouterProvider router={x}></RouterProvider>

    {/* <Register></Register> */}
{/* <Login></Login> */}
{/* <MainLayout></MainLayout> */}
    </>
  )
}

export default App
