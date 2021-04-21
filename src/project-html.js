function projectHtml(project) {
  return `<li class="js-project project">
            <section class="js-project-title project-title">
              <img class="js-arrow arrow expanded" src="images/arrow.png" alt='expand/collapse item'>
              <h3>${project.title}</h3>
              <a href="https://github.com/lulusanders84/${project.repoUrl}" target="blank">
                <img title="Github Repo" src="images/github-logo.png" alt="Github">
              </a>
              <a href="${project.demoUrl}" target="blank">
                <img title="Demo project" src="images/demo.png" alt="Demo">
              </a>
            </section>
            <section class="js-details details">
              <a href="${project.demoUrl}" target="blank">
                <img class="screenshot" src="images/${project.img}.png" alt="App Screenshot">
              </a>
              <p>
                ${project.description}
              </p>
              <h4>Tech Stack:</h4>
              <ul class="stack">
                ${stackList(project.stack)}
              </ul>
            </section>
          </li>`
}

function stackList(stack) {
  const tech = stack.map(tech => {
    for(let i=0; i<techs.length; i++){
      if(techs[i].name === tech) {
        tech = techs[i];
        break;
      }
    }
    return `<li>
      <a href=${tech.url} target="blank">
        <img title=${tech.name} src="images/${tech.src}" alt=${tech.name}>
      </a>
    </li>`;
  })
  return tech.join('');
}
