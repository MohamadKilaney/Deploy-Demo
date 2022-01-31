import React, { useState, useEffect, useCallback } from 'react'

//import css files
import './Header.css';

//import components
import Navbar from '../navbar/Navbar';

//import images
import logo from '../../images/logo.png'

//import icon from Material icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import DehazeIcon from '@mui/icons-material/Dehaze';

function Header() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);//screen width
    const [toggleMenu, setToggleMenu] = useState(false);//navbar status

    const callback = useCallback((toggleMenu) => {
        setToggleMenu(toggleMenu);
    }, []);


    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth);
    }, []);

    function toggleMenuFunc(event) {
        event.preventDefault();
        setToggleMenu(!toggleMenu);
    }

    return (
        <div className='header__comp'>
            <div className="Header">
                <div className='resp__header'>
                    {!toggleMenu ? <DehazeIcon onClick={toggleMenuFunc}></DehazeIcon> : ''}

                </div>
                <div className='header__icon'>
                    <img className='logo' src={logo} alt='this is logo' />
                </div>

                <div className='header__search'>
                    <div className='search__bar'>
                        <SearchIcon sx={{ fontSize: 40 }}></SearchIcon>
                        <input className='search__input' type="text" placeholder="חפשו מוצרים..." />
                    </div>
                </div>

                <div className='header__info'>
                    <ul className='info'>
                        <li className='phone'>052-4791396</li>
                        <li className='sale'>SALE</li>
                        <li className='products'>כל המוצרים</li>
                        <li><ShoppingCartIcon className='cart__icon' sx={{ fontSize: 30 }}></ShoppingCartIcon></li>
                    </ul>
                </div>
            </div>
            {(toggleMenu === true || screenWidth > 550) ? <Navbar status={callback}></Navbar> : ''}

        </div>
    );
}

export default Header;
