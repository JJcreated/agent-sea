import React from 'react';
import { useContext } from 'react';
import { MenuActive } from '../../Context';
import menuImage from '../../../public/assets/menuImage2.png';
import './MenuButton.css';

function MenuButton() {

    const {menuActive, setMenuActive} = useContext(MenuActive);

    const handleClick = () => {
        setMenuActive(!menuActive);
    };

  return (
                <button className='menu-button' onClick={handleClick}><img className='menu-image' src={menuImage} alt='menu'/></button>
        )
}

export default MenuButton