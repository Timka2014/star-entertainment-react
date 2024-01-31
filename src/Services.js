import { dataServices } from './dataServices';
import searchIcon from './images/search.png';
import ServicesBtns from './ServicesBtns';
import { useState } from 'react';
import ServicesProcedures from './ServicesProcedures';
import ServicesEach from './ServicesEach';

function Services({ popUpBtn, openPopUpWindow, closePopUpWindow, inputName, forbidNumbers, inputTel, activateTelMask }) {
    const [burgerBtn, setBurgerBtn] = useState(false);
    const [searchBtn, setSearchBtn] = useState(false);
    const [search, setSearch] = useState('');
    const [procedures, setProcedures] = useState(dataServices);
    const [eachProcedure, setEachProcedure] = useState(dataServices);
    const [learnMoreBtn, setLearnMoreBtn] = useState(false);

    const learnMore = (id) => {
        setLearnMoreBtn(true);
        const selectedItem = dataServices.filter(item => item.id === id);
        setEachProcedure(selectedItem);
    }

    const changeBurgerState = () => {
        setBurgerBtn(!burgerBtn);
    }

    const changeSearchBtnState = () => {
        setSearchBtn(!searchBtn);
    }

    const filterProcedures = (searchTerm) => {
        setLearnMoreBtn(false)
        const selectedProcedures = dataServices.filter(element => element.searchTerm === searchTerm);
        setProcedures(selectedProcedures);
    }

    const getValue = (e) => {
        setSearch(e.target.value);
        setLearnMoreBtn(false);
    }


    return (
        <div className='Services-main-container'>
            <div className='Services-container'>
                <h1 className='Home-about-header'>Our services</h1>
                <div className='Services-btn-container'>
                    <ServicesBtns filterProcedures={filterProcedures} />

                    <div className='Services-burger-container'>
                        <div className='Services-burger-innerCont'>
                            <ul className={`Services-hiddenMenu ${burgerBtn ? 'Services-showMenu' : 'Services-hiddenMenu'}`}
                                onMouseLeave={changeBurgerState}>
                                <li className='Services-burgerLi firstLi'><button className='Services-burgerBtn'
                                    onClick={() => window.location.reload()}>All Services</button></li>
                                <li className='Services-burgerLi'><button className='Services-burgerBtn'
                                    onClick={() => filterProcedures('weddings')}>Weddings</button></li>
                                <li className='Services-burgerLi'><button className='Services-burgerBtn'
                                    onClick={() => filterProcedures('concerts')}>Concerts</button></li>
                                <li className='Services-burgerLi'><button className='Services-burgerBtn'
                                    onClick={() => filterProcedures('culturalevents')}>Cultural Events</button></li>
                                <li className='Services-burgerLi'><button className='Services-burgerBtn'
                                    onClick={() => filterProcedures('design&decor')}>Design&Decor</button></li>
                            </ul>
                            <button
                                className={`Services-burgerIcon ${burgerBtn ? 'Services-closeIcon' : 'Services-burgerIcon'}`}
                                onMouseEnter={changeBurgerState}>
                            </button>
                        </div>
                    </div>

                    <div className='Services-input-container'>
                        <input className={`Services-hiddenInput ${searchBtn ? 'Services-showInput' : 'Services-hiddenInput'}`}
                            type='text' placeholder='Search' onChange={getValue} />


                        <button className='Services-searchBtn'
                            onClick={changeSearchBtnState}>
                            <img className='Services-searchIcon' src={searchIcon} alt='search icon' />
                        </button>
                    </div>
                </div>

                <div className='Services-procedures-container'>
                    <ServicesProcedures
                        procedures={procedures}
                        search={search}
                        learnMore={learnMore}
                        learnMoreBtn={learnMoreBtn} />
                </div>

                <div className='Services-procedures-container'>
                    <ServicesEach
                        eachProcedure={eachProcedure}
                        learnMoreBtn={learnMoreBtn}
                        popUpBtn={popUpBtn}
                        inputTel={inputTel}
                        inputName={inputName}
                        openPopUpWindow={openPopUpWindow}
                        closePopUpWindow={closePopUpWindow}
                        forbidNumbers={forbidNumbers}
                        activateTelMask={activateTelMask} />
                </div>
            </div>
        </div>
    )
}

export default Services;
