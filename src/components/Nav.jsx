import React from 'react'
import ContactMe from './ContactMe'


export default function Nav() {
  return (
    <nav role="navigation">
      {/*<ul>
        //add reactrouter to link on the page
        <li><a href="#bio">Bio</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul> */}
      <ContactMe />
    </nav>
  )
}