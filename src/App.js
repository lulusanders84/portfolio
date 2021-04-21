import Bio from './components/Bio';
import Header from './components/Header';
import Nav from './components/Nav';
import Projects from './components/Projects';
import './normalize.css';
import './main.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header heading="Lucy Sanders" imageSrc="./images/headshot.png" alt="bitmoji headshot" />
      <main role="main">
        <Bio>
          <p>Hi, my name is Lucy. I am a fullstack developer with a passion for solving problems creatively.</p>
          <p>
            I recently graduated from the Fullstack Flex Web Development program at <a href="https://thinkful.com" target="blank">Thinkful</a>. I love using JS frameworks and implementing
            libraries to create clean, well-written code. Uniting a speedy backend with a beautiful frontend is my happy place!
          </p>
          <p>
            While away from the keyboard, I can usually be found hiking with my dogs
            or exploring the area around Western Colorado.
          </p>  
        </Bio>
        <Projects />
      </main>
    </div>
  );
}

export default App;
