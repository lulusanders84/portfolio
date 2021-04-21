import React from 'react'
import { contacts } from '../data/contacts.ts'
import Contact from './Contact'


export default function ContactMe() {
  return (
  <ul class="contact-me">
        <li>Contact Me: </li>
        {Object.keys(contacts).map(contact => <Contact key={contact} {...contacts[contact]} />)}
      </ul>
  )
}