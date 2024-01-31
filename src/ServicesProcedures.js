function ServicesProcedures({ procedures, search, learnMore, learnMoreBtn }) {

    return (
        <div className='Services-normalizing-cont'>
            {procedures.filter((element) => {
                if (search === '') {
                    return element;
                }
                else if (element.header.toLowerCase().includes(search.toLowerCase())) {
                    return element;
                }
            }).map((object) => {
                const { id, image, header, line1 } = object;

                return (
                    <div key={id} className={`${learnMoreBtn ? 'Services-eachProcedure-hidden' : 'Services-eachProcedure-cont'}`}>
                        <img className='Services-image' src={image} alt='pic'
                            style={{ width: '600px', height: '350px', objectFit: 'cover' }}
                        />
                        <p className='Services-header'>{header}</p>
                        <div className='Services-par-container'>
                            <p className='Services-par'>{line1}</p>
                        </div>
                        <button className='Services-LearnMore-Btn'
                            onClick={() => learnMore(id)}>See gallery</button>
                    </div>
                )
            })}

        </div>

    )
}

export default ServicesProcedures;