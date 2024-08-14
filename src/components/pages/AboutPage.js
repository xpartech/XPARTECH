import React from 'react';
import AppBarComponent from '../AppBarComponent';
import ServiceFooter from '../serviceFooter';
import { Box, Button, Container, Grid, Stack, styled, Typography } from '@mui/material';
import { Fade, Slide } from "react-awesome-reveal";
import imgSteve from '../../assets/images/steve.jpg';
import imgNick from '../../assets/images/nik.jpg';
import imgFrancis from '../../assets/images/ben.jpg';
import { BorderLeft } from '@mui/icons-material';

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  justifyContent:'center',
  textAlign: 'center',
  width:'50%',
  margin:'auto',
  marginBottom:'100px'
}));

const CustomItem = ({leftImg, fName, post, rightTextUp, rightTextDown}) => {
  return(
    
    <Item>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Fade >
            <Slide direction="up" triggerOnce>
              <Box marginRight="20px" textAlign="center">
                <img src={leftImg} width="150px" height="300px" style={{ borderRadius: '50%' }} alt={`${fName}`} />
              </Box>
            </Slide>
          </Fade>
        </Grid>
        <Grid item xs={12} md={6} sx={{ borderLeft: '2px solid gray', padding: '20px' }}>
          <Fade triggerOnce>
            <Slide direction="right" triggerOnce>
              <Grid container direction={'column'}>
                <Grid item>
                  <Typography variant='h3' fontWeight="bold"> {fName}</Typography>
                </Grid>
                <Grid item>
                  <Typography mb={3} variant='h4' color='blue'> {post}</Typography>
                </Grid>
                <Grid item>
                  <Typography mb={2} fontSize={20}> {rightTextUp}</Typography>
                </Grid>
                <Grid item>
                  <Typography fontSize={14}> {rightTextDown}</Typography>
                </Grid>
              </Grid>
            </Slide>
          </Fade>
        </Grid>
      </Grid>
    </Item>
    
  )
}


export default function AboutPage() {
  return (
    
    <div>

      {/* Put a Container to hold everything on a page */}

      <Container maxWidth={false}
         sx={{
          height: 500,
          backgroundColor: '#057fff',
          borderBottomRightRadius: 50,
          borderBottomLeftRadius: 50,
        }}
      
      
      >
          
          {/* Your AppBar Component imported & placed in a top div */}
          
          <div className='top'>
            <AppBarComponent />
          </div>
          <br/>
          <br/>
          <br/>
          <center  >
             <Typography mt={15} variant='h1' fontWeight='bold' color='#ffffff'>Meet The Team</Typography>
             </center>
      
      </Container>
      <Container>
        <Typography variant="h4" fontWeight="bold" mt={5} textAlign="center">
          Professional Developers & Engineers Crafting Perfect Technology for Your Brand
        </Typography>
        <Typography  mt={2} mb={4} textAlign="center">
          Our team consists of experts dedicated to transforming your vision into a successful digital experience.
        </Typography>
      </Container>
      <Stack direction={'column'} >

         
        <CustomItem
          leftImg={imgSteve}
          fName="Stephen Kastona"
          post="Lead Software Developer"
          rightTextUp="With over 10 years of experience, I specialize in creating scalable, secure, and high-performance web solutions."
          rightTextDown="Let's bring your ideas to life with innovative technology."
       
        />  
        <CustomItem
           leftImg={imgFrancis}
           fName="Francis Benjamin"
           post="Front-End Engineer"
           rightTextUp="I’m passionate about building intuitive, responsive interfaces that offer a seamless user experience."
           rightTextDown="Your project deserves an engaging and visually appealing design."
        
        />
        <CustomItem
          leftImg={imgNick}
          fName="Nickson Makama"
          post="Back-End Developer"
          rightTextUp="My focus is on creating robust, efficient, and scalable server-side applications that drive your business forward."
          rightTextDown="I look forward to optimizing your backend systems for maximum performance."
        
        />
        


        

      </Stack>
      <Container sx={{ backgroundColor: '#f7f7f7', py: 5 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center">
          Why Choose Xpartech?
        </Typography>
        <Typography variant="body1" mt={2} textAlign="center">
          At Xpartech, we understand that your website is a vital part of your business. That's why we are committed to delivering top-tier web development services that align with your unique goals.
        </Typography>
        <Grid container spacing={3} mt={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight="bold">Expertise</Typography>
            <Typography variant="body1">
              Our team has a deep understanding of modern web technologies and a track record of successful projects.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight="bold">Customization</Typography>
            <Typography variant="body1">
              We tailor our services to meet your specific needs, ensuring a solution that perfectly fits your business.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight="bold">Support</Typography>
            <Typography variant="body1">
              From planning to post-launch, we provide continuous support to ensure your project’s success.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ textAlign: 'center', py: 5 }}>
        <Typography variant="h4" fontWeight="bold">Ready to Start Your Project?</Typography>
        <Typography variant="body1" mt={2} mb={4}>
          Contact us today to discuss how we can help you achieve your goals with our innovative web development solutions.
        </Typography>
        <Button variant="contained" color="primary" size="large">Get in Touch</Button>
      </Container>

      {/*Your footer Here */}
      <ServiceFooter/>
    </div>
  )
}
