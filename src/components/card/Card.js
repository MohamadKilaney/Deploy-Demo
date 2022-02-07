//import css files
import './Card.css';


//import icon from Material icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Card({ image, title, price , type}) {

    return (
        <div className="container page-wrapper">
            <div className="page-inner">
                <div className="row">
                    <div className="el-wrapper">
                        <div className="box-up">
                            <img className="img" src={image} alt=""/>
                                <div className="img-info">
                                    <div className="info-inner">
                                        <span className="p-name">{title}</span>
                                        <span className="p-company">{type}</span>
                                    </div>
                                    <div className="a-size">Available color : <span className="size">white , red , black</span></div>
                                </div>
                        </div>

                        <div className="box-down">
                            <div className="h-bg">
                                <div className="h-bg-inner"></div>
                            </div>

                            <a className="cart" href="#">
                                <span className="price">{price}$</span>
                                <span className="add-to-cart">
                                    <span className="txt">Add in cart</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
