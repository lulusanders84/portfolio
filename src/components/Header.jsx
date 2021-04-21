export default function Header({heading, imageSrc, alt}) {
  return (
  <header role="banner">
    <h1>{heading}</h1>
    <img src={imageSrc} alt={alt} />
  </header>
  )
}