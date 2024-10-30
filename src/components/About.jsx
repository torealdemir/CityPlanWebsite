import React from 'react';
import './About.css'; // Import custom styles

const About = () => {
    return (
        <section className="about-section py-5 bg-light text-dark">
            <div className="container">
                <img className='img-fluid' src='https://images.unsplash.com/photo-1650627196344-9b8be77537c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                <h2 className="text-center mb-4 display-4">About Us</h2>
                <p className="text-center mb-5 lead">
                    At <strong>City Builders</strong>, we are dedicated to creating sustainable urban environments that enhance the quality of life for all residents. Our team of experts combines innovative design with community engagement to build cities that are both functional and beautiful.
                </p>
                
                <h3 className="mb-3 h2">Our Mission</h3>
                <p className="mb-4">
                    Our mission is to lead the way in sustainable city planning and development. We aim to build cities that:
                </p>

                <ul className="list-unstyled mb-5">
                    <li>🌿 Promote environmental sustainability</li>
                    <li>🤝 Enhance public health and well-being</li>
                    <li>🌍 Encourage community involvement and cohesion</li>
                </ul>

                <h3 className="mb-3 h2">Our Approach</h3>
                <p className="mb-4">
                    At <strong>ProPlan</strong>, we take a comprehensive approach to city planning. We believe that every project starts with understanding the unique character of the community. By engaging with local stakeholders and residents, we gather insights that inform our planning process. Our methodology includes:
                </p>

                <ul className="list-unstyled mb-5">
                    <li>📣 <strong>Community Engagement</strong>: Prioritizing the voices of the community through workshops and surveys.</li>
                    <li>♻️ <strong>Sustainability</strong>: Minimizing environmental impact with green infrastructure and energy-efficient solutions.</li>
                    <li>🚀 <strong>Innovation</strong>: Using the latest technology to enhance connectivity and livability.</li>
                    <li>🌐 <strong>Equity and Inclusion</strong>: Promoting equity and ensuring marginalized voices are heard.</li>
                </ul>

                <h3 className="mb-3 h2">Our Values</h3>
                <ul className="list-unstyled mb-5">
                    <li>🌿 <strong>Sustainability</strong>: Eco-friendly practices in all projects.</li>
                    <li>🤝 <strong>Collaboration</strong>: Working closely with communities and stakeholders.</li>
                    <li>🔍 <strong>Innovation</strong>: Embracing new technologies to improve urban living.</li>
                </ul>

                <h3 className="mb-3 h2">Implementation Strategy</h3>
                <ol className="mb-5">
                    <li><strong>Research & Analysis</strong>: Understanding the unique needs of each community.</li>
                    <li><strong>Design & Planning</strong>: Creating visionary plans balancing aesthetics and functionality.</li>
                    <li><strong>Implementation</strong>: Collaborating with local authorities for seamless execution.</li>
                    <li><strong>Community Engagement</strong>: Ensuring resident involvement in the planning process.</li>
                </ol>

                <h3 className="mb-3 h2">Join Us</h3>
                <p className="lead">
                    We invite you to join us in our mission to build sustainable cities for future generations. Together, we can create urban spaces that thrive.
                </p>
            </div>
        </section>
    );
};

export default About;