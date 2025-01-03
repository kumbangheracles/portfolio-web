import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx7DxKjSdVp3QpNq-oASF-vi7bLIMw2aFbXzm7dhQsqW-K3LRslbFjVlwz21ZC-k4Pp5w/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const result = await response.json();

      if (result.status === "success") {
        setStatus("Message sent successfully");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message");
      }
    } catch (error) {
      console.error("Error: ", error);
      setStatus("Error submitting data. Please try again later. ");
    }
  };
  return (
    <section className="contact" id="Contact">
      <div className="contact-wrapper">
        <h4>Contact</h4>
        <form action="" className="form-contact" onSubmit={handleSubmit}>
          <div className="form-wrapper">
            <label htmlFor="first-name">First Name :</label>
            <input
              type="text"
              id="first-name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-wrapper">
            <label htmlFor="last-name">Last Name :</label>
            <input
              type="text"
              id="last-name"
              name="lastName"
              onChange={handleChange}
              value={formData.lastName}
              required
            />
          </div>
          <div className="form-wrapper">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>
          <div className="form-wrapper">
            <textarea
              name="message"
              id="text-message-contact"
              placeholder="Write something . . . ."
              onChange={handleChange}
              value={formData.message}
            ></textarea>
            <button type="submit">Submit</button>
          </div>
        </form>
        {status && <p>{status}</p>}
      </div>
    </section>
  );
}
