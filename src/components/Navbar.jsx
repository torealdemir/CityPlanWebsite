import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand fs-1 pl-2" to="/" style={{ fontFamily:'Rubik Mono One, sans-serif'}}>ProPlan</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse pl-4" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link><hr />
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link><hr />
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">Projects</Link><hr />
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pricing">Pricing</Link><hr />
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
        </div>
    );
};

export default Navbar;