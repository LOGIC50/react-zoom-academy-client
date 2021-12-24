import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import "./Registration.css";
import useAuth from "../../../hooks/useAuth";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Registration = () => {
  const [loginData, setLoginData] = useState({});
  const { registerUser, isLoading, user, authError } = useAuth();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setLoginData(data);
    registerUser(loginData.email, loginData.password, loginData.name, history);
  };
  return (
    <div className="registration-page">
      <Container className="registration-portion">
        <div>
          {!isLoading && (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="registration-from"
            >
              <h3 style={{ fontWeight: "600" }}>Registration Form</h3>
              {/* register your input into the hook by invoking the "register" function */}
              <input
                placeholder="Your Name"
                {...register("name", { required: true })}
              />

              {/* include validation with required or other standard HTML validation rules */}
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
              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" />
              <hr />
              <Link style={{ textDecoration: "none" }} to="/login">
                <button className="button-29">
                  Already Registered? Please Login
                </button>
              </Link>
            </form>
          )}
          {isLoading && <Spinner animation="grow" />}
          {user?.email && (
            <Alert style={{ width: "40%", margin: "auto" }} variant="success">
              User Created successfully
            </Alert>
          )}
          {authError && <Alert variant="danger">{authError}</Alert>}
        </div>
      </Container>
    </div>
  );
};

export default Registration;
