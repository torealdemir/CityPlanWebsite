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
            <p className="lead mb-4">Join us in planning for a better future.Lorem ipsum odor amet, consectetuer adipiscing elit. Elementum pellentesque mollis curae rhoncus arcu. Tincidunt consequat nisi porttitor ridiculus massa aliquet, cursus laoreet cursus. Natoque fermentum elit vulputate elit vestibulum tincidunt lacinia tempor amet. Nam diam senectus lacinia malesuada congue dictum. Ante montes eu augue vehicula pellentesque ultrices. Vivamus aliquet mus tellus quis quis.

Fusce aptent nascetur sit vestibulum montes. Mi nostra pellentesque porttitor metus leo praesent sociosqu. Praesent volutpat venenatis phasellus morbi efficitur nulla. Ligula integer interdum donec; sed pellentesque senectus. Est habitasse mauris tellus erat eros, nibh ut egestas eget. In porta condimentum nam dis dapibus. Porta mi vel porttitor iaculis montes torquent tempus. Euismod dis taciti feugiat erat dolor parturient sollicitudin.

Interdum scelerisque feugiat congue habitant parturient convallis. Laoreet eleifend posuere dolor duis euismod mollis aliquet. Facilisis interdum molestie class pulvinar velit aliquam. Eu orci metus dictum tincidunt malesuada ornare odio litora? Consequat convallis odio fusce himenaeos nam luctus. Commodo venenatis ipsum curabitur erat viverra quis ullamcorper mus hac. Sapien mauris praesent proin ornare ultricies quisque nam semper ad. Porttitor tempor porta fringilla; mauris montes luctus vitae. Lacus ac congue eget, tincidunt semper commodo aliquam arcu?

Eros tincidunt mauris libero molestie class sem potenti suscipit. Turpis dignissim aliquam habitasse mus primis pellentesque senectus. Habitasse massa nulla litora per nam turpis massa scelerisque. Nunc viverra suscipit ridiculus tincidunt in mollis congue. Pulvinar suspendisse fusce cras taciti laoreet arcu consequat ornare. Risus nunc ipsum rutrum suspendisse aliquam magnis netus ad. Maecenas cubilia odio curae proin fermentum amet.

Nam ultrices nullam ultrices dapibus dis interdum ipsum pulvinar. Dignissim ornare volutpat elit dui senectus arcu. Suscipit fames arcu convallis pulvinar habitant tellus. Bibendum magnis dignissim curabitur mauris lacus at elementum odio. Pellentesque adipiscing arcu ad maximus tincidunt at vehicula tempus consectetur. Proin penatibus quam senectus, iaculis quisque finibus sodales. Netus bibendum non ad primis ornare maximus quisque. Sem sollicitudin nunc varius mollis nibh rutrum laoreet primis.</p>
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
