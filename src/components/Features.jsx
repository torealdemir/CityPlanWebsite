import React from 'react';

const Features = () => {
  return (
    <div className='d-flex align-items-center justify-content-center text-secondary py-5'>
    <section id="features" className="text-center">
        <h3 className="mb-4">Our Features</h3>
        <ul className="list-unstyled">
            <li className="py-2">
                <i className="fas fa-chart-line fa-2x me-2"></i>
                <span>Data-Driven Planning</span>
            </li>
            <li className="py-2">
                <i className="fas fa-comments fa-2x me-2"></i>
                <span>Community Engagement</span>
            </li>
            <li className="py-2">
                <i className="fas fa-leaf fa-2x me-2"></i>
                <span>Sustainability Initiatives</span>
            </li>
            <li className="py-2">
                <i className="fas fa-building fa-2x me-2"></i>
                <span>Smart Urban Design</span>
            </li>
            <li className="py-2">
                <i className="fas fa-bicycle fa-2x me-2"></i>
                <span>Eco-Friendly Transport Solutions</span>
            </li>
            <li className="py-2">
                <i className="fas fa-users fa-2x me-2"></i>
                <span>Inclusive Community Spaces</span>
            </li>
        </ul>
    </section>
</div>
   
  );
};

export default Features;