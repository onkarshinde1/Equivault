import React from 'react'

function Hero () {
  return (
    <>
        <div className="container border-bottom">
            <div className="row text-center pt-5 mt-5 pb-5 ">
                <h3>Zerodha Products</h3>
                <p style={{fontSize:'22px', marginTop:'5px'}}>Sleek, modern, and intuitive trading platforms</p>
                <p style={{fontSize:'20px', marginTop:'5px'}}>Check out our <a   className='arrowLink fs-5' href=''>investment offerings →</a> </p>
            </div>
        </div>
    </>
  )
}

export default Hero