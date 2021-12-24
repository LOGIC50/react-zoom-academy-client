import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Alert, Container, Spinner } from "react-bootstrap";
import "./Login.css";
import useAuth from "../../../hooks/useAuth";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";

const Login = () => {
  const [show, setShow] = useState(true);
  const [loginData, setLoginData] = useState({});

  const { loginUser, isLoading, user, authError, signInWithGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setLoginData(data);
    loginUser(loginData.email, loginData.password, location, history);
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <div className="login-page">
      <Container className="registration-portion">
        <div>
          {!isLoading && (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="registration-from"
            >
              <h3 style={{ fontWeight: "600" }}>LOGIN</h3>
              <input
                placeholder="Your Email"
                {...register("email", { required: true })}
              />
              <input
                type="number"
                name="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
              <input type="submit" />
              <button
                onClick={handleGoogleSignIn}
                sx={{ width: "75%", m: 1 }}
                className="button-34"
              >
                Google Sign In
              </button>
              <hr />
              <Link style={{ textDecoration: "none" }} to="/registration">
                <button className="button-62">New User? Please Register</button>
              </Link>
            </form>
          )}
          {isLoading && <Spinner animation="grow" />}
          {user?.email && (
            <Alert
              style={{ width: "40%", margin: "auto" }}
              variant="success"
              dismissible
            >
              Login successfully
            </Alert>
          )}
          {authError && <Alert variant="danger">{authError}</Alert>}
        </div>
      </Container>
    </div>
  );
};

export default Login;
