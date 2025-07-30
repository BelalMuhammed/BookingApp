import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../Store/slices/authSlice';
import Swal from 'sweetalert2';

function Login() {

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    try {
      dispatch(loginUser(data));

        Swal.fire({
  title: "Login successful!",
  icon: "success",
});
      navigate("/");
    } catch (error) {
              Swal.fire({
  title: "Invalid email or password!",
icon: "error",
});
  
    }
  };

  return (
    <>

 <section className="Login">
      <div className="container-fluid">
        <div className="row min-vh-100">
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center p-4">
            <form onSubmit={handleSubmit(onSubmit)} className="w-100" style={{ maxWidth: "400px" }}>
              <div className="text-center">
                <img src="/images/Brand Logo.png" alt="" className="img-fluid" />
              </div>
              <h2 className="fw-bold h1 text-center mt-4">LOGIN</h2>

         
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">Email</label>
                <input
                  type="email"
                  id="Email"
                  className="form-control"
                  placeholder="Enter your email..."
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email format"
                    }
                  })}
                />
                {errors.email && <p className="text-danger mt-1">{errors.email.message}</p>}
              </div>

         
              <div className="mb-3">
                <label htmlFor="Password" className="form-label">Password</label>
                <input
                  type="password"
                  id="Password"
                  className="form-control"
                  placeholder="Enter your password..."
                  {...register("password", {
                    required: "Password is required"
                  })}
                />
                {errors.password && <p className="text-danger mt-1">{errors.password.message}</p>}
              </div>

       
              <div className="mb-3">
                <button type="submit" className="btn btn-primary w-100 fw-bold">LOGIN</button>
              </div>

              <p className="text-center">
                Don’t have an account? <Link to="/register" className="text-primary">Register</Link>
              </p>
            </form>
          </div>
          <div className="col-12 col-md-6 p-0 d-none d-md-block h-100 overflow-hidden">
            <img src="/images/BG.png" alt="" className="w-100 vh-100"     style={{ objectFit: "cover" }}/>
          </div>
        </div>
      </div>
    </section>



 
    </>
  )
}

export default Login