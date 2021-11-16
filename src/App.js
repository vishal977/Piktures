import Carousel from './components/Carousel';
import { CarouselData } from './components/CarouselData';
import NavigationBar from './components/NavigationBar'
function App() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Carousel images = { CarouselData }></Carousel>
    </div>
  );
}

export default App;
