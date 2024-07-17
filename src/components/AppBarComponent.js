import React, {useState, useEffect, MouseEvent} from 'react'
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { Button } from '../../Button Component/Button';
import { AppBar, Toolbar, Box, Button, IconButton } from '@mui/material';
import logo from '../assets/images/xpartech2.png';
import Card from "@mui/material/Card";
import CardMedia from '@mui/material/CardMedia';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const AppBarComponent = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const navigate = useNavigate();
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuClose = (path) => {
    navigate(path)
    setAnchorEl(null);
  };
  
  const handleClick =(path)=>{
    navigate(path)
  }
  const IconButtonStyle = {
    width: '70%',
    height: '200px',
  }
  return (
   <AppBar position='static' 
   sx={{backgroundColor: 'transparent', 
   height: 75, alignContent: 'center'}}>
    <Toolbar>
    <Card elevation={0} sx={{width: 305,
                    borderRadius: 100,
                    backgroundColor: 'transparent',
                    flexGrow: 1,
                    display: {xs: 'none', md: 'none', lg: 'flex'}
                    }}>
                  <CardMedia
                        sx={{ height: 65, width: 300,}}
                        image={logo}
                      />
                  </Card>
                  <Card elevation={0} sx={{width: 205,
                    borderRadius: 100,
                    backgroundColor: '#057fff',
                    alignSelf: 'center',
                    flexGrow: 1,
                    marginLeft: 0,
                    display: {xs: 'none', md: 'flex', lg: 'none'}
                    }}>
                  <CardMedia
                        sx={{ height: 65, width: 200,}}
                        image={logo}
                      />
                  </Card>
    {/* <img src={logo} alt='' width={150} height={100}/> */}
    <Box sx={{ display: {xs: 'none', md: 'flex'}}}>
        <Button color='inherit' sx={{fontSize: '17px', textTransform: 'none'}} 
        onClick={() =>handleClick('/home')}>Home</Button>
        <Button color='inherit' sx={{fontSize: '17px', textTransform: 'none'}}
        onClick={() =>handleClick('/about')}>About</Button>
        <Button color='inherit' sx={{fontSize: '17px', textTransform: 'none'}}
        onClick={() =>handleClick('/Services')}>Services</Button>
        <Button  variant='outlined'color='inherit' sx={{fontSize: '17px', textTransform: 'none'}}
        onClick={() =>handleClick('/Contact')}>Contact</Button>
    </Box>
    <Box sx={{  flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
        <IconButton edge= 'start' color='inherit' onClick={(event) => handleMenuClick(event)}>
            <MenuIcon sx={{width: 80, height: '50%',}}/>
        </IconButton>
        <Menu anchorEl={anchorEl} 
        open={isMenuOpen} 
        onClose={handleClose} sx={{ width: 200,
         display: {xs: 'flex', md: 'none'}}}>
           <MenuItem  sx={{width: 150, justifyContent: 'center', fontSize: '13px'}} onClick={() => handleMenuClose('/home')}>Home</MenuItem>
            <MenuItem sx={{width: 150, justifyContent: 'center', fontSize: '13px'}} onClick={() => handleMenuClose('/about')}>About</MenuItem>
            <MenuItem sx={{width: 150, justifyContent: 'center', fontSize: '13px'}} onClick={() => handleMenuClose('/Services')}>Services</MenuItem>
            <MenuItem sx={{width: 150, justifyContent: 'center', fontSize: '13px'}} onClick={() => handleMenuClose('/Contact')}>Contact</MenuItem>
        </Menu>
    </Box>
    <Card elevation={0} sx={{width: 205,
                    borderRadius: 100,
                    backgroundColor: 'transparent',
                    alignSelf: 'center',
                    marginLeft: 10,
                    display: {xs: 'flex', md: 'none'}
                    }}>
                  <CardMedia
                        sx={{ height: 65, width: 200,}}
                        image={logo}
                      />
                  </Card>
          
    </Toolbar>

   </AppBar>
  )
}

export default AppBarComponent
