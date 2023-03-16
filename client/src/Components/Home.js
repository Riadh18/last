import Carousel from 'react-bootstrap/Carousel'
import fofa from '../pic/homepic.png.png'
import './Home.css';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="pic1"
          src={fofa}
          alt="First slide"
        />
        <Carousel.Caption>

          <p>Good food choices are good investment.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="pic1"
          src={fofa}
          alt="Second slide"
        />

        <Carousel.Caption>
         
          <p>Nothing brings peopels together like good food.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="pic1"
          src={fofa}
          alt="Third slide"
        />

        <Carousel.Caption>
          
          <p>
            good food is the foundation of genuine happiness.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


export default UncontrolledExample;