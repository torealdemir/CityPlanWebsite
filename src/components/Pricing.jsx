import React from 'react';

const Pricing = () => {
    return (
        <div className="container mt-5">
            <img className="img-fluid" src='https://images.unsplash.com/uploads/14123892966835548e7bd/14369636?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <h1 className="text-center mt-3">Pricing Plans</h1>
            <div className="row mt-4">
                <div className="col-md-4">
                    <div className="card mb-3">
                        <div className="card-header text-center">
                            <h2>Basic Plan</h2>
                            <h3>$10/month</h3>
                        </div>
                        <div className="card-body">
                            <ul className="list-unstyled">
                                <li>✔ Unlimited access</li>
                                <li>✔ Basic Support</li>
                                <li>✔ Community Access</li>
                            </ul>
                        </div>
                        <div className="card-footer text-center">
                            <button className="btn btn-primary">Choose Plan</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-3">
                        <div className="card-header text-center">
                            <h2>Standard Plan</h2>
                            <h3>$20/month</h3>
                        </div>
                        <div className="card-body">
                            <ul className="list-unstyled">
                                <li>✔ Everything in Basic</li>
                                <li>✔ Priority Support</li>
                                <li>✔ Access to Premium Content</li>
                            </ul>
                        </div>
                        <div className="card-footer text-center">
                            <button className="btn btn-primary">Choose Plan</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-5">
                    <div className="card">
                        <div className="card-header text-center">
                            <h2>Premium Plan</h2>
                            <h3>$30/month</h3>
                        </div>
                        <div className="card-body">
                            <ul className="list-unstyled">
                                <li>✔ Everything in Standard</li>
                                <li>✔ 24/7 Support</li>
                                <li>✔ Custom Features</li>
                            </ul>
                        </div>
                        <div className="card-footer text-center">
                            <button className="btn btn-primary">Choose Plan</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;