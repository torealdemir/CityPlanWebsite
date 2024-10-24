import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Contact Us</h2>
        
        <div className="text-center mb-4">
          <h3>Our Address</h3>
          <p>123 Your Street,</p>
          <p>Your City, Your Country</p>
          <h3>Email Us</h3>
          <p>info@yourdomain.com</p>
        </div><hr />

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <div className='text-center'><h2>Or Mail Us!</h2></div>
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control rounded"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control rounded"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              className="form-control rounded"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;