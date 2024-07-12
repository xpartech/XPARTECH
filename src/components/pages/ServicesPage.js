import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from "@mui/material/Card";
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Fade, Slide } from "react-awesome-reveal";
import img from '../../assets/images/web4.jpeg';
import img2 from '../../assets/images/Mob3.jpg';
import img3 from '../../assets/images/ml3.jpg';
import img4 from '../../assets/images/it2.jpg';
import bg from '../../assets/images/mainbg.png';
import web from '../../assets/images/srweb2.jpg';

export default function ServicesPage() {
  const BackgroundHead = {
    backgroundImage: 'url('+ bg+')',
    backgroundRepeat: 'no-repeat',
    marginLeft: '50px',
    marginRight: '50px',
    }
    const DemoPaper = styled(Paper)(({ theme }) => ({
      width: 500,
      height: 300,
      padding: theme.spacing(2),
      backgroundImage: `url(${web})`,
      marginTop: 0,
      marginBottom: 20,
      objectFit: 'contain',
    }));
  return (
    <div>
        <Container maxWidth={300}
            sx={{
                height: 650,
                backgroundColor: '#057fff',
                borderBottomRightRadius: 150,
                borderBottomLeftRadius: 150,
              }}>
          <Typography variant='h1' align="center" color='#ffffff'
            sx={{
                marginTop: '0px',
                marginBottom: '20px',
                fontSize: '20px', 
            }}>
                What we do
            </Typography>
          <Fade direction="down" duration={2000}>
          <Typography variant='h1' align="center" color='#ffffff'
            sx={{
                textDecoration: 'underline',
                marginTop: '30px',
                marginBottom: '20px',
                fontSize: '70px',
            }}>
                Our Services
            </Typography>
            </Fade>
            <Grid container spacing={2} direction={{xs: "column", md: "row"}}
              justify="center" 
              justifyContent="center"
              alignItems="center"
              >
              <Grid item xs={4}>
                <Fade direction='left' duration={2000}>
                <Typography variant='h1' color='#ffffff'
                    sx={{
                        marginTop: '30px',
                        marginBottom: '20px',
                        fontSize: '50px',
                        textAlign: {
                          xs: 'center',
                          lg: 'left',
                          md: 'center',
                        },
                    }}>
                    We help Individuals and companies find their way to greatness
                  </Typography>
                </Fade>
                </Grid>
                <Grid item xs={4}>
                  <Fade direction='right' duration={2000}>
                  <Typography variant='h4' color='#ffffff'
                    sx={{
                        fontSize: '15px',
                        textAlign: {
                          xs: 'center',
                          lg: 'left',
                          sm: 'center',
                          md: 'center',
                        },
                    }}>
                    Xpartech is dedicated to guiding individuals and companies 
                    towards achieving excellence. 
                    Our innovative solutions and personalized strategies 
                    empower clients to 
                    unlock their full potential. With a focus on growth and success, we pave the way 
                    for greatness in every venture. 
                    Partner with Xpartech and watch your aspirations transform into reality.
                  </Typography>
                  </Fade>
                 
                </Grid>
                </Grid>
                </Container>
        
              <Grid container spacing={12} direction={{xs: "column", md: "row"}}
              justify="center" 
              justifyContent="center"
              alignItems="center"
              marginTop={2}
       
              >
                <Grid item xs={4} sm={4}>
                  <Card>
                  <CardMedia
                      sx={{ height: 300, marginBottom: 5}}
                      image={web}
                    />
                  </Card>
                </Grid>
                <Grid item xs={4}>
                <Stack direction="column" spacing={2}>
                  <Fade cascade damping={0.2}>
                  <Typography variant='h3'>
                      Web Development Services
                    </Typography>
                  <Typography variant='subtitle' align="left"
                    sx={{
                       
                        fontSize: '15px',
                    }}>
                    At Xpartech, our team of experts is dedicated to building high-quality
                     websites tailored to your business, company, or personal portfolio. 
                    We combine innovative design with robust functionality to ensure your 
                    online presence stands out. 
                    Trust us to deliver a seamless user experience that captivates your audience. 
                    Partner with Xpartech for a website that truly reflects your brand.
                  </Typography>
                
                  <Button variant="contained">Get Started</Button>
                  </Fade>
              </Stack>
              </Grid>
              </Grid>
    </div>
  )
}
