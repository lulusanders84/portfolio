import React from 'react'
import { techs } from '../data/techs'

export default function TechStack({stack}) {
  const tech = stack.map(tech => {
    for(let i=0; i<techs.length; i++){
      if(techs[i].name === tech) {
        tech = techs[i];
        break;
      }
    }
    return (
    <li>
      <a href={tech.url} target="blank">
        <img title={tech.name} src={`./images/${tech.src}`} alt={tech.name} />
      </a>
    </li>
    );
  })
  return (
    <div>
    <h4>Tech Stack:</h4>
      <ul class="stack">
        {tech}
      </ul>
    </div>
  )
}