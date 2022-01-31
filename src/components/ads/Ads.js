import './Ads.css';


//import images
import photo1 from '../../images/chair dis.jpg'
import photo2 from '../../images/quadro room.png'

function Ads() {
    return (
        <div className="Ads">
            <div class="parent">
                <div class="div1">
                    <img src={photo2} alt="ads photo" />
                </div>

                <div class="div2">
                    <img src={photo1} alt="ads photo" />

                </div>

                <div class="div3">
                    <img src={photo1} alt="ads photo" />

                </div>
            </div>
        </div>
    );
}

export default Ads;
