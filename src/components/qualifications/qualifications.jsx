import './qualifications.css';
import imgAWS from '../props/aws.png';
import imgHadoop from '../props/hadoop.png';
import imgDegree from '../props/degree.png';

const Qualifications = () => {
  return (
    <div>
      <span className='quali-text'>Certificates</span>
      <div className='qualifications-carousel-container'>
        <div className='carousel'>
          <div className='carousel-face'>
            <img
              src={imgAWS}
              alt='qualification-aws'
              className='qualification-img-aws'
            />
            <h1>AWS</h1>
          </div>
          <div className='carousel-face'>
            <img
              src={imgHadoop}
              alt='qualification-aws'
              className='qualification-img-aws'
            />
            <h1>Hadoop</h1>
          </div>
          <div className='carousel-face'>
            <img
              src={imgDegree}
              alt='qualification-aws'
              className='qualification-img-aws'
            />
            <h1>DEGREE</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
