import React from 'react'
import './post1.css'
import Images from '../../../assets/images/lady3.jpg'

const Post1 = () => {
  return (
    <section className='post1 section-p' id='about'>
        <div className='container0 '>
            <div className='post1-content grid text-center' translate='translate-effect'>
                
                <div className='item-1'>
                    <div className='section-a'>
                        <h3>In 3 Easy Steps</h3>
                        <p>
                            Welcome to ExparTech, the fastest growing Web technology platform. Our goal is to give your client the best experience on your website. Its fast and easy in 3 steps:
                        </p>
                        <ul className='push-ul'>
                            <li >
                                <div className='sameLine'>
                                <h4 >1</h4>
                                Pick a Website Template
                                </div>
                                <span>Select the design that best meets your company need from the list of our templates below</span>
                            </li>
                            <li>
                                <div className='sameLine'>
                                <h4>2</h4>
                                Submit your project request
                                </div>
                                <span>You can add more features or customize your design. View the total cost of your project & make initail deposit of 25% to initiate your project. When you are ready, click on the submit project button and we will receive your request</span>
                           
                            </li>
                            <li>
                                <div className='sameLine'>
                                <h4>3</h4>
                                We make it happen
                                </div>
                                <span>It only takes 24hrs to receive feedback from us about your project. You get Assigned a personal project Expert</span>
                           
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='item-2'>
                    <img src={Images} alt=''/>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Post1
