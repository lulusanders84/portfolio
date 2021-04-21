interface IContact {
  url: string
  title: string
  imageSrc: string
  alt: string
}

export const contacts: {[index: string]: IContact} = {
  "github": {
    url:"https://github.com/lulusanders84",
    title:"Github",
    imageSrc:"%PUBLIC_URL%/images/w-github-logo.png",
    alt:"Github Link"
  },
  "gmail": {
    url: "mailto:lucyhsanders@gmail.com", 
    title:"Gmail", 
    imageSrc:"%PUBLIC_URL%/images/gmail-logo.png", 
    alt:"Gmail Link"
  },
  "linkedIn": {
    url: "https://www.linkedin.com/in/lucy-sanders-b1333799/",
    title:"LinkedIn", 
    imageSrc:"%PUBLIC_URL%/images/linkedin-logo.png", 
    alt:"LinkedIn Link" 
  }
}