import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/projects.json'; // Import your JSON file
import { Link } from 'react-router-dom';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find((proj) => proj.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className='ProjectsDetails'>
      <div id="ImgCont">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <h1 className='ProjectName'>{project.name}</h1>
      
      {/* Split description by '\n\n' and map to <p> tags */}
      <div className='ProjImgBox'>
        <img src={process.env.PUBLIC_URL + '/' + project.ImgOne} alt={project.name} className='ImgOne'/>
        
        {/* Render ImgTwo only if it exists */}
        {project.ImgTwo && (
          <img src={process.env.PUBLIC_URL + '/' + project.ImgTwo} alt={project.name} className='ImgTwo'/>
        )}
      </div>
      
      {project.description.split('\n\n').map((paragraph, index) => (
        <p key={index} className='ProjectDesc'>{paragraph}</p>
      ))}
    </div>
  );
};

export default ProjectDetail;
