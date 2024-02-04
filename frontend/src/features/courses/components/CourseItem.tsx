import { Box, Button, Typography } from "@mui/material"
import useAppSelector from "../../../app/hooks/useAppSelector"
import { deleteCourse } from "../courseService"
import useAppDispatch from "../../../app/hooks/useAppDispatch"

const CourseItem = () => {
    const course = useAppSelector((state) => state.courses.courses.find((course) => course._id === '615d2e3f6b3e9e5b6d4f0b2c')!)
    const dispatch = useAppDispatch()

    return (
        <Box component= "section"
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
            {/* <Box component="section">
                { new Date(course.createdAt).toLocaleString('en-US')}
            </Box> */}
            <Typography variant="h4">
                <Button onClick={() => {
                    dispatch(deleteCourse(course._id))}}>
                    X
                </Button>
                { course.title }
            </Typography>
        </Box>
    )
}

export default CourseItem