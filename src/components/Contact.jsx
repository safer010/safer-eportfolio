import React from 'react'

//materials
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'

//bg
import ContactPaperbg1 from '../assets/paperbag6.4.png'
import ContactPaperbg2 from '../assets/paperbag6.5.png'
import ContactFlower1 from '../assets/flower10.png'
import ContactButterfly1 from '../assets/butterfly2.png'
import ContactDrawing1 from '../assets/drawing9.png'





const Contact = () => {
  return (
    
    <Box className='container-fluid Contact-body'>
        <img src={ContactPaperbg1} alt="" className='ContactPaperbg1'/>
        <img src={ContactFlower1} alt="" className='ContactFlower1'/>
        <img src={ContactButterfly1} alt="" className='ContactButterfly1'/>
        <img src={ContactDrawing1} alt="" className='ContactDrawing1'/>


        
        <h1 className='Contact-h1'>Contact</h1>
        <p className='Contact-p'>Feel free to reach out if you want a to build something together, have a question, or just want to connect.</p>
        <p className='Contact-p-link'><a href="mailto:safermarie10@gmail.com" className='Contact-link'>safermarie10@gmail.com</a></p>

        <img src={ContactPaperbg2} alt="" className='ContactPaperbg2'/>

    </Box>
  )
}

export default Contact
