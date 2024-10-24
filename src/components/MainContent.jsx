import React from 'react';

const MainContent = () => {
  return (
    <section className="position-relative">
  <div className="vw-60">
    <img 
      className="img-fluid" 
      src="https://images.unsplash.com/photo-1509453721491-c3af5961df76?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      alt="City Planning" 
    />
    <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
      <h2>Building Sustainable Cities Together</h2>
      <p>Join us in planning for a better future.</p>
      <a href="#features" className="btn btn-primary">Learn More</a>
    </div>
  </div>
</section>
  );
};

export default MainContent;