import React from 'react'

//materials
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Box className='Footer-body'>
        <p className='Footer-content'> &copy; Copyright <Link to="/" className='Footer-link'>Safer</Link> 2024</p>
    </Box>
  )
}

export default Footer
