import React, { useState } from "react";

export default function TestContact() {
  const [result, setResult] = React.useState("");
  const [loading, setLoading] = useState(false);
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "935761b6-f173-494f-8d17-13798e0dfa58");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="contact" id="Contact">
      <div className="contact-wrapper">
        <h4>Contact</h4>
        <form className="form-contact" onSubmit={onSubmit}>
          <div className="form-wrapper">
            <label htmlFor="first-name">First Name:</label>
            <input
              type="text"
              id="first-name"
              name="firstName"
              //   value={formData.firstName}
              //   onChange={handleChange}
              required
            />
          </div>
          <div className="form-wrapper">
            <label htmlFor="last-name">Last Name:</label>
            <input
              type="text"
              id="last-name"
              name="lastName"
              //   value={formData.lastName}
              //   onChange={handleChange}
              required
            />
          </div>
          <div className="form-wrapper">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              //   value={formData.email}
              //   onChange={handleChange}
              required
            />
          </div>
          <div className="form-wrapper">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write something..."
              //   value={formData.message}
              //   onChange={handleChange}
              required
            />
          </div>
          <div className="form-wrapper">
            <button type="submit">{loading ? "Sending..." : "Submit"}</button>
          </div>
        </form>
        <p>{result}</p>
      </div>
    </section>
  );
}
