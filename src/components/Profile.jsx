import React from 'react'
//materials
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import SelfImg from '../assets/profile1.png'

//bg
import Paperbg1 from '../assets/paperbag6.3.png'
import Paperbg2 from '../assets/paperbag6.2.png'
import Flower1 from '../assets/flower13.png'






const Profile = () => {
  return (
    <Box className="container-fluid profilebody">
      <img src={Paperbg1} alt="" className='Paperbg1'/>
      <img src={Flower1} alt="" className='Flower1'/>
      
      <div class="row profilegrid">

        <div class="col-sm-6 profilecontent">
          <h2 className='profilecontent-H'>Hello</h2>
          <h2 className='profilecontent-H2'>My Name is Safer</h2>
          <p  className='profilecontent-P'>
            I graduated high school last school year 2022-2023 in Science Technology Engineering and Mathematics (STEM) strand. 
            Now, I am currently studying full-stack web developer. My goal after studying is to pursue a job opportunity in a competitive 
            environment that will challenge me to push my boundaries and expand my knowledge in the field of web development while also allowing me to add value to the dynamics of the company.
          </p>
          <Link to="https://safer010.github.io/resume/" target="_blank" className='profilecontent-Link' >View Resume</Link>
        </div>

        <div class="col-sm-6 profileimg">
        <img src={SelfImg} alt="" className='SelfImg'/>
        </div>

       

        
      </div>
      <img src={Paperbg2} alt="" className='Paperbg2'/>


    </Box>
  )
}

export default Profile
