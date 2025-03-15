import React from 'react';
import Search from './Search';
import ImageSlider from './ImageSlider';
import Trending from './Trending';
import './Home.css'

const HomePage = () => {
  return (
    <div className="home-page">
     <Search />
     <div className='home-images'>
      <ImageSlider />
       
     </div>
      <div className='home-card'>
        <div className='home-subcard'>
          <img className='sub-card-img' src='https://img.freepik.com/free-vector/stock-market-upward-arrow-background-company-branding_1017-56439.jpg?' alt='card-Img' />
          <h5>Trending</h5>
        </div>
        <div className='home-subcard'>
          <img className='sub-card-img' src='https://img.freepik.com/free-vector/sweet-birthday-cake-with-candles_18591-82310.jpg?' alt='card-Img' />
          <h5>Cake</h5>
        </div>
        <div className='home-subcard'>
          <img className='sub-card-img' src='https://img.freepik.com/premium-photo/high-angle-view-potted-plant-against-white-background_1048944-4142700.jpg' alt='card-Img' />
          <h5>Decoration</h5>
        </div>
        <div className='home-subcard'>
          <img className='sub-card-img' src='https://img.freepik.com/premium-vector/luxury-present-box-with-dark-paper-wrapping-golden-ribbon-knot-isolated-white-background_533410-501.jpg' alt='card-Img' />
          <h5>Gifts</h5>
        </div>
        <div className='home-subcard'>
          <img className='sub-card-img' src='https://img.freepik.com/free-vector/woman-avatar_23-2147501833.jpg?' alt='card-Img' />
          <h5>Hire MUA</h5>
        </div>
        <div className='home-subcard'>
          <img className='sub-card-img' src='https://img.freepik.com/premium-vector/vector-illustration-videographer-flat-design-style_844724-4325.jpg' alt='card-Img' />
          <h5>Video Gr..</h5>
        </div>
        <div className='home-subcard'>
          <img className='sub-card-img' src='https://img.freepik.com/premium-vector/male-photographer-with-camera_460848-3843.jpg?' alt='card-Img' />
          <h5>Photo Gr..</h5>
        </div>
        <div className='home-subcard1'>
          <img className='sub-card-img' src='https://static.thenounproject.com/png/1143725-200.png' alt='card-Img' />
          <h5>View All</h5>
        </div>
      </div>
      <Trending />
    </div>
  );
}

export default HomePage;
