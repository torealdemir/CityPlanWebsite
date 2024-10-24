import React from 'react';

const About = () => {
    return (
        <section className="about-section py-5 bg-success">
            <div className="container">
                <h2 className="text-center mb-4">About Us</h2>
                <p className="text-center mb-5">
                    At <strong>City Builders</strong>, we are dedicated to creating sustainable urban environments that enhance the quality of life for all residents. Our team of experts combines innovative design with community engagement to build cities that are not only functional but also beautiful.
                </p>
                
                <h3 className="mb-3">Our Mission</h3>
                <p className="mb-4">
                    Our mission is to lead the way in sustainable city planning and development. We aim to build cities that:
                </p>
                <ul className="list-unstyled mb-5">
                    <li>🌿 Promote environmental sustainability</li>
                    <li>🤝 Enhance public health and well-being</li>
                    <li>🌍 Encourage community involvement and cohesion</li>
                </ul>

                <h3 className="mb-3">Our Values</h3>
                <ul className="list-unstyled mb-5">
                    <li>🌿 <strong>Sustainability</strong>: We prioritize eco-friendly practices in all our projects.</li>
                    <li>🤝 <strong>Collaboration</strong>: We believe in working closely with communities and stakeholders.</li>
                    <li>🔍 <strong>Innovation</strong>: We embrace new technologies and ideas to improve urban living.</li>
                </ul>

                <h3 className="mb-3">Our Approach</h3>
                <p className="mb-4">
                    Our approach to city building includes:
                </p>
                <ol className="mb-5">
                    <li><strong>Research & Analysis</strong>: Understanding the unique needs of each community.</li>
                    <li><strong>Design & Planning</strong>: Creating visionary plans that balance aesthetics and functionality.</li>
                    <li><strong>Implementation</strong>: Collaborating with local authorities and contractors for seamless execution.</li>
                    <li><strong>Community Engagement</strong>: Involving residents in the planning process to ensure their voices are heard.</li>
                </ol>

                <h3 className="mb-3">Join Us</h3>
                <p>
                    We invite you to join us in our mission to build sustainable cities for future generations. Together, we can create urban spaces that thrive.
                </p>
            </div>
        </section>
    );
};

export default About;