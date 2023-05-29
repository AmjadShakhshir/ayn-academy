import { Box, Button, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { deleteCourse } from '../features/courses/courseSlice'

const CourseItem = ({ course }) => {
    const dispatch = useDispatch()
  return (
    <Box variant= "section"
    m={2}
    height={'100px'}
    width={'25%'}
    sx={{
        bgcolor: '#f8f8f8',
        borderRadius: '5px',
        boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.1)',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }}>
        <Box variant="section">
            { new Date(course.createdAt).toLocaleString('en-US')}
        </Box>
        <Typography variant="h4">
            <Button onClick={() => {
                dispatch(deleteCourse(course._id))}}>
                X
            </Button>
            { course.name }
        </Typography>
    </Box>
  )
}

export default CourseItem