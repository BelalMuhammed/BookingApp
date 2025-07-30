import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../Store/slices/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Register() {

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const password = watch("password");

  const onSubmit = (data) => {
    dispatch(registerUser(data));
      Swal.fire({
      title: "Registered successfully!",
      icon: "success",
    });

    navigate("/login");
  };

  return (
    <>

   <section className='Register'>
      <div className="container-fluid">
        <div className="row vh-100">
          <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center p-0">
            <form onSubmit={handleSubmit(onSubmit)} className='w-75'>
              <div className='text-center'>
                <img src="/images/Brand Logo.png" alt="Logo" />
              </div>
              <h2 className='fw-bold h1 text-center mt-5'>Signup</h2>

              {/* Name */}
              <div className="mb-3">
                <label htmlFor="Name">Name</label>
                <input
                  id="Name"
                  className="form-control"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p className="text-danger">{errors.name.message}</p>}
              </div>

              {/* Email */}
              <div className="mb-3">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  id="Email"
                  className="form-control"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email",
                    }
                  })}
                />
                {errors.email && <p className="text-danger">{errors.email.message}</p>}
              </div>

              {/* Password */}
              <div className="mb-3">
                <label htmlFor="Password">Password</label>
                <input
                  type="password"
                  id="Password"
                  className="form-control"
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/,
                      message: "Must include uppercase, number, and special char",
                    }
                  })}
                />
                {errors.password && <p className="text-danger">{errors.password.message}</p>}
              </div>

              {/* Confirm Password */}
              <div className="mb-3">
                <label htmlFor="CPassword">Confirm Password</label>
                <input
                  type="password"
                  id="CPassword"
                  className="form-control"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: value =>
                      value === password || "Passwords do not match"
                  })}
                />
                {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword.message}</p>}
              </div>

              {/* Country */}
              <div className="mb-3">
                <label htmlFor="country">Country</label>
                <select
                  className="form-select"
                  id="country"
                  {...register("country", { required: "Country is required" })}
                >
                  <option value="">Choose...</option>
                  <option value="Egypt">Egypt</option>
                  <option value="US">US</option>
                  <option value="Morocco">Morocco</option>
                </select>
                {errors.country && <p className="text-danger">{errors.country.message}</p>}
              </div>

              {/* Phone */}
              <div className="mb-3">
                <label htmlFor="Phone">Phone</label>
                <input
                  type="tel"
                  id="Phone"
                  className="form-control"
                  {...register("phone", {
                    required: "Phone number is required",
                    maxLength: {
                      value: 12,
                      message: "Phone number cannot exceed 12 digits"
                    },
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Phone must be numbers only"
                    }
                  })}
                />
                {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
              </div>

              {/* Submit */}
              <button type='submit' className='btn btn-primary w-100 fw-bold'>
                Sign up
              </button>
              <p className='text-center mt-3'>Already have an account? <Link to="/login" className='text-primary'>Login</Link></p>
            </form>
          </div>
          <div className="d-none  d-md-inline d-lg-inline col-6 p-0">
            <img src="/images/BG.png" alt="" className="w-100 vh-100"     style={{ objectFit: "cover" }}/>
          </div>
        </div>
      </div>
    </section>

 
    </>
  )
}

export default Register