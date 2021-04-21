import React from 'react';
import { projects } from '../data/projects';
import ProjectsList from './ProjectsList';


export default function Projects() {
  return (
    <div>
      <h2 id="projects">Projects</h2>
      <p>Please spend some time perusing my projects.</p>
      <ProjectsList projects={projects} />      
    </div>

  )
}