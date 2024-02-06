import { Box, Button, Divider, Typography } from '@mui/material'

import { Course } from '../types/Course'

const CourseSide = ({ course}: { course: Course}) => {
  return (
    <Box component="div" sx={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
    }}>
        <Typography variant="h5" component="h2">
            Course details
        </Typography>
        <Typography variant="body1" component="p">
            {course.description}
        </Typography>
        <Divider orientation="horizontal" variant="middle" flexItem />
        <Typography variant="h6" component="h2">
            Duration
        </Typography>
        <Typography variant="body1" component="p">
            6 weeks
        </Typography>
        <Divider  orientation="horizontal" variant="middle" flexItem />
        <Typography variant="h6" component="h2">
            Price
        </Typography>
        <Typography variant="body1" component="p">
            {course.price} €
        </Typography>
        <Divider  orientation="horizontal" variant="middle" flexItem  />
        <Typography variant="h6" component="h2">
            Enroll now
        </Typography>
        <Button variant="contained" color="primary">
            Enroll
        </Button>
    </Box>
  )
}

export default CourseSide