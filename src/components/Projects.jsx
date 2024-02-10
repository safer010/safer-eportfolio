import React from 'react'

//materials
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import ProjectsContent from './ProjectsContent';

//images
import ProjImg1 from '../assets/Proj1.png'
import ProjImg2 from '../assets/Proj2.png'
import ProjImg3 from '../assets/Proj3.png'
import ProjImg4 from '../assets/Proj4.png'
import ProjImg5 from '../assets/Proj5.png'
import ProjImg6 from '../assets/Proj6.png'

//bg
import ProjectPaperbg1 from '../assets/paperbag6.png'
import ProjectPaperbg2 from '../assets/paperbag6.6.png'
import ProjectButterfly1 from '../assets/butterfly2.png'
import ProjectFlower1 from '../assets/flower9.png'

const Projects = () => {
  return (
    <Box className="container-fluid profilebody">
      <img src={ProjectPaperbg1} alt="" className='ProjectPaperbg1'/>
      <img src={ProjectPaperbg2} alt="" className='ProjectPaperbg2'/>
      <img src={ProjectButterfly1} alt="" className='ProjectButterfly1'/>
      <img src={ProjectFlower1} alt="" className='ProjectFlower1'/>

      <div className='project-content'>
        <h1 className='projectcontent-h2'>Projects</h1>
        <p className='projectcontent-p'>
            Here are some of the projects I created
        </p>
      </div>

      <Box>
        <Box className="project-card">
          <ProjectsContent image={ProjImg1} title="Hamrie Medical Center" details="A web that contains login and patient form, to get personal and medical information of user. Built with JS, HTML, and CSS. " link ="https://safer010.github.io/hamrie-medical-center/"/>
          <ProjectsContent image={ProjImg2} title="Code Bootcamp" details="A web that contains information and forms to get data to the user. Built with HTML, CSS, and Bootstrap." link ="https://safer010.github.io/codeweb/"/>
          <ProjectsContent image={ProjImg6} title="Car" details="An online shop for car  wherein the user can change the color of the car that is displayed. This is built with JS, HTML, and CSS." link ="https://safer010.github.io/car/"/>
        </Box>

        <Box className="project-card">
          <ProjectsContent image={ProjImg5} title="Hamrie" details="Hamrie is an educational web that contains different information regarding hamsters, it is built with HTML, Bootstrap, and CSS." link ="https://safer010.github.io/"/>
          <ProjectsContent image={ProjImg4} title="Billing" details="This is a billing form that gets data such as names, address, and payment methods to the user, it is created with Bootstrap and HTML" link ="https://safer010.github.io/bootstrap-form/"/>
          <ProjectsContent image={ProjImg3} title="Resume" details="This is a resume that contains information about me it is built with HTML and CSS only. This is actually my first project I created" link ="https://safer010.github.io/resume/"/>
        </Box>
      </Box>
    </Box>
  )
}

export default Projects
