import icon1 from './images/user-50.png';
import icon2 from './images/heart-80.png';
import icon3 from './images/love-64.png';
import icon4 from './images/dance-50.png';
import icon5 from './images/baloon-80.png';


function HomeAbout() {

    return (
        <div className="HomeAbout-main-cont">
            <div className="HomeAbout-container">
                <div className='HomeAbout-icon-container'>
                    <img className='HomeAbout-icon' src={icon1} alt='icon' />
                </div>
                <p className='HomeAbout-par'>Qualified staff</p>
            </div>

            <div className="HomeAbout-container">
                <div className='HomeAbout-icon-container'>
                    <img className='HomeAbout-icon' src={icon2} alt='icon' />
                </div>
                <p className='HomeAbout-par'>Personal approach to clients</p>
            </div>

            <div className="HomeAbout-container">
                <div className='HomeAbout-icon-container'>
                    <img className='HomeAbout-icon' src={icon3} alt='icon' />
                </div>
                <p className='HomeAbout-par'>Satisfaction guarantee</p>
            </div>

            <div className="HomeAbout-container">
                <div className='HomeAbout-icon-container'>
                    <img className='HomeAbout-icon' src={icon4} alt='icon' />
                </div>
                <p className='HomeAbout-par'>Dazzling dance programms</p>
            </div>

            <div className="HomeAbout-container">
                <div className='HomeAbout-icon-container'>
                    <img className='HomeAbout-icon' src={icon5} alt='icon' />
                </div>
                <p className='HomeAbout-par'>Event decor and design</p>
            </div>
        </div>
    )
}

export default HomeAbout;