import React from 'react';

const Home = () => {
  return (
    <section className="position-relative bg-dark text-light py-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <img 
            className="img-fluid rounded" 
            src="https://images.unsplash.com/photo-1509453721491-c3af5961df76?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="City Planning" 
          />
          <div className="position-absolute top-50 start-50 translate-middle text-center">
            <h2 className="display-4">Building Sustainable Cities Together</h2>
            <p className="lead">Join us in planning for a better future.</p>
            <a href="#features" className="btn btn-primary btn-lg">Learn More</a>
          </div>
        </div>
      </div>
    
      <div className="mt-5 text-center">
        <h3 className="font-weight-bold">Why Choose Us?</h3>
        <p className="mb-4">We focus on innovative solutions that promote sustainability and enhance urban living.</p>
        
        <ul className="list-unstyled">
          <li className="bg-success text-white p-2 rounded mb-2">🌱 Eco-friendly Infrastructure</li>
          <li className="bg-info text-white p-2 rounded mb-2">🚴‍♀️ Promoting Public Transport</li>
          <li className="bg-warning text-dark p-2 rounded mb-2">🌍 Community Engagement</li>
          <li className="bg-success text-white p-2 rounded mb-2">🏞️ Green Spaces for All</li>
        </ul>
        
        <div className="mt-4">
          <a href="#services" className="btn btn-secondary me-3 btn-lg">Our Services</a>
          <a href="#contact" className="btn btn-outline-light btn-lg">Contact Us</a>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Home;