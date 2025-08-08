import React from 'react'

function Stats() {
    return (
        <>
            <div className="container mt-5 pb-5">
                <div className="row">
                    <div className="col-5 p-3">
                        <h3 >Trust with confidence</h3>

                        <h4 className='mt-5 mb-2'>Customer-first always</h4>
                        <p className='text-muted' style={{ fontSize: '1.2rem' }}>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

                        <h4 className='mt-4 mb-2'>No spam or gimmicks</h4>
                        <p className='text-muted' style={{ fontSize: '1.2rem' }}>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <span><a style={{ textDecoration: 'none' }} href="https://zerodha.com/about/philosophy">Our philosophies.</a></span></p>

                        <h4 className='mt-4 mb-2'>The Zerodha universe</h4>
                        <p className='text-muted' style={{ fontSize: '1.2rem' }}>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                        <h4 className='mt-4 mb-2'>Do better with money</h4>
                        <p className='text-muted' style={{ fontSize: '1.2rem' }}>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>


                    </div>
                    <div className="col-7 p-5">
                        <img className="img-fluid " src="public/media/ecosystem.png" alt="ecosystem" />
                        <div className='text-center mt-3'>
                           
                            <a style={{textDecoration:'none',fontSize:'18px', fontWeight:'400'}} className='arrowLink col-6' href="">Explore our products <i style={{fontSize:'13px'}} class="fa-solid fa-arrow-right"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a style={{textDecoration:'none',fontSize:'18px', fontWeight:'400'}} className='arrowLink col-6' href="">Try kite demo <i style={{fontSize:'13px'}} class="fa-solid fa-arrow-right"></i></a>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Stats;