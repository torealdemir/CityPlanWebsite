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
              src="https://i.pinimg.com/736x/f1/e0/d3/f1e0d3240681d9d2fedec6540665bf33.jpg" 
              alt="City Planning" 
            />
            <h2 className="display-4">Sürdürülebilir, Yaşanılabilir Ve Dirençli Şehirler Planlıyoruz</h2>
            <p className='lead mb-4'>Sürdürülebilir ,kentin ihtiyaçlarını karşılayıcı gelişme ile günümüzden gelecek kuşaklara kentin doğal,tarihi yapısını ve kapasitesini koruyarak planlama ile gelecek nesillere aktarmak.</p>
            <a href="#features" className="btn btn-primary btn-lg">Learn More</a>
          </div>
        </div>
      
        <div className=" text-center">
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
