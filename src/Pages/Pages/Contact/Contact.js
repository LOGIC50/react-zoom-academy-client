import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { Container } from "react-bootstrap";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_falkuob",
        form.current,
        "user_p0OAJuaEwDb1AvxTcaKEV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-container">
      <Container className="contact-form-div">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <h3>Feel Free To Contact Us</h3>
          <label>Name</label>
          <input type="text" name="user_name" required />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" required />
        </form>
      </Container>
    </div>
  );
};

export default Contact;
