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
];

const Projects = () => {
  return (
    <section className="py-2 bg-light">
      <div className="container bg-success rounded">
        <h2 className="text-center mb-4 pt-3">Our Projects</h2>
        <div className="row">
          {projectsData.map(project => (
            <div className="col-md-6 col-lg-4 mb-4 p-2 rounded" key={project.id}>
              <div className="card">
                <img 
                  src={project.image} 
                  className="card-img-top" 
                  alt={project.title} 
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.link} className="btn btn-primary">View Details</a>
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