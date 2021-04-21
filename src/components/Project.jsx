import React, { useEffect, useState } from 'react';
import TechStack from './TechStack';

const classNames = {
  details: (expand) => expand ? "js-details details" : "js-details details inactive",
  arrow: (expand) => expand ? "js-arrow arrow expanded" : "js-arrow arrow" 
}
export default function Project({project, expand}) {
  const [expanded, setExpanded] = useState(expand)
  const [detailsClassName, setDetailsClassName] = useState(classNames.details(expanded))
  const [arrowClassName, setArrowClassName] = useState(classNames.arrow(expanded))
  
  useEffect(() => {
    setExpanded(expand)
  }, [expand])

  useEffect(() => {
    setDetailsClassName(classNames.details(expanded))
    setArrowClassName(classNames.arrow(expanded))
  }, [expanded])

  function handleProjectTitleClick() {
    setExpanded(!expanded)
    setDetailsClassName(classNames.details(expanded))
    setArrowClassName(classNames.arrow(expanded))
  }
  return (
    <li class="js-project project">
      <section class="js-project-title project-title" onClick={handleProjectTitleClick}>
        <img className={arrowClassName} src="/images/arrow.png" alt='expand/collapse item' />
        <h3>{project.title}</h3>
        <a href={"https://github.com/lulusanders84/" + project.repoUrl} target="blank">
          <img title="Github Repo" src="/images/github-logo.png" alt="Github" />
        </a>
        {project.demoUrl 
          ? <a href={project.demoUrl} target="blank">
              <img title="Demo project" src="/images/demo.png" alt="Demo" />
            </a>
          : null
        }
      </section>
      <section className={detailsClassName}>
        <a href={`${project.demoUrl}`} target="blank">
          <img class="screenshot" src={`/images/${project.img}.png`} alt="App Screenshot" />
        </a>
        <p>
          {project.description}
        </p>
        <TechStack stack={project.stack} />
      </section>
    </li>
  )
}