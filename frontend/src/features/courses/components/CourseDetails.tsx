import { Box, Typography } from '@mui/material'
import { Course } from '../types/Course'

const CourseDetails = ({course}: {course: Course}) => {
  return (
    <Box component="div" sx={{
            display: 'flex',
            flexDirection: 'column',
            marginX: '5px',
            padding: '50px',
            gap: '20px',
            backgroundColor: 'white',
            width: '100%',
        }}>
            <Box component="div" sx={{
                gap: '10px',
            }}>
                <Typography variant="h5" component="h2">
                    ماذا ستتعلم
                </Typography>
                {course?.learn.map((learning, index) => (
                    <Typography key={index} variant="body1" component="p">
                        * {learning}
                    </Typography>
                ))}
            </Box>
            <Box component="div" sx={{
                gap: '10px',
            }}>
                <Typography variant="h5" component="h2">
                    المتطلبات
                </Typography>
                {course?.requirements.map((requirement, index) => (
                    <Typography key={index} variant="body1" component="p">
                        * {requirement}
                    </Typography>
                ))}
            </Box>
        </Box>
  )
}

export default CourseDetails