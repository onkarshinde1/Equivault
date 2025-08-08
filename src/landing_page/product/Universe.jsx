import React from 'react'
import FeaturesGrid from './FeaturesGrid';

function Universe() {
    return (
        <>
            <div className="container text-center text-muted">
                <div className="row ">
                    <h3>The Zerodha Universe</h3>
                    <p className='mt-2 ' style={{ fontSize: '18px' }}>Extend your trading and investment experience even further with our partner platforms</p>
                </div>
                <div style={{ padding: "40px" }}>
                    <FeaturesGrid />
                </div>
            </div>
        </>
    );
}

export default Universe;