import React, { useState } from 'react';
import Map from './Map';

const Contact = () => {
  const email = "info@yplanproplanlama.com"
  const contact = "Contact!"
  const subject = "dasda"
  const body = "Hello, I am writing for..."
  return (
      <div className="container mb-3">
        <img className='img-fluid' src='https://plus.unsplash.com/premium_photo-1711984442168-ae0252fac778?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
         <h2 className="text-center mb-4">Contact Us</h2>
        
         <div className="text-center mb-4">
           <h3>Our Address</h3>
           <p>Kültür Mahallesi, Libya Caddesi No:64 Çankaya /ANKARA</p>
          <h3>Email Us</h3>
          <p>info@planproplanlama.com</p>
         </div><hr />
        <div>
          <h3 className="text-center">Or Just Mail Us!</h3>
          <a className='btn btn-primary me-3 btn-lg d-flex justify-content-center' href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}>Mail!</a>
        </div>
        <div className="vw-20 vh-30 mt-3">
        <Map />
        </div>
        
    </div>

   );
  }
export default Contact;