import React from 'react';
import './Projects.css';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  // Fetch projects data dynamically from translations
  const projectsData = t('projects.list', { returnObjects: true });

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 pt-3">{t('projects.title')}</h2>
        <div className="row">
          {projectsData.map((project, index) => (
            <div className="col-md-6 col-lg-4 mb-4 d-flex align-items-stretch" key={index}>
              <div className="card project-card w-100" style={{ minHeight: '400px' }}>
                <img
                  src={project.image} // If images are also in translations, include them in your JSON
                  className="card-img-top"
                  alt={project.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.link} className="btn btn-primary mt-auto">
                    {t('projects.viewDetails')}
                  </a>
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
