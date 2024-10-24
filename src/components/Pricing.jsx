import React from 'react';

const Pricing = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center">Pricing Plans</h1>
            <div className="row mt-4">
                <div className="col-md-4">
                    <div className="card">
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
                    <div className="card">
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