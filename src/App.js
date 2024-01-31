import './App.css';
import { useState, useRef } from 'react';
import phone from './images/phone.jpg';
import map from './images/map.jpg';

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Services from './Services';
import Prices from './Prices';
import Contacts from './Contacts';
import HomeFooter from './HomeFooter';
import ServicesEach from './ServicesEach';

function App() {
  const [btn, setBtn] = useState(false);
  const [popUpBtn, setPopUpBtn] = useState(false);
  const inputTel = useRef();
  const inputName = useRef();

  const openPopUpWindow = () => {
    setPopUpBtn(true);
  }

  const closePopUpWindow = () => {
    setPopUpBtn(false);
    window.location.reload();
  }

  const forbidNumbers = () => {
    const inputValue = inputName.current.value.replace(/\d/g, '').match(/\D/g);
    inputName.current.value = inputValue ? inputValue.join('') : inputName.current.value = '';
  }

  // A mask (regexp) for the phone number input field
  const activateTelMask = () => {
    const receivedPhoneNumber = inputTel.current.value;
    const numbersOnly = receivedPhoneNumber.replace(/\D/g, '');
    const pattern = numbersOnly.match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);

    inputTel.current.value = !pattern[2] ? pattern[1] :
      `+${pattern[1]} (${pattern[2]})${`${pattern[3] ? `-${pattern[3]}` : ''}`}${`${pattern[4] ? `-${pattern[4]}` : ''}`}${`${pattern[5] ? `${-pattern[5]}` : ''}`
      }`;
  };

  const showMenu = () => {
    setBtn(!btn);
  };

  const hideMenu = () => {
    setBtn(false);
  }

  return (
    <Router>
      <div className='App-top-container'>
        <nav className='App-navbar'>
          <Link to='/' className='App-navLink'>
            <div className='App-logo-container'>
              <hr />
              <p className='App-bodyTime'>S T A R</p>
              <hr />
              <p className='App-easyShape'>Entertainment</p>
            </div>
          </Link>
          <Link to='/services' className='App-navLink'>Our services</Link>
          <Link to='/pricing' className='App-navLink'>Pricing</Link>
          <Link to='/contacts' className='App-navLink'>Contacts</Link>
        </nav>

        <div className='App-navbar'>
          <div className='App-phone-container'>
            <img className='App-phoneIcon' src={phone} alt='phone' />
            <p className='App-phoneNumber'>+1 (718) -324 -56 44</p>
          </div>

          <div className='App-map-container'>
            <img className='App-mapIcon' src={map} alt='map' />
            <p className='App-address'>2430 Bedford Avenu, #1000, Brooklyn, NY 11226</p>
          </div>
        </div>
      </div>

      <div className='App-burger-container'>
        <div className='App-burger-innerCont'>

          <ul className={`App-menu ${btn ? 'showMenu' : 'App-menu'}`} onMouseLeave={hideMenu}>
            <li className='App-burgerLi App-burgerServices'><Link to='/services' className='App-navLink'>Our services</Link></li>
            <li className='App-burgerLi'><Link to='/contacts' className='App-navLink'>Contacts</Link></li>
          </ul>

          <button className={`App-burgerBtn ${btn ? 'closeIcon' : 'App-burgerBtn'}`}
            onMouseEnter={showMenu}></button>


          <Link to='/' className='App-navLink'>
            <div className='App-logo-container'>
              <hr />
              <p className='App-bodyTime burgerLogo'>S T A R</p>
              <hr />
              <p className='App-easyShape burgerResult'>Entertainment</p>
            </div>
          </Link>
          <Link to='/pricing' className='App-navLink burgerPrice'>Pricing</Link>
        </div>
      </div>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/services' element={<Services
          popUpBtn={popUpBtn}
          openPopUpWindow={openPopUpWindow}
          closePopUpWindow={closePopUpWindow}
          inputName={inputName}
          forbidNumbers={forbidNumbers}
          inputTel={inputTel}
          activateTelMask={activateTelMask} />}></Route>
        <Route path='/pricing' element={<Prices />}></Route>
        <Route path='/contacts' element={<Contacts />}></Route>
        <Route path='/eachService' element={<ServicesEach />}></Route>
      </Routes>

      <footer>
        <HomeFooter />
      </footer>
    </Router>
  );
}

export default App;