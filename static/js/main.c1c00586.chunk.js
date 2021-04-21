(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,,,,,,,,,,function(e,t,r){},,function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var s=r(1),n=r.n(s),a=r(4),i=r.n(a),c=(r(10),r(0));function o(e){var t=e.children;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{id:"bio",children:"Bio"}),t]})}function l(e){var t=e.heading,r=e.imageSrc,s=e.alt;return Object(c.jsxs)("header",{role:"banner",children:[Object(c.jsx)("h1",{children:t}),Object(c.jsx)("img",{src:r,alt:s})]})}var j=r(5),p={github:{url:"https://github.com/lulusanders84",title:"Github",imageSrc:"%PUBLIC_URL%/images/w-github-logo.png",alt:"Github Link"},gmail:{url:"mailto:lucyhsanders@gmail.com",title:"Gmail",imageSrc:"%PUBLIC_URL%/images/gmail-logo.png",alt:"Gmail Link"},linkedIn:{url:"https://www.linkedin.com/in/lucy-sanders-b1333799/",title:"LinkedIn",imageSrc:"%PUBLIC_URL%/images/linkedin-logo.png",alt:"LinkedIn Link"}};function d(e){var t=e.url,r=e.title,s=e.imageSrc,n=e.alt;return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:t,target:"blank",children:Object(c.jsx)("img",{title:r,src:s,alt:n})})})}function u(){return Object(c.jsxs)("ul",{class:"contact-me",children:[Object(c.jsx)("li",{children:"Contact Me: "}),Object.keys(p).map((function(e){return Object(c.jsx)(d,Object(j.a)({},p[e]),e)}))]})}function h(){return Object(c.jsx)("nav",{role:"navigation",children:Object(c.jsx)(u,{})})}var m=[{title:"Review Notes",repoUrl:"review-notes",demoUrl:"http://d3lgs86kdm737g.cloudfront.net/dev",img:"review-notes",description:"Documentation tool used by clinicians at a health plan to create notes detailing case reviews. Features include a case tracker and case timer.",stack:["HTML5","CSS3","JavaScript","React.js","Material-UI","AWS"]},{title:"Monitoring Dashboard",repoUrl:"monitoring",demoUrl:!1,img:"dashboard",description:"A dashboard created to help technicians track downtime and response times for https. The dashboard also supports monitoring of FTP transfer times.",stack:["HTML5","CSS3","JavaScript","TypeScript","React.js","Material-UI","Node.js","AWS","Serverless Stack"]},{title:"Artistogram",repoUrl:"artistogram",demoUrl:"https://artistogram-client.herokuapp.com/",img:"artistogram",description:"With Artistogram, users can enter an artist or band's name and then view a graphical representation of similar artists sorted by decade.\nUsers can then create a playlist comprised of songs by the similar artists.\nBy creating an account, users can save artistograms and playlists for later use.",stack:["HTML5","CSS3","JavaScript","React.js","Node.js","Express.js","Mongoose","MongoDB"]},{title:"Nursing Reports",repoUrl:"nursing-reports",demoUrl:"https://stormy-savannah-14766.herokuapp.com/",img:"nursing-reports",description:"Easily accessible and well organized information is crucial to providing safe and efficient nursing care.\nNurses keep track and exchange information with the help of a nursing report (known as a brainsheet).\nTraditionally handwritten, the report is updated frequently during the shift and used as an information source.\nNursing Reports provides an electronic version of a nursing brainsheet.",stack:["HTML5","CSS3","JavaScript","jQuery","Node.js","Express.js","Mongoose","MongoDB"]},{title:"World Cup 2018 Profiles",repoUrl:"World-Cup-2018-Country-Profiles",demoUrl:"https://lulusanders84.github.io/World-Cup-2018-Country-Profiles/",img:"world-cup",description:"This app provides a country profile for each of the 32 teams in the 2018 World Cup competition held in Russia.\n          Within the country profile, users can view match results, a team squad and a brief history of the country's football\n          team.",stack:["HTML5","CSS3","JavaScript","jQuery"]}],g=r(2),b=[{name:"Serverless Stack",url:"https://serverless-stack.com/",src:"serverless.png"},{name:"TypeScript",url:"https://typescriptlang.com",src:"typescript.png"},{name:"Material-UI",url:"https://material-ui.com/",src:"material-ui.svg"},{name:"AWS",url:"https://aws.amazon.com/",src:"aws.png"},{name:"HTML5",url:"https://www.w3.org/html/",src:"html-logo.png"},{name:"CSS3",url:"https://www.w3.org/css/",src:"css3-logo.png"},{name:"JavaScript",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",src:"javascript-logo.png"},{name:"jQuery",url:"https://jquery.com/",src:"jquery-logo.png"},{url:"https://reactjs.org/",name:"React.js",src:"react-logo.png"},{url:"https://nodejs.org/",name:"Node.js",src:"nodejs-logo.png"},{url:"https://expressjs.com/",name:"Express.js",src:"express-logo.png"},{url:"https://mongoosejs.com/",name:"Mongoose",src:"mongoose-logo.png"},{url:"https://www.mongodb.com/",name:"MongoDB",src:"mongodb-logo.png"}];function f(e){var t=e.stack.map((function(e){for(var t=0;t<b.length;t++)if(b[t].name===e){e=b[t];break}return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.url,target:"blank",children:Object(c.jsx)("img",{title:e.name,src:"%PUBLIC_URL%/images/".concat(e.src),alt:e.name})})})}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Tech Stack:"}),Object(c.jsx)("ul",{class:"stack",children:t})]})}var O=function(e){return e?"js-details details":"js-details details inactive"},x=function(e){return e?"js-arrow arrow expanded":"js-arrow arrow"};function v(e){var t=e.project,r=e.expand,n=Object(s.useState)(r),a=Object(g.a)(n,2),i=a[0],o=a[1],l=Object(s.useState)(O(i)),j=Object(g.a)(l,2),p=j[0],d=j[1],u=Object(s.useState)(x(i)),h=Object(g.a)(u,2),m=h[0],b=h[1];return Object(s.useEffect)((function(){o(r)}),[r]),Object(s.useEffect)((function(){d(O(i)),b(x(i))}),[i]),Object(c.jsxs)("li",{class:"js-project project",children:[Object(c.jsxs)("section",{class:"js-project-title project-title",onClick:function(){o(!i),d(O(i)),b(x(i))},children:[Object(c.jsx)("img",{className:m,src:"%PUBLIC_URL%/images/arrow.png",alt:"expand/collapse item"}),Object(c.jsx)("h3",{children:t.title}),Object(c.jsx)("a",{href:"https://github.com/lulusanders84/"+t.repoUrl,target:"blank",children:Object(c.jsx)("img",{title:"Github Repo",src:"%PUBLIC_URL%/images/github-logo.png",alt:"Github"})}),t.demoUrl?Object(c.jsx)("a",{href:t.demoUrl,target:"blank",children:Object(c.jsx)("img",{title:"Demo project",src:"%PUBLIC_URL%/images/demo.png",alt:"Demo"})}):null]}),Object(c.jsxs)("section",{className:p,children:[Object(c.jsx)("a",{href:"".concat(t.demoUrl),target:"blank",children:Object(c.jsx)("img",{class:"screenshot",src:"%PUBLIC_URL%/images/".concat(t.img,".png"),alt:"App Screenshot"})}),Object(c.jsx)("p",{children:t.description}),Object(c.jsx)(f,{stack:t.stack})]})]})}function k(e){var t=e.projects,r=Object(s.useState)(!0),n=Object(g.a)(r,2),a=n[0],i=n[1],o=Object(s.useState)("Collapse Projects"),l=Object(g.a)(o,2),j=l[0],p=l[1];Object(s.useEffect)((function(){p(a?"Collapse Projects":"Expand Projects")}),[a]);return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{class:"view-all",children:Object(c.jsx)("button",{onClick:function(e){i(!a)},children:j})}),Object(c.jsx)("ul",{class:"js-projects projects",children:t.map((function(e){return Object(c.jsx)(v,{project:e,expand:a},e.title)}))})]})}function S(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{id:"projects",children:"Projects"}),Object(c.jsx)("p",{children:"Please spend some time perusing my projects."}),Object(c.jsx)(k,{projects:m})]})}r(12),r(13);var w=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(h,{}),Object(c.jsx)(l,{heading:"Lucy Sanders",imageSrc:"%PUBLIC_URL%/images/headshot.png",alt:"bitmoji headshot"}),Object(c.jsxs)("main",{role:"main",children:[Object(c.jsxs)(o,{children:[Object(c.jsx)("p",{children:"Hi, my name is Lucy. I am a fullstack developer with a passion for solving problems creatively."}),Object(c.jsxs)("p",{children:["I recently graduated from the Fullstack Flex Web Development program at ",Object(c.jsx)("a",{href:"https://thinkful.com",target:"blank",children:"Thinkful"}),". I love using JS frameworks and implementing libraries to create clean, well-written code. Uniting a speedy backend with a beautiful frontend is my happy place!"]}),Object(c.jsx)("p",{children:"While away from the keyboard, I can usually be found hiking with my dogs or exploring the area around Western Colorado."})]}),Object(c.jsx)(S,{})]})]})},y=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,15)).then((function(t){var r=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;r(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(w,{})}),document.getElementById("root")),y()}],[[14,1,2]]]);
//# sourceMappingURL=main.c1c00586.chunk.js.map