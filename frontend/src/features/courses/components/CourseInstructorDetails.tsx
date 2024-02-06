import { Box, Typography, Avatar } from '@mui/material'
import { Course } from '../types/Course'

const CourseInstructorDetails = ({course}: {course: Course}) => {
  return (
    <Box component="div" sx={{
                display: 'flex',
                flexDirection: 'column',
                marginX: '5px',
                padding: '50px',
                gap: '20px',
                backgroundColor: 'white'
            }}>
                <Typography variant="h5" component="h2">
                    المدرب
                </Typography>
                <Avatar alt={course?.instructor} src={course?.avatar} sx={{
                    width: '100px',
                    height: '100px',
                
                }}/>
                <Typography variant="body1" component="p">
                    {course?.instructor}
                </Typography>
            </Box>
  )
}

export default CourseInstructorDetails