import React from 'react';
import Features from './Features';
import { Link } from 'react-router-dom';
import './Home.css'; // CSS dosyasını eklemeyi unutmayın

const Home = () => {
  return (
    <section className="home-section position-relative text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <img 
              className="img-fluid rounded mb-4" 
              src="https://images.unsplash.com/photo-1509453721491-c3af5961df76?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="City Planning" 
            />
            <h2 className="display-4">Building Sustainable Cities Together</h2>
            <p className="lead mb-4">Join us in planning for a better future.</p>
            <a href="#features" className="btn btn-primary btn-lg">Learn More</a>
          </div>
        </div>
      
        <div className="mt-5 text-center">
          <h3 className="font-weight-bold">Why Choose Us?</h3>
          <p className="mb-4">We focus on innovative solutions that promote sustainability and enhance urban living.</p>
          
          <ul className="list-unstyled why-choose-list">
            <li className="eco-item">🌱 Eco-friendly Infrastructure</li>
            <li className="transport-item">🚴‍♀️ Promoting Public Transport</li>
            <li className="community-item">🌍 Community Engagement</li>
            <li className="green-item">🏞️ Green Spaces for All</li>
          </ul>
          
          <div className="m-4">
            <a href="#services" className="btn btn-secondary me-3 btn-lg">Our Services</a>
            <Link className="btn btn-outline-light btn-lg mt-3" to="/contact">Contact Us!</Link>
          </div>
        </div>
      </div>
      <Features />
    </section>
  );
};

export default Home;
