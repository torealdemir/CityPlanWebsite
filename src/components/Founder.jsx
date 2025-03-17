import React from 'react';
import { Link } from 'react-router-dom';

const Founder = () => {
    return (
        <div className="container mt-5">
            <div className="text-center">
                <img 
                    className="img-fluid rounded-circle shadow" 
                    src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
                    alt="Founder Vision"
                    style={{ width: '200px', height: '200px', objectFit: 'cover', marginBottom: '20px' }}
                />
                <h1 className="mt-3 text-success">Meet Our Founder</h1>
                <p className="lead text-muted">Crafting a sustainable future with passion and dedication</p>
            </div>
            <div className="row mt-5">
                <div className="col-md-12">
                    <div className="card shadow-lg border-0">
                        <div className="card-header bg-success text-white text-center py-4">
                            <h2>Jane Doe</h2>
                            <h3 className="font-italic">Founder & Chief Environmental Planner</h3>
                        </div>
                        <div className="card-body p-4">
                            <p className="text-justify mb-4" style={{ lineHeight: '1.8' }}>
                                With a vision to create sustainable and eco-friendly spaces, Jane Doe founded our company in 2010. 
                                She brings over 15 years of experience in environmental planning, urban design, and green architecture. 
                                Her mission is to balance economic growth with ecological preservation, ensuring a healthier planet for future generations.
                            </p>
                            <h4 className="text-success mt-4">Core Values:</h4>
                            <ul className="list-unstyled mt-3">
                                <li className="mb-2"><i className="bi bi-check-circle-fill text-success"></i> Commitment to Sustainability</li>
                                <li className="mb-2"><i className="bi bi-check-circle-fill text-success"></i> Community-Centric Solutions</li>
                                <li><i className="bi bi-check-circle-fill text-success"></i> Innovation in Environmental Planning</li>
                            </ul>
                            <p className="mt-4 text-justify" style={{ lineHeight: '1.8' }}>
                                Jane believes in the power of collaboration and innovation to address today's environmental challenges. 
                                Under her leadership, we have completed over 200 projects that have positively impacted local communities and ecosystems worldwide.
                            </p>
                        </div>
                        <div className="card-footer text-center bg-light py-4">
                             <Link className='btn btn-success btn-lg shadow-sm' to="/about">Learn More About Our Work</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Founder;
