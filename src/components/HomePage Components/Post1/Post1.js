import React from 'react';
import { styled } from '@mui/system';
import { Box, Card, CardHeader, Grid, Paper, Typography , Stack} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { green } from '@mui/material/colors';
import imgLadies from '../../../assets/images/ladiesimg.png';
import {Fade, Slide} from 'react-awesome-reveal'

const Container = styled('div')(({theme})=>({
  padding: theme.spacing(2),
  backgroundColor: '#f5f5f5',
  minHeight: '100vh',
  
}));

const StyledPaper = styled(Paper)({
  paddingTop: '10rem',
  paddingLeft:'5rem',
  textAlign: 'center',
  
  boxShadow:'none',
  
});

const StyledBox = styled(Box)(({theme})=>({
  
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '20px',
  backgroundColor: '#f5f5f5',
}));

const postTitle = {
  fontSize: 20,
  color:'blue',
}
const postSubTitle = {
marginLeft:4,
color: '#3e4f3d',
fontStyle: 'italic',
fontFamily: 'Monospace'
}
const postBody = {
fontSize:'3.1rem',
lineHeight: 1.5,
marginTop: 3,
color: '#1a2a4c',
justifyContent:'end',
fontWeight: 'light',
}


const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  justifyContent:'center',
  textAlign: 'center',
  color: 'blue',
}));


const CustomItem = ({ leftBoxColor, leftFontColor, rightUpperBoxColor, rightUpperFontColor, rightLowerBoxColor, rightLowerFontColor, leftText, rightUpperText,rightLowerText }) => {
  return (
    <Item>
      <Grid container >

      {/*This Left of Item*/}
        <Grid item xs={6} sx={{backgroundColor:leftBoxColor}}>
          <Box sx={{  }}>
            <Typography sx={{fontWeight:'bold', color:leftFontColor, fontSize:'70pt'}}>{leftText}</Typography>
          </Box>
        </Grid>

        {/*This Right of Item divided into two*/}
        <Grid item xs={6}>
          <Grid container direction="column" >
            <Grid item>
              <Box sx={{  padding: 2 }}>
                <Typography sx={{color:rightUpperFontColor, fontSize:'20pt', textTransform:'uppercase', fontWeight:'bold'}}>{rightUpperText}</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ padding: 2 }}>
                <Typography sx={{color:rightLowerFontColor, fontSize:'12pt', fontWeight:'bold' }}>{rightLowerText}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </Item>
  );
};


function Post1() {
  return (
    <Container>
      <Grid container spacing={3} marginTop={2} marginBottom={10}>
        
        <Grid item xs={12} md={7}>
          <StyledBox >
            <Typography variant="h1" >
              Build a Professional Website
            </Typography>
            <Typography variant="body3" sx={postSubTitle}>
              25.09 Posted by XparTech
            </Typography>
            
            <Typography sx={postBody}>
              In today's digital age, having a professional website is important for your business. At Xpartech, We believe that a website should be more than just a digital storefront; it is a reflection of your brand's values!<p marginTop="20px"> That's why we focus on creating websites that are tailored to your business, ensuring that every element, from the layout to the color scheme, aligns with your brand identity.</p>
            </Typography>
              
          </StyledBox>
          
        </Grid>
        <Grid item xs={12} md={5}>
          
            <img src={imgLadies} style={{height:'80%', width:'80%'}}/>
          
        </Grid>
      </Grid>

      {/*This is the line */}

      <Box display="flex" justifyContent="center">
        <hr style={{border:'1px solid black', width:'60%', alignContent:'center'}}/>
      </Box>
      
      {/*This is the in easy step*/}
      <Box display="flex" justifyContent="center" marginTop={5} marginBottom={5}>
        <Typography variant='h1' style={{color:'#235887', fontSize:'4em',fontWeight:'bold'}}>
          in III easy steps
         </Typography>
      </Box>
     
     {/*These are the steps part using customItem that uses the Item, all declared above*/}
      <Stack direction={{xs:'column', sm:'column', md:'row'}} spacing={2}  alignItems="center" justifyContent="center">
          <CustomItem 
              leftBoxColor="#235887" 
              leftFontColor="#ffffff" 
              rightUpperBoxColor="#afaf3f" 
              rightUpperFontColor="#994708" 
              rightLowerBoxColor="lightcoral" 
              rightLowerFontColor="black"
              leftText="1"
              rightUpperText="Select A Design"
              rightLowerText="Go to our template section & select from our beautiful design, one that looks like your brand"
            />
            <CustomItem 
              leftBoxColor="#994708" 
              leftFontColor="#ffffff" 
              rightUpperBoxColor="#afaf3f" 
              rightUpperFontColor="#235887" 
              rightLowerBoxColor="lightcoral" 
              rightLowerFontColor="black"
              leftText="2"
              rightUpperText="Customize"
              rightLowerText="Check the boxes to add features that look more like your brand, upload your media & tell us more in the box"
            />
            <CustomItem 
              leftBoxColor="#6d636e" 
              leftFontColor="#ffffff" 
              rightUpperBoxColor="#afaf3f" 
              rightUpperFontColor="#994708" 
              rightLowerBoxColor="lightcoral" 
              rightLowerFontColor="black"
              leftText="3"
              rightUpperText="Submit a Project Request"
              rightLowerText="When you submit a request, We will get back to you within 24hrs. Make your initial deposit & enjoy the experience"
            />
      </Stack>

       </Container>
    
  );
}

export default Post1;
