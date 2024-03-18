import React, { useState } from 'react';
import homeImg from '../../../../public/assets/agent1.jpg';
import './Home.css';

function Home() {

  const [enterActive, setEnterActive] = useState(false);

  const EnterInactive = () => {

  const handleClick = () => {
    setEnterActive(true);
  }

  return (
    <div className='home-page'>
              <img src={homeImg} className='home-image'/>
              <button className='home-enter-button' onClick={handleClick}>Enter</button>
            </div>
  )
}

const EnterActive = () => {

  return (
    <div>Entered</div>
  )

}

  
            if(enterActive){
              return (<EnterActive/>)
            }
            else{
              return (<EnterInactive/>)
            }
}



export default Home