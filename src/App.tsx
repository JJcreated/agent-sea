import React, {useState, useEffect} from 'react';
import NavBar from './components/NavBar/NavBar';
import { MenuActive} from './Context';
import Sidebar from './components/Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/page_components/Home/Home';
import Defence from './components/page_components/Defence/Defence';
import Health from './components/page_components/Health/Health';
import Design from './components/page_components/Design/Design';
import Energy from './components/page_components/Energy/Energy';
import Finance from './components/page_components/Finance/Finance';
import Telecoms from './components/page_components/Telecoms/Telecoms';
import Cybersecurity from './components/page_components/Cybersecurity/Cybersecurity';
import Engineering from './components/page_components/Engineering/Engineering';
import Trades from './components/page_components/Trades/Trades';
import '../public/index.css'

function App() {

  const [menuActive, setMenuActive] = useState(false);
  
  return (
    <>
    
   <MenuActive.Provider value={{menuActive, setMenuActive}}>
      <div className="app-container">
          <NavBar/>
          <main className='main'>
            {menuActive && <Sidebar/>}
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/defence" element={<Defence/>}/>
              <Route path="/health" element={<Health/>}/>
              <Route path="/design" element={<Design/>}/>
              <Route path="/energy" element={<Energy/>}/>
              <Route path="/finance" element={<Finance/>}/>
              <Route path="/telecoms" element={<Telecoms/>}/>
              <Route path="/cybersecurity" element={<Cybersecurity/>}/>
              <Route path="/engineering" element={<Engineering/>}/>
              <Route path="/trades" element={<Trades/>}/>
            </Routes>
          </main>
      </div> 
    </MenuActive.Provider>
      
    </>
    
  );
}

export default App;