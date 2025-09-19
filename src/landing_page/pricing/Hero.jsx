import React from 'react'

function Hero() {
    return ( 
       <>
        <div className='p-5'>
            <div className="row text-center mt-5 mb-5">
                <h2>Charges</h2>
                <h4 className='text-muted'>List of all charges and taxes</h4>
            </div>
            <div style={{marginTop:'165px'}} className="row text-center">
                <div className="col-4 ">
                    <img style={{width:'237px' , height:'175px' , marginBottom:'10px'}} src="public\media\pricing0.svg" alt="zero" />
                    <h4 className='mb-4'>Free equity delivery</h4>
                    <p style={{lineHeight:1.7 , fontSize:'18px'}} className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 ">
                    <img style={{width:'237px' , height:'175px'}} src="public\media\other-trades.svg" alt="twozero" />
                    <h4 className='mb-4'>Intraday and F&O trades</h4>
                    <p style={{lineHeight:1.7 , fontSize:'18px'}} className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div  className="col-4 ">
                    <img style={{width:'237px' , height:'175px'}} src="public\media\pricing0.svg" alt="zero" />
                    <h4 className='mb-4' >Free direct MF</h4>
                    <p style={{lineHeight:1.7 , fontSize:'18px'}} className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
       </>
     );
}

export default Hero;