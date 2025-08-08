import React from 'react'

function Education() {
    return ( 
        
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-7">
                    <img style={{width:'80%'}} src="public\media\education.svg" alt="varsity" />
                </div>
                <div className="col-6 pt-5">
                    <h3 className='text-muted'>Free and open market education</h3>
                    <p  className='text-muted' style={{ fontSize: '1.1rem' }}>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a style={{ textDecoration: 'none', fontSize: '18px', fontWeight: '400' }} className='arrowLink col-6' href="">Varsity <i style={{ fontSize: '13px' }} class="fa-solid fa-arrow-right"></i></a>

                    <p  className='text-muted mt-5' style={{ fontSize: '1.1rem' }}>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a style={{ textDecoration: 'none', fontSize: '18px', fontWeight: '400' }} className='arrowLink col-6' href="">Trading Q&A<i style={{ fontSize: '13px' }} class="fa-solid fa-arrow-right"></i></a>

                </div>
            </div>
        </div>
        </>
        
     );
}

export default Education;