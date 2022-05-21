import './footer.css';
import { BsMouse } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { FaGlobeAmericas } from 'react-icons/fa';
import { TiSocialYoutube } from 'react-icons/ti';
import { TiSocialGithub } from 'react-icons/ti';

function Footer() {
  return (
    <div id='footer' className='container footer-container'>
      <h1>
        Game over!{' '}
        <a href='#home'>
          <h2>
            <BsMouse /> - scroll up -
          </h2>
        </a>
      </h1>
      <div className='social-links'>
        <a href='https://www.linkedin.com/in/yusuf-ismail-bin-shukor/'>
          <BsLinkedin className='social' />
        </a>
        <a href='mailto:encrypted.potato@gmail.com'>
          {' '}
          <FiMail className='social' />
        </a>
        <a href='https://techpromad.wordpress.com/'>
          {' '}
          <FaGlobeAmericas className='social' />
        </a>

        <a href='https://www.youtube.com/c/PenguinRecordings/featured'>
          <TiSocialYoutube className='social' />
        </a>

        <a href='https://github.com/sabun123/sabun123'>
          <TiSocialGithub className='social' />
        </a>
      </div>
    </div>
  );
}
export default Footer;
