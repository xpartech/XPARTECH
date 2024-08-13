import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box, Button, Paper, Typography } from '@mui/material';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

function HeroSection() {
  const carouselItems = [
    {
      title: "XPARTECH HELPS YOU GROW YOUR BUSINESS",
      subtitle: "What are you waiting for?",
      buttonText1: "GET STARTED",
      buttonText2: "VIDEO PORTFOLIO",
      backgroundImage: "url('../assets/images/hero2.jpg')",
    },
    {
      title: "REACH NEW HEIGHTS WITH XPARTECH",
      subtitle: "Work with us today!",
      buttonText1: "LEARN MORE",
      buttonText2: "WATCH VIDEO",
      backgroundImage: "url('/path/to/your/image2.jpg')",
    }
  ];

  return (
    <Carousel
      indicators={false}
      interval={5000}
      navButtonsAlwaysVisible
    >
      {carouselItems.map((item, index) => (
        <Paper
          key={index}
          sx={{
            height: '70vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `linear-gradient(to right, rgba(255, 0, 150, 0.6), rgba(0, 204, 255, 0.6)), ${item.backgroundImage}`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.5)',
            color: '#fff',
            textAlign: 'center',
          }}
        >
          <Typography variant="h2" sx={{ marginTop: '-100px', fontSize: { xs: '20px', sm: '35px', md: '50px' } }}>
            {item.title}
          </Typography>
          <Typography variant="h5" sx={{ marginTop: '8px', fontSize: { xs: '15px', sm: '20px', md: '32px' } }}>
            {item.subtitle}
          </Typography>
          <Box sx={{ marginTop: '32px' }}>
            <Button
              variant="outlined"
              sx={{ margin: '6px', color: '#fff', borderColor: '#fff' }}
              size="large"
            >
              {item.buttonText1}
            </Button>
            <Button
              variant="contained"
              sx={{ margin: '6px', backgroundColor: '#fff', color: '#000' }}
              size="large"
              startIcon={<PlayCircleFilledIcon />}
            >
              {item.buttonText2}
            </Button>
          </Box>
        </Paper>
      ))}
    </Carousel>
  );
}

export default HeroSection;
