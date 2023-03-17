import Carousel from 'react-bootstrap/Carousel'
import './Home.css';

function UncontrolledExample() {
  return (
    <div className='Home'>
    <Carousel>
      <Carousel.Item>
        <img
          className="pic1"
          src='https://www.willflyforfood.net/wp-content/uploads/2022/01/tunisian-food-chakchouka.jpg.webp'
          alt="First slide"
        />
       <h1 className='text'>Good food is the foundation of genuine happiness.</h1>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="pic1"
          src='https://theafricacookbook.com/wp-content/uploads/2019/11/shutterstock_780590413.jpg'
          alt="Second slide"
        />
         <h1 className='text'>Food is not rational. Food is culture, habit, craving, and identity.</h1>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="pic1"
          src='https://carthagemagazine.com/wp-content/uploads/2019/08/Tunisian-Street-food.jpg'
          alt="Third slide"
        />
         <h1 className='text'>Food is symbolic of love when words are inadequate.</h1>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>







  );
}


export default UncontrolledExample;