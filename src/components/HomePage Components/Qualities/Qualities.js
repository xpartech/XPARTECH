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
                        <p className='text'>You can find highly optimized websites that are both visually appealing and 
                            strategically designed to attract traffic! Our sites are crafted with attention to detail,
                             engage users & rank well on search engine. Whatever your project is, We have the professionality to make it happen.  </p>
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
                                            <h3 className='item-title fs-25'>{quality.title}</h3>
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
