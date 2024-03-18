import React from 'react';
import homeImg from '../../../../public/assets/agent1.jpg';
import './Home.css';

function Home() {
  return (
            <div className='home-page'>
              <img src={homeImg} className='home-img'/>
            </div>
  )
}

export default Home