import { Box, Typography, Rating } from '@mui/material'
import { Course } from '../types/Course'

const CourseBanner = ({ course}: { course: Course}) => {
  return (
    <Box component="div" sx={{
            display: 'flex',
            marginX: '5%',
            padding: '20px',
            height: '300px'
        }}>
            <img src={course?.image} alt={course?.title} style={{width: '300px', borderRadius: '10px'}} />
            <Box component="div" sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '5px',
                padding: '20px',
            }}>
                <Typography variant="h3" component="h1">
                    {course?.title}
                </Typography>
                <Typography variant="body2" component="h5">
                    بواسطة {course?.instructor}
                </Typography>
                <Typography variant="h5" component="h4">
                    {course?.description}
                </Typography>
                <Rating name="half-rating" defaultValue={3.5} />
                    4.5 (23)
            </Box>
        </Box>
  )
}

export default CourseBanner