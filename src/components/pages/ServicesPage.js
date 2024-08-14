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
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import img from '../../assets/images/web4.jpeg';
import img2 from '../../assets/images/Mob3.jpg';
import img3 from '../../assets/images/ml3.jpg';
import img4 from '../../assets/images/it2.jpg';
import bg from '../../assets/images/mainbg.png';
import web from '../../assets/images/srweb2.jpg';
import logo from '../../assets/images/XPARTECH_no_bg.png';
import logo2 from '../../assets/images/logo1.png';
import logo3 from '../../assets/images/xpartech2.png';
import ServiceFooter from '../serviceFooter';
import AppBarComponent from '../AppBarComponent';
import ServiceCard from '../ServiceCardComponent';

export default function ServicesPage() {
  const BackgroundHead = {
    backgroundImage: 'url(' + bg + ')',
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

        <div className='top'>
          <AppBarComponent />
        </div>
        <Stack direction={"column"}
          sx={{ paddingTop: 10, display: { xs: 'none', md: 'none', lg: 'flex' } }}>
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
          <Grid container spacing={2} direction={{ xs: "column", md: "row" }}
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
        </Stack>

        <Stack direction={"column"}
          sx={{ paddingTop: 10, display: { xs: 'flex', md: 'none', lg: 'none' } }}>
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
                fontSize: '40px',
              }}>
              Our Services
            </Typography>
          </Fade>
          <Grid container spacing={2} direction={{ xs: "column", md: "row" }}
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
                    fontSize: '40px',
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
        </Stack>

      </Container>

      <Grid container spacing={12} direction={{ xs: "column", md: "row" }}
        justify="center"
        justifyContent="center"
        alignItems="center"
        marginTop={0}
      >
        <Grid item xs={4} sm={4}>
          <img src={web} height={300} width={500} style={{ objectFit: "cover", borderRadius: 10 }} />
        </Grid>
        <Grid item xs={4}>
          <Stack direction="column" spacing={2}
            sx={{
              display: { xs: 'none', md: 'none', lg: 'flex' },
            }}>
            <Fade cascade damping={0.2}  >
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
          <Stack direction="column" spacing={2}
            sx={{
              display: {
                xs: 'flex', md: 'flex', lg: 'none',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center'
              }
            }}>
            <Fade cascade damping={0.2} >
              <Typography variant='h3' align='center'>
                Web Development Services
              </Typography>
              <Typography variant='h6' align='center'
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

              <Button variant="contained"
              >Get Started</Button>
            </Fade>
          </Stack>
        </Grid>
      </Grid>

      <Stack spacing={5} direction={{ xs: "column", md: "row" }}
        sx={{
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 4
        }}
      >
        <Fade cascade damping={0.4}>
          <ServiceCard
            image={img2}
            content={
              <Typography variant="h6" color="text.secondary">
                Our mobile app development services deliver custom,
                user-friendly apps for both iOS and Android platforms.
              </Typography>
            }
            body={
              <Typography paragraph>
                We specialize in seamless performance, intuitive design,
                and robust security to meet your business needs.
                With a focus on creating exceptional user experiences,
                we ensure that every app we develop is tailored to the unique

                requirements of our clients. Our team of experienced developers
                utilizes the latest technologies and industry best practices to
                build apps that are not only visually appealing but also highly
                functional and reliable.

                Whether you need an app for e-commerce, healthcare, education,
                or any other industry,
                we have the expertise to bring your vision to life. We take a

                collaborative approach, working closely with you throughout the
                development process to ensure that the final product aligns with
                your goals and exceeds your expectations.

                Our services include comprehensive app design, development, testing,
                and maintenance. We conduct thorough market research and user analysis
                to inform our design decisions, creating intuitive interfaces that
                enhance user engagement and satisfaction. Our development process is
                agile and iterative, allowing for flexibility and timely delivery of your app.
              </Typography>
            }
          />
          <ServiceCard
            image={img3}
            content={
              <Typography variant="h6" color="text.secondary">
                Our mobile app development services deliver custom,
                user-friendly apps for both iOS and Android platforms.
              </Typography>
            }
            body={
              <Typography paragraph>
                We specialize in seamless performance, intuitive design,
                and robust security to meet your business needs.
                With a focus on creating exceptional user experiences,
                we ensure that every app we develop is tailored to the unique

                requirements of our clients. Our team of experienced developers
                utilizes the latest technologies and industry best practices to
                build apps that are not only visually appealing but also highly
                functional and reliable.

                Whether you need an app for e-commerce, healthcare, education,
                or any other industry,
                we have the expertise to bring your vision to life. We take a

                collaborative approach, working closely with you throughout the
                development process to ensure that the final product aligns with
                your goals and exceeds your expectations.

                Our services include comprehensive app design, development, testing,
                and maintenance. We conduct thorough market research and user analysis
                to inform our design decisions, creating intuitive interfaces that
                enhance user engagement and satisfaction. Our development process is
                agile and iterative, allowing for flexibility and timely delivery of your app.
              </Typography>
            }
          />
          <ServiceCard
            image={img4}
            content={
              <Typography variant="h6" color="text.secondary">
                Our mobile app development services deliver custom,
                user-friendly apps for both iOS and Android platforms.
              </Typography>
            }
            body={
              <Typography paragraph>
                We specialize in seamless performance, intuitive design,
                and robust security to meet your business needs.
                With a focus on creating exceptional user experiences,
                we ensure that every app we develop is tailored to the unique

                requirements of our clients. Our team of experienced developers
                utilizes the latest technologies and industry best practices to
                build apps that are not only visually appealing but also highly
                functional and reliable.

                Whether you need an app for e-commerce, healthcare, education,
                or any other industry,
                we have the expertise to bring your vision to life. We take a

                collaborative approach, working closely with you throughout the
                development process to ensure that the final product aligns with
                your goals and exceeds your expectations.

                Our services include comprehensive app design, development, testing,
                and maintenance. We conduct thorough market research and user analysis
                to inform our design decisions, creating intuitive interfaces that
                enhance user engagement and satisfaction. Our development process is
                agile and iterative, allowing for flexibility and timely delivery of your app.
              </Typography>
            }
          />
        </Fade>
      </Stack>
      <ServiceFooter />
    </div>
  )
}
