import React from 'react';

function Rightimage({ imageURL, productName, productDescription, learnMore , linkName}) {
  return (
    <div className="container">
      <div className="row d-flex align-items-center">
        
        {/* Text Left */}
        <div className="col-7 col-md-5 p-4 mt-4 mt-md-5">
          <h3 className="mb-4">{productName}</h3>
          <p style={{ lineHeight: '1.7', fontSize: '17px', fontWeight: '400' }}>
            {productDescription}
          </p>
          <a
            className="text-decoration-none fs-5 fw-medium"
            href={learnMore}
          >
           { linkName }<i className="fa-solid fa-arrow-right fs-6"></i>
          </a>
        </div>

        {/* Image Right */}
        <div className="col-12 col-md-7 text-center text-md-end">
          <img
            src={imageURL}
            alt="Console"
            className="img-fluid"
            // style={{ maxHeight: '400px' }}
          />
        </div>

      </div>
    </div>
  );
}

export default Rightimage;
