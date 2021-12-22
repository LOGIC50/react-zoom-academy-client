import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="mx-auto mt-5 p-3 border border-secondary text-start w-50  login-form">
      <form >
        <h3 className="text-primary text-center">Please Login</h3>
        <div className="row mb-3">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input type="text"  className="form-control" id="inputName" placeholder="Your Name " />
          </div>
        </div>}
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail3" required />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword3" required />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck1" />
              <label className="form-check-label" htmlFor="gridCheck1">
                Already Registered?
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-3 text-danger"></div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
                <div>-----or-----</div>
                <button 
                className='btn-regular'
                 >Google Sign In</button>
            </div>
    );
};

export default Login;