import React from 'react';
import "./Portfolio.css";
import sections from '../../../components/constants/data';

const Portfolio = () => {
  return (
    <section className='portfolio section-p bg-dark' id = "portfolio">
        <div className='container'>
            <div className='portfolio-content'>
                <div className='section-t text-center'>
                    <h3>Our Portfolio</h3>
                    <p className='text'>XparTech is well known for its professionalism and in crafting interactive website & web applications that deliver exceptional user experiences, seamlessly blending design and functionality</p>
                </div>

                <div className='item-list text-center text-white grid'>
                    {
                        sections.portfolio.map(portfolio => {
                            return (
                                <div className='item flex flex-center flex-column translate-effect' key = {portfolio.id} style = {{
                                    background: `url(${portfolio.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    width: '100%',
                                    height: '150%',
                                }}>
                                    <div className='item-title fs-25 fw-6'>{portfolio.title}</div>
                                    <div className='text text-white'>{portfolio.text}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio