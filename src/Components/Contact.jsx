import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) return "First name is required.";
    if (!formData.lastName.trim()) return "Last name is required.";
    if (!formData.email.trim()) return "Email is required.";
    if (!formData.message.trim()) return "Message is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) return "Invalid email address.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    const validationError = validateForm();
    if (validationError) {
      setStatus(validationError);
      setLoading(false);
      return;
    }
    formData = new FormData(e.target);
    formData.append("access_key", "935761b6-f173-494f-8d17-13798e0dfa58");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: formData,
        // mode: "no-cors",
      });
      const result = await response.json();

      if (result.status === "success") {
        setStatus("Message sent successfully.");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error: ", error);
      setStatus("Error submitting data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="Contact">
      <div className="contact-wrapper">
        <h4>Contact</h4>
        <form className="form-contact" onSubmit={handleSubmit}>
          <div className="form-wrapper">
            <label htmlFor="first-name">First Name:</label>
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
            <label htmlFor="last-name">Last Name:</label>
            <input
              type="text"
              id="last-name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-wrapper">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-wrapper">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write something..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-wrapper">
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
        {status && <p>{status}</p>}
      </div>
    </section>
  );
}
