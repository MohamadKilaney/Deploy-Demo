//import css files
import './Navbar.css';

//import icon from Material icons
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';

function Navbar({status}) {
    function changeStatus(){
        status(false);
    }
    return (
        <div className="Navbar">
            <div className='background' onClick={changeStatus}>
                <div className='close' >
                    <CloseIcon onClick={changeStatus}></CloseIcon>
                </div>
            </div>
            <ul className='navBar'>
                <li>ריהוט לבית<KeyboardArrowDownIcon></KeyboardArrowDownIcon></li>
                <li>ריהוט משרדי<KeyboardArrowDownIcon></KeyboardArrowDownIcon></li>
                <li>ריהוט גן ומרפסת<KeyboardArrowDownIcon></KeyboardArrowDownIcon></li>
                <li>ריהוט לבתי קפה<KeyboardArrowDownIcon></KeyboardArrowDownIcon></li>
                {/* <li>ריהוט לבי"ח ומרפאות<KeyboardArrowDownIcon></KeyboardArrowDownIcon></li>
                <li>ריהוט למוסדות חינוך<KeyboardArrowDownIcon></KeyboardArrowDownIcon></li>
                <li>ריהוט למוסדות חינוך<KeyboardArrowDownIcon></KeyboardArrowDownIcon></li>
                <li>מידע ויצירת קשר<KeyboardArrowDownIcon></KeyboardArrowDownIcon></li> */}
            </ul>
        </div>
    );
}

export default Navbar;
