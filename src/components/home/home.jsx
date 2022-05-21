import './home.css';
import img from '../props/profile2.png';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img src={img} alt='' />
      </div>

      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>

      <h2>
        <span>About Me</span> <br />
        <p>
          A mixed coder (half Malaysian, half Australian). Venturing the world
          and life in search of new technology and the next big advancement for
          mankind. Always hungry to learn new tech, and climb the ever eternal
          growth ladder. What's life if not an adventure into the constant
          unknown!
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
