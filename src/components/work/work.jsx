import './work.css';
import imgFt from '../props/work-ft.png';
import imgCpamth from '../props/work-cpamth.png';
import imgTelekom from '../props/work-tm.png';
import imgAdmin from '../props/work-admin.png';
import imgOme from '../props/work-ome.png';
import imgBsx from '../props/work-bsx.png';

const TechStack = (givenStack) => {
  return (
    <div className='work-tech-stack'>
      {givenStack.map((element) => (
        <a href='#contact' className='tech-stack-item'>
          <span>{element}</span>
        </a>
      ))}
    </div>
  );
};

const Work = () => {
  return (
    <div id='work' className='container works-container'>
      <h1 className='work-txt'>Work</h1>
      <div className='work work-1'>
        <div className='work-info'>
          <h1 className='name'>Franklin Templeton US</h1>
          <h3 className='position'>Mobile app</h3>
          <h4 className='about'>
            Architected, developed and published the main mobile app for
            Franklin Templeton (live to USA public). Available for both iOS and
            Android app stores. Worked entirely in React Native with JavaScript,
            and lead a team of developers to work across multiple simultaneous
            sprints to achieve strict deadlines.
          </h4>
          {TechStack([
            'React Native',
            'Xcode',
            'JavaScript',
            'Redux',
            'Android Studio',
          ])}
        </div>
        <div className='work-img-container'>
          <img src={imgFt} alt='work-ft' className='work-img-ft' />
        </div>
      </div>

      <div className='work work-2 work-reverse'>
        <div className='work-img-container'>
          <img src={imgCpamth} alt='work-cpamth' className='work-img-cpamth' />
        </div>
        <div className='work-info'>
          <h1 className='name'>Principal Asset Management Thailand</h1>
          <h3 className='position'>Mobile App</h3>
          <h4 className='about'>
            Setup, developed and published this React Native mobile app for
            Principal Thailand. Introduced continuous deployments with Microsoft
            App Center to speed up time-to-test and time-to-delivery. App
            supports both Thai and English internationalization.
          </h4>
          {TechStack([
            'React Native',
            'Redux',
            'Google Firebase',
            'JavaScript',
          ])}
        </div>
      </div>

      <div className='work work-2'>
        <div className='work-info'>
          <h1 className='name'>Admin Dashboard</h1>
          <h3 className='position'>Web App</h3>
          <h4 className='about'>
            Setup and developed an admin dashboard web application that was used
            as the core basis for the company's main admin dashboard product.
            This admin dashboard front-end codebase has gone on to be used for
            more than three years and is still being heavily used both
            internally and with new external client projects.
          </h4>
          {TechStack(['ReactJS', 'JavaScript', 'Redux', 'MaterialUI'])}
        </div>
        <div className='work-img-container'>
          <img src={imgAdmin} alt='work-admin' className='work-img-admin' />
        </div>
      </div>

      <div className='work work-3 work-reverse'>
        <div className='work-img-container'>
          <img src={imgTelekom} alt='work-telekom' className='work-img-tm' />
        </div>
        <div className='work-info'>
          <h1 className='name'>Telekom Malaysia</h1>
          <h3 className='position'>Web App (Map)</h3>
          <h4 className='about'>
            Developed a ReactJS web-based solution for Telekom Malaysia's
            on-the-ground engineers. This solution was integrated with Google
            Maps, and Telekom Malaysia's geomapped hardware nodes and cable
            lines. Developed web services using Groovy to achieve this
            integration.
          </h4>
          {TechStack([
            'ReactJS',
            'JavaScript',
            'Google Maps',
            'Groovy',
            'Flux',
          ])}
        </div>
      </div>

      <div className='work work-3'>
        <div className='work-info'>
          <h1 className='name'>Oh-My-English</h1>
          <h3 className='position'>Mobile Game</h3>
          <h4 className='about'>
            Developed game levels and mechanics in Unity3D. The 2D mobile game
            Oh-My-English was released publicly to the app stores for both
            Android and iOS for Astro. Integrated the game with Facebook's
            mobile leaderboard SDK.
          </h4>
          {TechStack(['Unity3D', 'C#', 'Facebook leaderboard'])}
        </div>
        <div className='work-img-container'>
          <img src={imgOme} alt='work-ome' className='work-img-ome' />
        </div>
      </div>

      <div className='work work-3 work-reverse'>
        <div className='work-img-container'>
          <img src={imgBsx} alt='work-bsx' className='work-img-bsx' />
        </div>
        <div className='work-info'>
          <h1 className='name'>Beanstox US</h1>
          <h3 className='position'>Mobile App</h3>
          <h4 className='about'>
            Took over, upgraded, developed and published mobile app for Beanstox
            (live to the USA public).
          </h4>
          {TechStack([
            'React Native',
            'Redux',
            'Google Firebase',
            'JavaScript',
          ])}
        </div>
      </div>
    </div>
  );
};

export default Work;
