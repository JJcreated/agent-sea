import React from 'react';
import { useContext } from 'react';
import { MenuActive } from '../../Context';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {

const {menuActive} = useContext(MenuActive);

  return (
    <div className='sidebar'>
        <div className='industry-list'>
            <Link className='industry-link' to='/defence'>Defence</Link>
            <Link className='industry-link' to='/health'>Health</Link>
            <Link className='industry-link' to='design'>Design</Link>
            <Link className='industry-link' to='energy'>Energy</Link>
            <Link className='industry-link' to='finance'>Finance</Link>
            <Link className='industry-link' to='telecoms'>Telecoms</Link>
            <Link className='industry-link' to='cybersecurity'>Cybersecurity</Link>
            <Link className='industry-link' to='engineering'>Engineering</Link>
            <Link className='industry-link' to='trades'>Trades</Link>
        </div>
    </div>
  )
}

export default Sidebar