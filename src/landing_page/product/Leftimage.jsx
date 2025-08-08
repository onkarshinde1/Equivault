import React from 'react';

function Leftimage({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore , linkName}) {
  return (
    <div className="container mt-5">
      <div className="row d-flex align-items-center flex-column flex-md-row">

        {/* Image Section */}
        <div className="col-12 col-md-7 p-4 text-center text-md-start">
          <img
            src={imageURL}
            alt="Kite"
            className="img-fluid"
            style={{ maxHeight: '400px' }}
          />
        </div>

        {/* Text Section */}
        <div className="col-12 col-md-5 p-4 mt-3 mt-md-5">
          <h3 className="mb-4">{productName}</h3>
          <p style={{ lineHeight: '1.7', fontSize: '17px', fontWeight: '400' }}>
            {productDescription}
          </p>

          <div className="d-flex flex-wrap gap-4 my-3">
            <a
              className="text-decoration-none fs-5 "
              href={tryDemo}
            >
              {linkName} <i className="fa-solid fa-arrow-right fs-6"></i>
            </a>

            <a
              className="text-decoration-none fs-5 "
              href={learnMore}
            >
              Learn more <i className="fa-solid fa-arrow-right fs-6"></i>
            </a>
          </div>

          <div className="d-flex gap-4 mt-3">
            <a href={googlePlay}>
              <img
                src="public/media/googlePlayBadge.svg"
                alt="Google Play"
                className="img-fluid"
                style={{ maxHeight: '50px' }}
              />
            </a>
            <a href={appStore}>
              <img
                src="public/media/appstoreBadge.svg"
                alt="App Store"
                className="img-fluid"
                style={{ maxHeight: '50px' }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftimage;
