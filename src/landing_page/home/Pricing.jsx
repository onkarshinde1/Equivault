import React from 'react'

function Pricing() {
    return (

        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-5">
                        <h3>Unbeatable pricing</h3>
                        <p className='text-muted' style={{ fontSize: '1.1rem' }}>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                        <a style={{ textDecoration: 'none', fontSize: '18px', fontWeight: '400' }} className=' col-6' href="">See Pricing  <i style={{ fontSize: '13px' }} class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-6 pl-5">
                        <div className="row ">
                            <div className="col-4">
                                <img style={{width:'85px'}} src="public\media\pricing0.svg" alt="pricing 0" />
                                <p style={{fontSize:'13px'}}>Free account <br /> opening</p>
                            </div>
                            <div className="col-4 ">
                                <img style={{width:'85px'}} src="public\media\pricing0.svg" alt="pricing 0" />
                                <p style={{fontSize:'13px'}}>Free equity delivery <br />and direct mutual funds</p>
                            </div>
                            <div className="col-4">
                                <img style={{width:'85px'}} src="public\media\intradayTrades.svg" alt="intraday trade" />
                                <p style={{fontSize:'13px', paddingLeft:'10px'}}>Intraday and <br /> F&O</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
}

export default Pricing;