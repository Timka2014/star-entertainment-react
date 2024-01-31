import { useState } from 'react';
import { dataPrices } from './dataPrices';
import video from './images/video.mp4';

function Prices() {
    const [btn, setBtn] = useState(false);

    const changeState = (object) => {
        object.showMore = !object.showMore;
        setBtn(!btn);
    }

    return (
        <div className="Prices-main-container">
            <div className='video-contaainer'>
                <video autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                </video>
            </div>


            <div className="Prices-container">
                <h1 className='Prices-header'>Pricing</h1>

                <div className="Prices-serviceName-container">
                    <p className="Prices-par">Service</p>
                    <p className="Prices-par">Price</p>
                </div>

                <div className='Prices-burger-container'>
                    {dataPrices.map((object, index) => {
                        const { header, showMore } = object;

                        return (
                            <div key={index} className="Prices-burger-innerCont">
                                <div className="Prices-serviceName-container">
                                    <p className="Prices-headerPar">{header}</p>
                                    <button className={`Prices-plusIcon ${showMore ? 'Prices-minusIcon' : 'Prices-plusIcon'}`}
                                        onClick={() => changeState(object)}></button>
                                </div>
                                <ul className={`Prices-ul-hidden ${showMore ? 'Prices-ul' : 'Prices-ul-hidden'}`}>
                                    {object.ul.map((item, index) => {
                                        const { li, price } = item;

                                        return (
                                            <div key={index} className="Prices-li-container">
                                                <li className='Prices-li'>{li}
                                                    <span className='Prices-li-span'>{price}</span></li>
                                            </div>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default Prices;
