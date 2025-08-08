import React from 'react'
import Hero from './Hero';
import Leftimage from './Leftimage';
import Rigthimage from './Rigthimage';
import Universe from './Universe';

function ProductPage() {
    return (
        <div>
            <Hero />
            <Leftimage
                imageURL="public\media\kite.png"
                productName="Kite"
                productDescription=" Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                linkName="Try demo"
                tryDemo
                learnMore
                googlePlay
                appStore />

            <Rigthimage
                imageURL="public\media\products-console.png"
                productName="Console"
                productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                linkName="Learn more"
                learnMore="" />

            <Leftimage
                imageURL="public\media\products-coin.png"
                productName="Coin"
                productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                linkName="Coin"
                tryDemo
                googlePlay
                appStore />

            <Rigthimage
                imageURL="public\media\landing.svg"
                productName="Kite Connect API"
                productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                learnMore=""
                linkName="Kite Connect"
                />

            <Leftimage
                imageURL="public\media\varsity.png"
                productName="Varsity mobile"
                productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                googlePlay
                appStore />

            <p className='text-center my-5' style={{  fontSize: '20px', fontWeight: '400' }}>Want to know more about our technology stack? Check out the <a className= ' arrowLink' style={{  fontSize: '20px', fontWeight: '400' }}> Zerodha.tech </a>blog.</p>
            <Universe />
            <div className='text-center mb-5 pb-5'>
                <button className='btn btn-primary p-2 mt-3 fs-5' style={{margin:'0 auto' , width:'20%', border:'2px solid white',backgroundColor:'#387ed1' , color:'white'}}>Sign up for free</button>
            </div>
             
            
        </div>


    );
}

export default ProductPage;