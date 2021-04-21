import React from 'react';


export default function Contact({url, title, imageSrc, alt}) {
  return (
    <li>
      <a href={url} target="blank">
        <img title={title} src={imageSrc} alt={alt} />
      </a>
    </li>
  )
}