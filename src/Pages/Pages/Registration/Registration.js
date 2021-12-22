import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import "./Registration.css";
import useAuth from "../../../hooks/useAuth";
import { useHistory } from "react-router";

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
    <div>
      <Container>
        <Row>
          <Col sx={12} md={12}>
            {!isLoading && (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="registration-from"
              >
                {/* register your input into the hook by invoking the "register" function */}
                <input
                  defaultValue="Your Name"
                  {...register("name", { required: true })}
                />

                {/* include validation with required or other standard HTML validation rules */}
                <input
                  defaultValue="Your Email"
                  {...register("email", { required: true })}
                />
                <input
                  defaultValue="Password"
                  {...register("password", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
              </form>
            )}
            {isLoading && <Spinner animation="grow" />}
            {user?.email && alert("User created Successfully")}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Registration;
