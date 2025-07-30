import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setHotels } from '../../Store/slices/searchSlice';

function SearchBar({ onResults }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
const countries = [
  { label: "United States", value: "US" },
  { label: "Morocco", value: "MA" },
  { label: "Egypt", value: "EG" },
  { label: "Greece", value: "GR" },
];


  const [filters, setFilters] = useState({
    search: "",
    country: "",
    checkIn: "",
    checkOut: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = async () => {
    // 🛠 build query only when searching (inside this function)
    const params = new URLSearchParams();
    if (filters.search) params.append("q", filters.search);
    if (filters.country) params.append("address.countryIsoCode", filters.country);
    if (filters.checkIn) params.append("checkIn", filters.checkIn);
    if (filters.checkOut) params.append("checkOut", filters.checkOut);

    const query = params.toString();
    const url = `https://booking-app-db.vercel.app/hotels?${query}`;

    try {
      const res = await axios.get(url);
      console.log(res);
      
      if (onResults){
 onResults(res.data);
  dispatch(setHotels(res.data));
      navigate('/searchPage');
     
      };
    } catch (err) {
      console.error("Search failed:", err);
    }
  };

  const handleClear = () => {
    setFilters({ search: "", country: "", checkIn: "", checkOut: "" });
    if (onResults) onResults([]);
  };



  return (

<>

<div className="container my-4 py-3 bg-light rounded-4 shadow-sm">
  <form className="row gy-3 gx-4 justify-content-center align-items-end">

    {/* Search */}
    <div className="col-12 col-sm-6 col-md-4 col-lg-2">
      <label htmlFor="search" className="form-label text-muted">SEARCH</label>
      <input
        id="search"
        type="text"
        name="search"
        placeholder="Search"
        value={filters?.search}
        onChange={handleChange}
        className="form-control rounded-pill"
      />
    </div>

    {/* Country */}
    <div className="col-12 col-sm-6 col-md-4 col-lg-2">
      <label htmlFor="country" className="form-label text-muted">COUNTRY</label>
      <select
        id="country"
        name="country"
        value={filters?.country}
        onChange={handleChange}
        className="form-select rounded-pill"
      >
        <option value="">Select Country</option>
        {countries.map((country) => (
          <option key={country.value} value={country.value}>
            {country.label}
          </option>
        ))}
      </select>
    </div>

    {/* Check In */}
    <div className="col-12 col-sm-6 col-md-4 col-lg-2">
      <label htmlFor="checkIn" className="form-label text-muted">CHECK IN</label>
      <input
        id="checkIn"
        type="date"
        name="checkIn"
        value={filters?.checkIn}
        onChange={handleChange}
        className="form-control rounded-pill"
      />
    </div>

    {/* Check Out */}
    <div className="col-12 col-sm-6 col-md-4 col-lg-2">
      <label htmlFor="checkOut" className="form-label text-muted">CHECK OUT</label>
      <input
        id="checkOut"
        type="date"
        name="checkOut"
        value={filters?.checkOut}
        onChange={handleChange}
        className="form-control rounded-pill"
      />
    </div>

    {/* Buttons */}
    <div className="col-12 col-md-8 col-lg-2 d-flex justify-content-between">
      <button
        type="button"
        className="btn btn-outline-secondary w-100 me-2 rounded-pill"
        onClick={handleClear}
      >
        Clear
      </button>
      <button
        type="button"
        className="btn btn-danger w-100 rounded-pill"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>

  </form>
</div>

</>
  )
}

export default SearchBar