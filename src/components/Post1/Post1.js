import React from 'react'
import './Post1.css'
import imgLadies from '../../assets/images/ladiesimg.png'
import { Box, Stack, Typography, Paper, useMediaQuery, useTheme } from '@mui/material';

const steps = [
    {
      number: 1,
      title: 'Select a Template',
      subtitle: 'Now that you are here, pick a template',
      body: 'We have many professional templates for you to choose from, simply click to select a design.',
    },
    {
      number: 2,
      title: 'Make Deposit',
      subtitle: 'Pay to Initiate a Project',
      body: 'Add features by checking the additional features checkbox and pay an initial non-refundable fee of $100 to submit your project. Our team will respond in less than 24hrs.',
    },
    {
      number: 3,
      title: 'Let us handle it!',
      subtitle: 'View your project',
      body: 'We will assign your project a manager that you can contact 24/7. Your feedback lets us customize your website to fit your brand. We will provide a link for you to view your project.',
    },
  ];



  const StepCard = ({ number, title, subtitle, body }) => {
    return (
      <Paper elevation={1} sx={{ p: 2, display: 'flex', alignItems: 'center', mb: 3 }}>
        <Box
          sx={{
            width: 60,
            height: 60,
            borderRadius: '50%',
            backgroundColor: 'primary.main',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mr: 2,
            
            flexShrink: 0,
          }}
        >
          <Typography variant="h2">{number}</Typography>
        </Box>
        <Box>
          <Typography variant="h3">{title}</Typography>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
            {subtitle}
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            {body}
          </Typography>
        </Box>
      </Paper>
    );
  };
  

const Post1 = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
                                <span>You can add more features or customize your design. View the total cost of your project & make initail deposit of 25% to initiate your project. When ready, click on the submit project button and we will receive your request</span>
                           
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
                <div className='item-2' >
                    <img src={imgLadies} alt=''/>
                </div>
                
            </div>

            <Stack
                direction= {{sm:"column", md:"row"}}
                /*{isSmallScreen ? 'row' : 'column'}*/
                spacing={2}
                sx={{ width: '80%', justifyContent: 'space-between' , mx:'auto', mt:'50px'}}
                >
                {steps.map((step) => (
                    <StepCard key={step.number} {...step} />
                ))}
            </Stack>

        </div>
    </section>
  )
}

export default Post1
