import './contact.css';
import { AiOutlineGithub } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
import { IoLogoLinkedin } from 'react-icons/io';

function Contact() {
  return (
    <div id='contact' className='container contact-container'>
      <h1>Socials</h1>
      <div className='contact-links'>
        <a
          href='https://github.com/sabun123/sabun123'
          className='contact github'
          target={'blank'}
        >
          <AiOutlineGithub className='icon' />
          <h2>
            Github <span>Sabun123</span>
          </h2>
        </a>

        <a
          href='https://www.linkedin.com/in/yusuf-ismail-bin-shukor/'
          className='contact linkedin'
          target={'blank'}
        >
          <IoLogoLinkedin className='icon' />
          <h2>
            LinkedIn <span>Yusuf Ismail bin Shukor</span>
          </h2>
        </a>

        <a
          href='mailto:encrypted.potato@gmail.com'
          className='contact gmail'
          target={'blank'}
        >
          <SiGmail className='icon' />
          <h2>
            Gmail <span>encrypted.potato</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
