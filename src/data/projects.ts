interface IProject {
  title: string
  repoUrl: string
  demoUrl: string | boolean
  img: string
  description: string
  stack: string[]
}
export const projects: IProject[] = [
  {
    title: "Review Notes",
    repoUrl: "review-notes",
    demoUrl: "http://d3lgs86kdm737g.cloudfront.net/dev",
    img: "review-notes",
    description: "Documentation tool used by clinicians at a health plan to create notes detailing case reviews. Features include a case tracker and case timer.",
    stack: ["HTML5", "CSS3", "JavaScript", "React.js", "Material-UI", "AWS"]
  },  
  {
    title: "Monitoring Dashboard",
    repoUrl: "monitoring",
    demoUrl: false,
    img: "dashboard",
    description: "A dashboard created to help technicians track downtime and response times for https. The dashboard also supports monitoring of FTP transfer times.",
    stack: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Material-UI", "Node.js", "AWS", "Serverless Stack"]
  },
  {
    title: "Artistogram",
    repoUrl: "artistogram",
    demoUrl: "https://artistogram-client.herokuapp.com/",
    img: "artistogram",
    description: `With Artistogram, users can enter an artist or band's name and then view a graphical representation of similar artists sorted by decade.
Users can then create a playlist comprised of songs by the similar artists.
By creating an account, users can save artistograms and playlists for later use.`,
    stack: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", 'Express.js', "Mongoose", "MongoDB"]
  },
  {
    title: "Nursing Reports",
    repoUrl: "nursing-reports",
    demoUrl: "https://stormy-savannah-14766.herokuapp.com/",
    img: "nursing-reports",
    description: `Easily accessible and well organized information is crucial to providing safe and efficient nursing care.
Nurses keep track and exchange information with the help of a nursing report (known as a brainsheet).
Traditionally handwritten, the report is updated frequently during the shift and used as an information source.
Nursing Reports provides an electronic version of a nursing brainsheet.`,
    stack: ["HTML5", "CSS3", "JavaScript", "jQuery", "Node.js", 'Express.js', "Mongoose", "MongoDB"]
  },
  {
    title: "World Cup 2018 Profiles",
    repoUrl: "World-Cup-2018-Country-Profiles",
    demoUrl: "https://lulusanders84.github.io/World-Cup-2018-Country-Profiles/",
    img: "world-cup",
    description: `This app provides a country profile for each of the 32 teams in the 2018 World Cup competition held in Russia.
          Within the country profile, users can view match results, a team squad and a brief history of the country's football
          team.`,
    stack: ["HTML5", "CSS3", "JavaScript", "jQuery"]
  },
];


