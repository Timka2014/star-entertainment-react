import { useState } from 'react';
import { dataCarousel } from './dataCarousel';
import leftArrow from './images/leftArrow.jpg';
import rightArrow from './images/riightArrow.jpg';


function HomePromo() {
    const [slide, setSlide] = useState(0);

    const prevSlide = () => {
        setSlide(slide => {
            slide--;
            if (slide < 0) {
                slide = dataCarousel.length - 1;
            }
            return slide;
        })
    }

    const nextSlide = () => {
        setSlide(slide => {
            slide++;
            if (slide > dataCarousel.length - 1) {
                slide = 0;
            }
            return slide;
        });
    }

    const moveDot = (index) => {
        setSlide(index);
    }

    return (
        <div className='HomePromo-container'>
            <div className='HomePromo-main'>
                {dataCarousel.map((object, index) => {
                    const { image, header, par, discount } = object;
                    return (
                        <div key={index} >
                            <div className={slide === index ? 'active-anim' : 'HomePromo-main-cont'}>
                                <div className='HomePromo-left-cont'>
                                    <img className='HomePromo-pic' src={image} alt='promo pic'/>
                                </div>
                                <div className='HomePromo-right-cont'>
                                    <h2 className='HomePromo-header'>{header}</h2>
                                    <p className='HomePromo-par'>{par}</p>
                                    <div className='HomePromo-price-cont'>
                                        <p className='HomePromo-discount'>{discount}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
            <div className='HomePromo-arrow-container'>
                <button className='HomePromo-arrowBtn arrow-leftBtn' onClick={prevSlide}>
                    <img src={leftArrow} alt='arrowLeft' /></button>
                <div className='HomePromo-dot-container'>
                    {dataCarousel.map((obj, index) => {
                        const { dotPic } = obj;
                        return (
                            <div key={index}>
                                <img src={dotPic} alt='dot'
                                    onClick={() => moveDot(index)}
                                    className={`${slide === index ? 'HomePromo-dotActive' : 'HomePromo-dot'}`} />
                            </div>
                        )
                    })}
                </div>
                <button className='HomePromo-arrowBtn arrow-rightBtn' onClick={nextSlide}>
                    <img src={rightArrow} alt='arrowRight' /></button>
            </div>
        </div>
    )
}

export default HomePromo;