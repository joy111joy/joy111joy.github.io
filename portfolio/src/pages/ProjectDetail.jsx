import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/projects.json'; // Import your JSON file

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find((proj) => proj.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className='ProjectsDetails'>
      <h1 className='ProjectName'>{project.name}</h1>
      {/* Split description by '\n\n' and map to <p> tags */}
      {project.description.split('\n\n').map((paragraph, index) => (
        <p key={index} className='ProjectDesc'>{paragraph}</p>
      ))}
    </div>
  );
};

export default ProjectDetail;
