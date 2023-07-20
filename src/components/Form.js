import "./FormStyle.css";

import React from 'react';

const FormPage = () => {
  return (
    <div class="container">
    <h1>Contact Us!!</h1>
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" placeholder="Enter your name" required />

      <label for="email">Email:</label>
      <input type="email" id="email" placeholder="Enter your email" required />

      <label for="message">Message:</label>
      <textarea id="message" placeholder="Enter your message" required></textarea>

      <button type="submit" className="btn">Submit</button>
    </form>
  </div>
  );
}

export default FormPage;