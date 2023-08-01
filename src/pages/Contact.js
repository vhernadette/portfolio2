import React, { useState } from "react";
import '../styles/Contact.css';

function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phone) => {
    // Check if the phone number is 11 digits
    return /^\d{11}$/.test(phone);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields
    if (fullName === "") {
      setError("Please enter your Full Name.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid Email Address.");
      return;
    }

    if (!validatePhoneNumber(phone)) {
      setError("Please enter a 11-digit Philippine Phone Number.");
      return;
    }

    if (message === "") {
      setError("Please enter a message.");
      return;
    }

    // Clear the error and show the prompt for a successfully sent message
    setError("");
    window.alert("Message sent successfully!");

    // Clear the form fields
    setFullName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <h1> CONTACT ME</h1>
        <form id="contact-form" onSubmit={handleFormSubmit}>
          <label htmlFor="name"></label>
          <input
            name="name"
            placeholder="Enter full name..."
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <label htmlFor="email"></label>
          <input
            name="email"
            placeholder="Enter email..."
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="phone"></label>
          <input
            name="phone"
            placeholder="Enter phone number..."
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor="message"></label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {error && <div className="error-message">{error}</div>}
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
