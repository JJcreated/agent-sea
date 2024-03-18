import React from 'react';
import MenuButton from '../MenuButton/MenuButton';
import './NavBar.css';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

function NavBar() {

  return (
    <nav className='nav-bar'>
      <MenuButton/>
        <header className="App-header">
        <h1><Link className='home-link' to='/'>agent sea</Link></h1>
      </header>
      <SearchBar />
      </nav>
  )
}

export default NavBar