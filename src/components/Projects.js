import React, { useState, useEffect } from 'react';
import '../styles/Projects.css';
import { data } from './data';
import Close from '../img/close.svg';
import seelive from '../img/seelive.png';
import seesource from '../img/seesource.png';


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
      <div className="section-title">
        <h2>My Recent Works</h2>
        <div className='line'></div>
      </div>
      <div className="projects-card">
      {data.map((project, index) => (
        <div
          className='con b1transform'
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
                  <li className={`${tech}-1 seetech`} key={techIndex}>
                    <p className={tech}>{tech}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="seeproject">
              <button className="Acbutt button-color" onClick={() => handleClick(project)}>{project.buttontext}</button>
            </div>
          </div>
        </div>
      ))}
      </div>
      <div className="project-info">
      {selectedProject && (
        <div className={`project-details ${selectedProject ? 'show-details' : ''}`}>
            <div className='project-details-head'>
            <h2>{selectedProject.name}</h2>
              <img src={ Close } alt="menu" className='btransform close-button' onClick={closeDetails}/>
            </div>
              <ul className="languages">
                {selectedProject.technologies.map((tech, techIndex) => (
                  <li className={`${tech}-1 pdtech`} key={techIndex}>
                    <p className={tech}>{tech}</p>
                  </li>
                ))}
              </ul>
              <div className='image-links'>
              <img
              className='detailsimage'
                        src={selectedProject.imagesource}
                        alt={selectedProject.altmessage}
                        style={{ width: '40%' }}
                    />
                <div>
                <p className='selectdescription'>{selectedProject.longdescription}</p>
              <div className="project-links">
                    <a href={selectedProject.livelink[0]} className="livelink button-color" target="_blank" rel="noopener noreferrer">
                      {selectedProject.livelink[1]}
                      <img src={seelive} alt='see live' />
                      </a>
                    <a href={selectedProject.sourcelink[0]} className="sourcelink button-color" target="_blank" rel="noopener noreferrer">
                      {selectedProject.sourcelink[1]}
                      <img src={ seesource } alt='see source' />
                      </a>
                </div>
                </div>
              </div>
        </div>
      )}
      </div>
    </section>
  );
};

export default Projects;
