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

function Services() {
    let [active, setActive] = useState(false);
    return (
        <div className="py-50">
            <Slide direction="left" duration={2000}>
            <Typography variant='h1' align="center" 
            sx={{
                textDecoration: 'underline',
                marginTop: '30px',
                marginBottom: '20px',
                fontSize: '36px',
            }}>
                Our Services
            </Typography>
        </Slide>

        <Grid container direction={{xs: "column", md: "row"}}
        justify="center" 
        justifyContent="center"
        alignItems="center"
        >
           
        <Grid item xs={3}>
            <Card
            image ={img}
            title ={
            <Typography variant='h4'
            sx={{
                color: "#057fff",
                padding: "5px",
                width: "fit-content",
                borderRadius: "5px",
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
            <Grid item xs={3}>
            <Card
            image ={img2}
            title ={<Typography variant='h4'
                sx={{
                    color: "#057fff",
                    padding: "5px",
                    width: "fit-content",
                    borderRadius: "5px",
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
            <Grid item xs={3}>
            <Card
            image ={img3}
            title ={<Typography variant='h4'
                sx={{
                    color: "#057fff",
                    padding: "5px",
                    width: "fit-content",
                    borderRadius: "5px",
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
            <Grid item xs={3}>
            <Card
            image ={img4}
            title ={<Typography variant='h4'
                sx={{
                    color: "#057fff",
                    padding: "5px",
                    width: "fit-content",
                    borderRadius: "5px",
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
    </div>
    );
  }
  
  export default Services
  