import React from 'react';

function Awards() {
    return (
        <div className="container">
            <div className="row align-items-center g-4">
                {/* Image Column */}
                <div className="col-md-5 col-12 p-5 text-center ">
                    <img
                        className="img-fluid"
                        src="public/media/largestBroker.svg"
                        alt="largestbroker"
                    />
                </div>

                {/* Text Content Column */}
                <div className="col-md-7 col-12 p-5">
                    <h1 className="fw-bold">Largest Stock Broker In India</h1>
                    <p className="text-muted">
                        2+ million Zerodha clients contribute over 15% of all retail order volumes in India daily by trading and investing in:
                    </p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>Future & Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>Stock & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 text-center mt-3">
                    <img
                        className="img-fluid"
                        src="public/media/press-logos.png"
                        alt="press logos"
                        style={{width:700}}
                    />
                </div>
                </div>

                {/* Bottom Image */}
                
            </div>
        </div>
    );
}

export default Awards;
