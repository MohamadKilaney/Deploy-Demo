import './App.css';

//import packages
import { Parallax } from 'react-parallax';

//import components
import Header from './components/header/Header.js'
import Ads from './components/ads/Ads'

//import images
import paraPhoto from './images/paraPhoto1.png'

//import icon from Material icons
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function App() {
  return (
    <div className="App">
      <Header />
      <Parallax className='para' bgImage={paraPhoto} bgImageAlt="the cat" strength={800}>
        <div className='parallax1Content'>
          <h2 className='parallaxText'>מגוון הריהוט הגדול בישראל לבית, למשרד ולגן</h2>
          <button className='parallaxButton'>לצפייה בכל המבצעים  <KeyboardArrowDownIcon></KeyboardArrowDownIcon></button>
        </div>
      </Parallax>


      <Ads>

      </Ads>

    </div>
  );
}

export default App;
