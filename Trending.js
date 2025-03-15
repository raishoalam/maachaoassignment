import React from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import './trend.css'
const Trending = ()=>{
     return(
         <div className='trending-cont'>
            <div className='trend'>
                <h1>Trending</h1>
                <p>See All <IoArrowForwardCircleOutline /></p>
            </div>
            <div className='trend-sub-card'>
             <div className='trending-card'>
                <div className='trend-images'>
                <img className='trend-img' src='https://img.freepik.com/free-vector/birthday-cake-sweet-cream-pie-with-candles-illustration_1284-52975.jpg?' alt='' /> 
                </div>
                <h5>Exclusive Choco..</h5>
                <p>₹500</p>
                <p className='discount'><span className='disc'>₹1000</span> <span id='offer'>50% OFF</span></p>
             </div>
             <div className='trending-card'>
                <div className='trend-images'>
                <img className='trend-img' src='https://img.freepik.com/premium-vector/colorful-birthday-cake-decorated-with-melted-chocolate-illustration_100011-302.jpg?' alt='' /> 
                </div>
                <h5>Exclusive Choco..</h5>
                <p>₹500</p>
                <p className='discount'><span className='disc'>₹1000</span> <span id='offer'>50% OFF</span></p>
             </div>
             <div className='trending-card'>
                <div className='trend-images'>
                <img className='trend-img' src='https://img.freepik.com/premium-photo/delicious-chocolate-cake-birthday-party-with-marshmallows_170896-1336.jpg?' alt='' /> 
                </div>
                <h5>Exclusive Choco..</h5>
                <p>₹500</p>
                <p className='discount'><span className='disc'>₹1000</span> <span id='offer'>50% OFF</span></p>
             </div>
             <div className='trending-card'>
                <div className='trend-images'>
                <img className='trend-img' src='https://img.freepik.com/premium-photo/chocolate-cake-white_62193-898.jpg?' alt='' /> 
                </div>
                <h5>Exclusive Choco..</h5>
                <p>₹500</p>
                <p className='discount'><span className='disc'>₹1000</span> <span id='offer'>50% OFF</span></p>
             </div>
         </div>
         </div>
     )
}
export default Trending