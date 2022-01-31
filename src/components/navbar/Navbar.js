import './Navbar.css';

//import icon from Material icons
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Navbar() {
    return (
        <div className="Navbar">
            <ul className='navBar'>
                <li>ריהוט לבית<KeyboardArrowDownIcon></KeyboardArrowDownIcon></li>
                <li>ריהוט משרדי<KeyboardArrowDownIcon></KeyboardArrowDownIcon></li>
                <li>ריהוט גן ומרפסת<KeyboardArrowDownIcon></KeyboardArrowDownIcon></li>
                <li>ריהוט לבתי קפה<KeyboardArrowDownIcon></KeyboardArrowDownIcon></li>
                <li>ריהוט לבי"ח ומרפאות<KeyboardArrowDownIcon></KeyboardArrowDownIcon></li>
                <li>ריהוט למוסדות חינוך<KeyboardArrowDownIcon></KeyboardArrowDownIcon></li>
                <li>ריהוט למוסדות חינוך<KeyboardArrowDownIcon></KeyboardArrowDownIcon></li>
                <li>מידע ויצירת קשר<KeyboardArrowDownIcon></KeyboardArrowDownIcon></li>
            </ul>
        </div>
    );
}

export default Navbar;
