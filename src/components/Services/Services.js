import React from 'react';
import './Services.css';
import CardItem from '../CardItem';
import Image from '../../assets/images/star-rm.png'

function Services() {
  return (
    <div className='cards'>
      <h1>Our Services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Image}
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              label='Web Development'
              path='/services'
            />
            <CardItem
            src={Image}
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              label='Mobile App Development'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
            src={Image}
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              label='Data Science and Machine Learning'
              path='/services'
            />
            <CardItem
            src={Image}
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              label='IT Consultations'
              path='/products'
            />
            <CardItem
            src={Image}
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus leo et diam fermentum ullamcorper.'
              label='IT'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services
