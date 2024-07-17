import React from 'react';
import '../../../App.css';
import { Button } from '../../Button Component/Button';
import './HeroSection.css';
import AppBarComponent from '../../AppBarComponent';

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='top'>
      <AppBarComponent/>
      </div>
       
      <h1>XPARTECH HELPS YOU GROW YOUR BUSINESS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          VIDEO PORTFOLIO <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
