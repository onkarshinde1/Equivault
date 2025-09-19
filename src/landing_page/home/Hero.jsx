import React from "react";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <img src="public/media/homeHero.png" alt="home hero" className="mb-5" />
        <h1 className=""> Invest in everything</h1>
        <h5 className="mt-3">
          {" "}
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </h5>
        <button
          className="btn btn-primary p-2 mt-3 fs-5"
          style={{
            margin: "0 auto",
            width: "20%",
            border: "2px solid white",
            backgroundColor: "#387ed1",
            color: "white",
          }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
