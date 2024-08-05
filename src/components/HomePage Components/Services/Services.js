import React, { useState } from 'react';
import Card from '../../CardComponent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import img from '../../../assets/images/web4.jpeg';
import img2 from '../../../assets/images/Mob3.jpg';
import img3 from '../../../assets/images/ml3.jpg';
import img4 from '../../../assets/images/it2.jpg';
//import Slide from '@mui/material/Slide';
import { Fade, Slide } from "react-awesome-reveal";
import VizSensor from 'react-visibility-sensor'; 

function Services() {
    let [active, setActive] = useState(false);
    return (
        <div >
            <Slide direction="left" duration={2000}>
            <Typography variant='h1' align="center" 
            sx={{
                marginTop: '30px',
                marginBottom: '20px',
                fontSize: '36px',
            }}>
                Our Services
            </Typography>
        </Slide>
        <Fade cascade damping={0.2}>
        <Grid container spacing={1} direction={{xs: "column", md: "row"}}
        justify="center" 
        justifyContent="center"
        alignItems="center"
        >
           
        <Grid item xs={4}>
            <Card
            image ={img}
            title ={
            <Typography variant='h4'
                sx={{
                    color: "#ffffff",
                    padding: "5px",
                    width: "fit-content",
                    borderRadius: "5px",
                    backgroundColor: "#057fff",
                    boxshadow: "-20px -20px 60px #bebebe,20px 20px 60px #ffffff",
                }}>Web Development</Typography>
            }
            content ={
              <Typography variant="h6" color="text.secondary" >
             Our web development services create visually stunning, 
             highly functional websites with responsive design, 
             SEO optimization, and seamless e-commerce integration to achieve your online goals.
            </Typography>
            }
            />
            </Grid>
            <Grid item xs={4}>
            <Card
            image ={img2}
            title ={<Typography variant='h4'
                sx={{
                    color: "#ffffff",
                    padding: "5px",
                    width: "fit-content",
                    borderRadius: "5px",
                    backgroundColor: "#057fff",
                }}>Mobile App Development</Typography>}
            content ={
              <Typography variant="h6" color="text.secondary">
              Our mobile app development services deliver custom, 
              user-friendly apps for both iOS and Android platforms. 
              We specialize in seamless performance, intuitive design, 
              and robust security to meet your business needs.
            </Typography>
            }
            />
            </Grid>
            <Grid item xs={4}>
            <Card
            image ={img3}
            title ={<Typography variant='h4'
                sx={{
                    color: "#ffffff",
                    padding: "5px",
                    width: "fit-content",
                    borderRadius: "5px",
                    backgroundColor: "#057fff",
                }}>Machine Learning Apps</Typography>}
            content ={
              <Typography variant="h6" color="text.secondary">
             Our machine learning services offer custom solutions for process 
             automation and data insights. 
             We specialize in predictive analytics, 
             natural language processing, and AI-driven decision-making.
            </Typography>
            }
            />
            </Grid>
            <Grid item xs={4}>
            <Card
            image ={img4}
            title ={<Typography variant='h4'
                sx={{
                    color: "#ffffff",
                    padding: "5px",
                    width: "fit-content",
                    borderRadius: "5px",
                    backgroundColor: "#057fff",
                }}>IT Consultations</Typography>}
            content ={
              <Typography variant="h6" color="text.secondary">
              Our IT consultation services provide expert guidance to optimize 
              your technology infrastructure. 
              We specialize in strategic planning, system integration, 
              and cybersecurity to enhance your business efficiency and security.
            </Typography>
            }
            />
            </Grid>
           
        </Grid>
        </Fade>
    </div>
    );
  }
  
  export default Services
  