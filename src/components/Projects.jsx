import React from 'react';

// Sample project data
const projectsData = [
  {
    id: 1,
    title: 'Green Urban Park',
    description: 'A large urban park designed to promote biodiversity and provide recreational spaces for the community.',
    image: 'https://images.unsplash.com/photo-1719304627715-bf5720e17d0f?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
  },
  {
    id: 2,
    title: 'Sustainable Transit Hub',
    description: 'A state-of-the-art transit hub designed to integrate various modes of transportation while minimizing environmental impact.',
    image: 'https://plus.unsplash.com/premium_photo-1679953782394-050faa36cc5d?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
  },
  {
    id: 3,
    title: 'Community Housing Development',
    description: 'Affordable housing solutions that focus on community engagement and sustainable living practices.',
    image: 'https://plus.unsplash.com/premium_photo-1675324517011-24d2c741c22f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
  },
  {
    id: 4,
    title: 'Smart City Infrastructure',
    description: 'Integrating technology into urban infrastructure to improve efficiency and quality of life.',
    image: 'https://plus.unsplash.com/premium_photo-1684450053094-33957b0a5795?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
  },
  {
    id: 5,
    title: 'Renewable Energy Initiative',
    description: 'A project focused on implementing renewable energy sources in urban settings.',
    image: 'https://plus.unsplash.com/premium_photo-1677672434452-2f16955332e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVuZXdhYmxlJTIwZW5lcmd5JTIwY29uc3RydWN0aW9ufGVufDB8fDB8fHww',
    link: '',
  },
  {
    id: 6,
    title: 'Urban Smart Lighting',
    description: 'Innovative lighting solutions to enhance safety and aesthetics in urban areas.',
    image: 'https://plus.unsplash.com/premium_photo-1681429767128-e451570160d7?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 pt-3">Our Projects</h2>
        <div className="row">
          {projectsData.map(project => (
            <div className="col-md-6 col-lg-4 mb-4 d-flex align-items-stretch" key={project.id}>
              <div className="card project-card w-100" style={{ minHeight: '400px' }}>
                <img 
                  src={project.image} 
                  className="card-img-top" 
                  alt={project.title} 
                  style={{ height: '200px', objectFit: 'cover' }} // Resmi belirli bir yükseklikte ayarlama
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.link} className="btn btn-primary mt-auto">View Details</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
