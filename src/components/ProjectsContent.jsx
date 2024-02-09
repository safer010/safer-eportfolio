import React from 'react'

//materials
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'


const ProjectsContent = (props) => {
  return (
    
    <Box className="container-fluid projectscontent-body">
        <Card className='projectcontent-card'>
      
            <CardContent className='projectcontent-content'>
                <Box className='projectcontent-content-img'>
                  <img src={props.image} className='projectcontent-img'/>
                </Box>

                <h2 gutterBottom variant="h5" component="div" className='projectcontent-content-title'>
                {props.title}
                </h2>

                <p variant="body2" color="text.secondary" className='projectcontent-content-detail'>
                {props.details}
                </p>

                <Box className='projectcontent-link'>
                  <Link target='blank' to={props.link} className='projectcontent-link-content'>View Project</Link>
                </Box>
            </CardContent>

        </Card>
    </Box>
    
  )
}

export default ProjectsContent
