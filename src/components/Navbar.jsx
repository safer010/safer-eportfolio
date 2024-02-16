import * as React from 'react';

//materials
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'
import logo from '../assets/logo4.png'
export default function ButtonAppBar() 

{
  return (
    <Box className='navbar-body'>

        <Box className="navlogo">
          <Link to="/"><img src={logo} className='logo'/></Link>
        </Box>

        <Box className="navlink" sx={{ display: { xs: 'none ', md: 'none', lg: 'block' } }}>
          <Link to="/" className='navbar-link-indiv'>Profile</Link>
          <Link to="/Projects" className='navbar-link-indiv'>Projects</Link>
          <Link to="/Contact" className='navbar-link-indiv'>Contact</Link>
        </Box>
    </Box>
  );
}

