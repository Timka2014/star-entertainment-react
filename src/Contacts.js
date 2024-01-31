import Video from './images/video.mp4';
function Contacts() {

    return (
        <div className="Contacts-main-container">
            <div className="Contacts-container">
                <h1 className='Home-contacts-header'>Contacts</h1>

                <div className="Contacts-data-container">
                    <div className="Contacts-data-innerCont">
                        <h3 className="Contacts-data-header">Working hours</h3>
                        <p className="Contacts-data-par">Mon-Fri: 9 AM - 5 PM</p>
                        <p className="Contacts-data-par">Sat: 10 AM - 1 PM</p>
                        <p className="Contacts-data-par">Sun: Closed</p>
                    </div>
                    <div className="Contacts-data-innerCont">
                        <h3 className="Contacts-data-header">Get in touch</h3>
                        <p className="Contacts-data-par">+1.718.324.5644</p>
                        <p className="Contacts-data-par">star.entertainment@gmail.com</p>
                    </div>
                    <div className="Contacts-data-innerCont">
                        <h3 className="Contacts-data-header">Our address</h3>
                        <p className="Contacts-data-par">2430 Bedford Avenu, #1000, Brooklyn, NY 11226</p>
                    </div>
                </div>

                <div className="Contacts-map-container">
                    <iframe src="https://www.google.com/maps/embed/v1/place?q=place_id:EikyNDMwIEJlZGZvcmQgQXZlLCBCcm9va2x5biwgTlkgMTEyMjYsIFVTQSIxEi8KFAoSCYc7_GNGW8KJEZ73iYKhPQO3EP4SKhQKEgnhtyokalvCiRH7MlITyq2nfA&key=AIzaSyBWcCVjTQLXhStqEpkyLQ3-RgKvO1USmnE"
                        className="Contacts-map" title="map" allowFullScreen="" loading="lazy" ></iframe>
                </div>

            </div>
        </div>
    )
}
export default Contacts;