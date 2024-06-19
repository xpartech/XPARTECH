import React from 'react'
import './About.css'
import Images from '../../assets/images/hero1.jpg'

const About = () => {
  return (
    <section className='about section-p' id='about'>
        <div className='container'>
            <div className='about-content grid text-center' translate='translate-effect'>
                <div className='item-2'>
                    <img src={Images} alt=''/>
                </div>
                <div className='item-1'>
                    <div className='section-a'>
                        <h3>About us</h3>
                        <p className = "text">
                            Welcome to Xpartech, a leading IT company dedicated to delivering innovative and comprehensive technology solutions. At Xpartech, we pride ourselves on our ability to adapt to the ever-changing landscape of the tech industry, providing top-notch services in web development, mobile and desktop software, general IT solutions, and cutting-edge applications of artificial intelligence.
                        </p>

                        <button className='text-white-900'>This button is styled with Tailwindcss</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
