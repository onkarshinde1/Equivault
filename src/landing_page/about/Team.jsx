import React from 'react';

function Team() {
  return (
    <div className="container border-top" style={{ backgroundColor: '#ffffffff' }}>
      {/* First Row */}
      <div className="row mt-5 mb-5 pb-5 pt-5">
        <div className="col-12 col-md-6 px-4 px-md-5">
          <p style={{ lineHeight: '1.7', fontSize: '17px', fontWeight: '400' }}>
            We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
          </p>
          <p style={{ lineHeight: '1.7', fontSize: '17px', fontWeight: '400' }}>
            Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
          </p>
          <p style={{ lineHeight: '1.7', fontSize: '17px', fontWeight: '400' }}>
            Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment <br /> platforms, contributing over 15% of all Indian retail trading volumes.
          </p>
        </div>

        <div className="col-12 col-md-6 px-4 px-md-5">
          <p style={{ lineHeight: '1.7', fontSize: '17px', fontWeight: '400' }}>
            In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
          </p>
          <p style={{ lineHeight: '1.7', fontSize: '17px', fontWeight: '400' }}>
            <a className='arrowLink' href="">Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
          </p>
          <p style={{ lineHeight: '1.7', fontSize: '17px', fontWeight: '400' }}>
            And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.
          </p>
        </div>
      </div>

      {/* Second Row */}
      <div className="row mt-5 mb-5">
        <div className="col-12 col-md-5 text-center mb-4 mb-md-0">
          <img
            className="img-fluid rounded-circle mb-3"
            style={{ maxWidth: '250px' }}
            src="public/media/nithinKamath.jpg"
            alt="Nithin Kamath"
          />
          <h5 className="text-muted">Onkar Shinde</h5>
          <p className="text-muted">Founder, CEO</p>
        </div>

        <div className="col-12 col-md-7 px-4">
          <h3 className="mb-4">People</h3>
          <p style={{ lineHeight: '1.7', fontSize: '17px', fontWeight: '400' }}>
            Onkar bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p style={{ lineHeight: '1.7', fontSize: '17px', fontWeight: '400' }}>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p style={{ lineHeight: '1.7', fontSize: '17px', fontWeight: '400' }}>
            Playing basketball is his zen.
          </p>
          <p style={{ lineHeight: '1.7', fontSize: '17px', fontWeight: '400' }}>
            Connect on Homepage / TradingQnA / Twitter
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
