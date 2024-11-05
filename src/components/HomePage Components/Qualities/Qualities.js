import React from 'react';
import "./Qualities.css";
import sections from '../../../components/constants/data';
import Images from '../../../assets/images/hero1.jpg';

const Qualities = () => {
  return (
    <section className='qualities section-p bg-md-black' id = "qualities">
        <div className='container'>
            <div className='qualities-content grid'>
                <div className='content-left'>
                    <div className='section-t text-center'>
                        <h3>We are Professionals</h3>
                        <p className='text'>Our team values transparency, collaboration and innovation, working closely with you to build a websiten that not only fits your brand but also reflects its unique identity</p>
                    </div>

                    <div className='item-list grid text-white'>
                        {
                            sections.qualities.map(quality => {
                                return (
                                    <div className='item flex' key = {quality.id}>
                                        <div className='item-icon flex flex-center'>
                                            {quality.icon}
                                        </div>
                                        <div className='item-text'>
                                            <h3 className='item-title fs-25'>Ideas & Plans</h3>
                                            <p className='text'>{quality.text}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className='content-right'>
                    <img src = {Images} alt = "" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualities
