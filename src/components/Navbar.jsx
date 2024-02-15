import * as React from 'react';

//materials
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import {Stack} from '@mui/material'
import logo from '../assets/logo4.png'
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import ToggleButton from '@mui/material/ToggleButton';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
let hi = document.getElementsByClassName("hi")

//fix this page 



export default function ButtonAppBar() 
{
  function Toggle ()
  {
    // <Stack> 
    //   <Link to="/" className='navbar-link-indiv'>Profile</Link>
    //   <Link to="/Projects" className='navbar-link-indiv'>Projects</Link>
    //   <Link to="/Contact" className='navbar-link-indiv'>Contact</Link>
    // </Stack>
    hi.innerHTML="hi"
    alert("hi")
  }

  let menu = <Box> 
              <Link to="/" className='navbar-link-indiv'>Profile</Link>
              <Link to="/Projects" className='navbar-link-indiv'>Projects</Link>
              <Link to="/Contact" className='navbar-link-indiv'>Contact</Link>
            </Box>
  
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

        <ToggleButton value="center" aria-label="centered" sx={{ display: { xs: 'block ', md: 'block', lg: 'none' } }}>
          <FormatAlignCenterIcon onClick={Toggle}/>
          <div className='hi'></div>

          <ul>
            <li><MenuItem><Link to="/" className='navbar-link-indiv'>Profile</Link></MenuItem></li>
            <li><MenuItem><Link to="/Projects" className='navbar-link-indiv'>Projects</Link></MenuItem></li>
            <li><MenuItem><Link to="/Contact" className='navbar-link-indiv'>Contact</Link></MenuItem></li>
         </ul>
        </ToggleButton>
    </Box>
  );
}

