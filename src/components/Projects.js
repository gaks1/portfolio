import React, { useState } from 'react';
import '../styles/Projects.css';
import { data } from './data';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = (project) => {
    setSelectedProject(project);
  };

  const closeDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="works">
      {data.map((project, index) => (
        <div
          className='con'
          key={project.uniqueid}
          style={{
            backgroundImage: `url(${project.imagesource})`,
          }}
        >
          <div className="overlay">
            <div className="detailsblock">
              <h2 className="Text2">{project.name}</h2>
              <p className="description">{project.description}</p>
              <ul className="languages">
                {project.technologies.map((tech, techIndex) => (
                  <li className={`${tech}-1`} key={techIndex}>
                    <p className={tech}>{tech}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="seeproject">
              <button className="Acbutt" onClick={() => handleClick(project)}>{project.buttontext}</button>
            </div>
          </div>
        </div>
      ))}
      {selectedProject && (
        <div className="project-details">
            <div>
            <h2>{selectedProject.name}</h2>
              <button className="close-button" onClick={closeDetails}>
                Close
              </button>
            </div>
              <ul className="languages">
                {selectedProject.technologies.map((tech, techIndex) => (
                  <li className={`${tech}-1 pdtech`} key={techIndex}>
                    <p className={tech}>{tech}</p>
                  </li>
                ))}
              </ul>
              <div>
              <img
              className='detailsimage'
                        src={selectedProject.imagesource}
                        alt={selectedProject.altmessage}
                        style={{ width: '40%' }}
                    />
                <div>
                <p>{selectedProject.longdescription}</p>
              <div className="project-links">
                <button className="livelink">
                    <a href={selectedProject.livelink[0]}>{selectedProject.livelink[1]}</a>
                </button>
                <button className="sourcelink">
                    <a href={selectedProject.sourcelink[0]}>{selectedProject.sourcelink[1]}</a>
                </button>
                </div>
                </div>
              </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
