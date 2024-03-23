import { Box, Typography } from "@mui/material"
import { images } from "../constants"

const About = () => {
    return (
        <Box component='section' className='about'>
            <Box component='div' className='about-content'>
                <Typography variant='h3' className="about-title">من نحن ؟</Typography>
                <Typography variant='body1' className="about-body">
                    نحن موقع تعليمي يقدم دورات تعليمية في مجالات متعددة ومتنوعة
                </Typography>
            </Box>      
            <img className="about-img" src={images.about} alt='placeholder' />
        </Box>
    )
}

export default About