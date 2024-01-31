import PopUpWindow from './PopUpWindow';

function ServicesEach({
    eachProcedure,
    learnMoreBtn,
    popUpBtn,
    inputTel,
    inputName,
    openPopUpWindow,
    closePopUpWindow,
    forbidNumbers,
    activateTelMask }) {
    return (
        <div className={`${learnMoreBtn ? 'ServicesEach-main-container' : 'ServicesEach-container-hidden'}`}>
            <h2 className="ServicesEach-header">{eachProcedure[0].header}</h2>
            <button onClick={openPopUpWindow}
                className="ServicesEach-popUpBtn">Request a Call Back</button>
            <div className="ServicesEach-container">
                {eachProcedure[0].images.map((images, index) => {
                    return (
                        <div key={index}>
                            <img className='ServicesEach-image' src={images} alt='pics'
                                style={{ width: '600px', height: '345px', objectFit: 'cover' }}></img>
                        </div>
                    )
                })}

            </div>

            <PopUpWindow
                popUpBtn={popUpBtn}
                closePopUpWindow={closePopUpWindow}
                inputName={inputName}
                forbidNumbers={forbidNumbers}
                inputTel={inputTel}
                activateTelMask={activateTelMask} />
            <div>

            </div>
        </div>
    )
}

export default ServicesEach;