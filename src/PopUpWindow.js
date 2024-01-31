function PopUpWindow({ popUpBtn, closePopUpWindow, inputName, forbidNumbers, inputTel, activateTelMask }) {
    return (
        <div>
            <div className={`modal ${popUpBtn ? 'modal' : 'hidden-modal'}`}>
                <div className="modal-content">
                    <span className="close" onClick={closePopUpWindow}>&times;</span>
                    <p className="Home-popup-header">Request For a Call Back</p>
                    <form className="Home-popup-form">
                        <input className="Home-popup-input" type="text" ref={inputName} onChange={forbidNumbers} placeholder='Your name' required></input>
                        <input className="Home-popup-input telephone" type="tel" ref={inputTel} onChange={activateTelMask} placeholder='+1 (999) 999-99-99' required></input>
                        <div className="Home-checkbox-container">
                            <input className="Home-popup-checkbox" type="checkbox" id="checkmark" required></input>
                            <label className="Home-popup-label" htmlFor="checkmark">By submitting the form you agree with our privacy policy</label>
                        </div>

                        <button className="Home-popup-btn" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PopUpWindow;