import React from 'react';
import './serviceFooter.css';
import { Button } from '../components/Button Component/Button';
import { Link } from 'react-router-dom';
import Images from '../assets/images/xpartech2.png';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Card from "@mui/material/Card";
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import logo3 from '../assets/images/xpartech2.png';
import { Fade, Slide } from "react-awesome-reveal";

function ServiceFooter() {
  return (
    <div className='serviceFooter-container'>
         <Grid container spacing={8} direction={{xs: "column", md: "row"}}
                  justify="center" 
                  justifyContent="center"
                  alignItems="center"
                  marginTop={2}
                  marginBottom={5}
                  >
                <Grid item xs={4} sm={4}>
                  <Fade direction='left' duration={2000}>
                  <Typography variant='h1' color={'white'}
                  align="left"
                  sx={{
                      fontSize: '60px', 
                      textAlign: {
                        xs: 'center',
                        lg: 'left',
                        sm: 'center',
                        md: 'center',
                      },
                  }}>
                    Let's start something new together
                  </Typography>
                  </Fade>
                 
                </Grid>
                <Grid item xs={4} sm={4}>
                  <Fade direction='right' duration={2000}>
                  <Card elevation={0} sx={{width: 330, border: '1px solid white', 
                    borderRadius: 100,
                    padding: 10,
                    backgroundColor: '#057fff',
                    }}>
                  <CardMedia
                        sx={{ height: 100, width: 200,}}
                        image={logo3}
                      />
                  </Card>
                  </Fade>
                 
                </Grid>

                </Grid>
    <Divider color= '#ffffff'/>
    <section class='social-media'>
      <div class='social-media-wrap'>
        <div class='serviceFooter-logo'>
          <Link to='/' className='social-logo'>
            <img src={Images} alt=''/>
          </Link>
        </div>
        <small class='website-rights'>XPARTECH © 2020</small>
        <div class='social-icons'>
          <Link
            class='social-icon-link facebook'
            to='/'
            target='_blank'
            aria-label='Facebook'
          >
            <i class='fab fa-facebook-f' />
          </Link>
          <Link
            class='social-icon-link instagram'
            to='/'
            target='_blank'
            aria-label='Instagram'
          >
            <i class='fab fa-instagram' />
          </Link>
          <Link
            class='social-icon-link youtube'
            to='/'
            target='_blank'
            aria-label='Youtube'
          >
            <i class='fab fa-youtube' />
          </Link>
          <Link
            class='social-icon-link twitter'
            to='/'
            target='_blank'
            aria-label='Twitter'
          >
            <i class='fab fa-twitter' />
          </Link>
          <Link
            class='social-icon-link twitter'
            to='/'
            target='_blank'
            aria-label='LinkedIn'
          >
            <i class='fab fa-linkedin' />
          </Link>
        </div>
      </div>
    </section>
  </div>
  )
}

export default ServiceFooter
