
function ServicesBtns({ filterProcedures }) {

    return (
        <div className="ServicesBtns-container">
            <button className="ServicesBtns-btn" onClick={() => window.location.reload()}>All services</button>
            <button className="ServicesBtns-btn" onClick={() => filterProcedures('weddings')}>Weddings</button>
            <button className="ServicesBtns-btn" onClick={() => filterProcedures('concerts')}>Concerts</button>
            <button className="ServicesBtns-btn" onClick={() => filterProcedures('cultural')}>Cultural Events</button>
            <button className="ServicesBtns-btn" onClick={() => filterProcedures('design')}>Design & Decor</button>
        </div>
    )
}

export default ServicesBtns;