import HomeAbout from './HomeAbout';
import HomeHelp from './HomeHelp';
import HomePromo from './HomePromo';
import Image from './images/mainImage.jpg';

function Home() {

    return (
        <div className="Home-main-cont">
            <div className="Home-inner-container">
                <div className="Home-picture-container">

                    <div className='Home-picText-container'>
                        <h1 className='Home-picText-text'>Your event is work of art.</h1>
                        <h2 className='Home-picText-text'>Trust a master with your master piece.</h2>
                    </div>

                    <div className='Home-mainImage'>
                        <img className='mainImage' src={Image} width="600px" alt='bride'></img>
                    </div>

                </div>
                <h2 className='Home-about-header'>About Us</h2>
                <HomeAbout />
                <h2 className='Home-about-header'>Simply put: We take a complex process and make it fun and easy.</h2>
                <HomeHelp />
                <div className='Home-promo-container'>
                    <h2 className='Home-about-header'>What we offer? </h2>
                    <HomePromo />
                </div>
            </div>
        </div>
    )
}

export default Home;