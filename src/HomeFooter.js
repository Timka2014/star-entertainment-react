import googleIcon from './images/google.png';
import whatsAppIcon from './images/whatsapp.png';
import { useState, useRef } from 'react';


function HomeFooter() {
    const [signUpBtn, setSignUpBtn] = useState(false);
    const inputEmail = useRef()

    const openPopUp = () => {
        const regexp = /^[\w\.-]+@[\w\.-]+\.[a-z]{2,3}(\.[a-z]{2})?$/i;

        if (inputEmail.current.value.match(regexp)) {
            inputEmail.current.value = '';
            setSignUpBtn(true);

        }
        else {
            alert(`Please enter a valid email address`);
        }
    }

    const closePopUpWindow = () => {
        setSignUpBtn(false);
    }

    return (
        <div className='HomeFooter'>
            <div className='HomeFooter-main-cont'>
                <div className='HomeFooter-container HomeFooter-links'>
                    <a className='HomeFooter-header HomeFooter-link' href='/services'>SERVICES</a>
                    <a className='HomeFooter-header HomeFooter-link' href='/pricing'>PRICING</a>
                    <a className='HomeFooter-header HomeFooter-link' href='/contacts'>CONTACTS</a>
                </div>

                <div className='HomeFooter-container'>
                    <p className='HomeFooter-header'>ABOUT US</p>
                    <p className='HomeFooter-par'>Production Center "Star Entertainment" Organization
                        holding of Festivals, Concerts, Exhibitions Balls,
                        Exclusive Cultural Events.
                    </p>
                    <p className='HomeFooter-par'>Our address:
                        2430 Bedford Avenu, #1000, Brooklyn, NY 11226
                    </p>
                </div>

                <div className='HomeFooter-container'>
                    <p className='HomeFooter-header'>EMAIL SIGNUP</p>
                    <p className='HomeFooter-par'>Subscribe to our mailimg list
                        to stay up to date with our promotions and news
                    </p>

                    <div className='HomeFooter-input-container'>
                        <input className='HomeFooter-input' ref={inputEmail} type='email' placeholder='Your email' />
                        <button className='HomeFooter-signUp-btn'
                            onClick={openPopUp}>OK</button>
                    </div>

                    <div className={signUpBtn ? 'popUp' : 'hidden-popUp'}>
                        <div className="popUp-content">
                            <span className="close-popUp" onClick={closePopUpWindow}>&times;</span>
                            <p className="popUp-par">Thanks for signing up!</p>
                        </div>
                    </div>
                </div>

                <div className='HomeFooter-container HomeFooter-iconsCont'>
                    <div className='HomeFooter-icons-cont'>
                        <a href='#'><img className='HomeFooter-icon' src={googleIcon} alt='google icon' /></a>
                        <a href='#'><img className='HomeFooter-icon' src={whatsAppIcon} alt='whatsapp icon' /></a>
                    </div>
                    <p className='HomeFooter-par'>Some images  were taken from open sources for educational purposes</p>
                </div>
            </div>

            <div className='HomeFooter-bottom-cont'>
                <div className='HomeFooter-container HomeFooter-bottom-iconsCont'>
                    <div className='HomeFooter-icons-cont'>
                        <a href='#'><img className='HomeFooter-icon' src={googleIcon} alt='google icon' /></a>
                        <a href='#'><img className='HomeFooter-icon' src={whatsAppIcon} alt='whatsapp icon' /></a>
                    </div>
                    <p className='HomeFooter-par'>Some images were taken from open sources for educational purposes</p>
                </div>
            </div>
        </div>
    )
}

export default HomeFooter;