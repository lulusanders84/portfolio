import React, { useEffect, useState } from 'react';
import Project from './Project';


export default function ProjectsList({projects}) {
  const [expandAll, setExpandAll] = useState(true)
  const [menuButtonTitle, setMenuButtonTitle] = useState("Collapse Projects")

  useEffect(() => {
    setMenuButtonTitle(expandAll ? "Collapse Projects": "Expand Projects")
  }, [expandAll])
  
  const handleMenuButtonClick = (e) => {
    setExpandAll(!expandAll)
  }
  return (
  <div>
    <div class="view-all">
      <button onClick={handleMenuButtonClick}>{menuButtonTitle}</button>
    </div>
    <ul class="js-projects projects">
      {projects.map(project => <Project key={project.title} project={project} expand={expandAll}/>)}
    </ul> 
  </div>
  )
}
 