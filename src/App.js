//import css files
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//import packages
import { Parallax } from 'react-parallax';
import Slider from "react-slick";


//import components
import Header from './components/header/Header.js'
import Ads from './components/ads/Ads'
import Card from './components/card/Card'
import Footer from './components/footer/Footer'

//import images
import paraPhoto from './images/paraPhoto1.png'
import paraPhoto2 from './images/paraPhoto.png'
import product from './images/loosy3.png'

import cat1 from './images/category דלפקים.jpg'
import cat2 from './images/category ישיבות.jpg'
import cat3 from './images/category כסאות.jpg'
import cat4 from './images/category משרדים.jpg'
import cat5 from './images/category שולחנות.jpg'
import cat6 from './images/category ישיבות.jpg'


//import icon from Material icons
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



function App() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    rtl: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="App">
      <Header />
      <Parallax className='para' bgImage={paraPhoto} bgImageAlt="the cat" strength={1000}>
        <div className='parallax1Content'>
          <h2 className='parallaxText'>מגוון הריהוט הגדול בישראל לבית, למשרד ולגן</h2>
          <button className='parallaxButton'>לצפייה בכל המבצעים  <KeyboardArrowDownIcon></KeyboardArrowDownIcon></button>
        </div>
      </Parallax>

      <Ads></Ads>


      <Parallax className='para2' bgImage={paraPhoto2} bgImageAlt="the cat" strength={300}>
        <div className='parallax2Content'>
          <div className='content'>
            <div className='title'>
              <h3>הנמכרים ביותר</h3>
            </div>

            <div className='slider'>
              <Slider {...settings} className='cur'>
                <Card title="mhmd mhmood 1" image={product} price='100' type="table" />
                <Card title="mhmd mhmood 2" image={product} price='100' type="table" />
                <Card title="mhmd mhmood 3" image={product} price='100' type="table" />
                <Card title="mhmd mhmood 4" image={product} price='100' type="table" />
                <Card title="mhmd mhmood 5" image={product} price='100' type="table" />
                <Card title="mhmd mhmood 6" image={product} price='100' type="table" />
              </Slider>
            </div>
          </div>
        </div>
      </Parallax>
      <div className='category'>
        <div class="category__image">
          <div class="cat1">
            <img src={cat1} alt='category' />
          </div>
          <div class="cat2">
            <img src={cat2} alt='category' />

          </div>
          <div class="cat3">
            <img src={cat3} alt='category' />

          </div>
          <div class="cat4">
            <img src={cat4} alt='category' />

          </div>
          <div class="cat5">
            <img src={cat5} alt='category' />

          </div>
          <div class="cat6">
            <img src={cat6} alt='category' />

          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
