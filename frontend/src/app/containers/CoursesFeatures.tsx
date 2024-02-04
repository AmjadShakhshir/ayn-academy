import { Box, Grid, Container, Typography, Button } from "@mui/material";
import MoreIcon from '@mui/icons-material/More';

import CourseItem from "../../features/courses/components/CourseItem";
import { courseData } from "../../features/courses/data/courseData";

const CoursesFeatures = () => {
    return (
        <Box component='div' sx={{
            backgroundColor: '#ffe5df',
            padding: '60px 0'
        }}>
            <Container maxWidth="lg">
                <Typography variant='h4' sx={{ textAlign: 'center', marginBottom: '40px' }}>
                    اختر من بين أفضل الدورات
                </Typography>
                <Grid container spacing={2} sx={{ padding: '20px 0' }}>
                    {courseData.slice(0, 3).map((course, index) => (
                        <CourseItem key={index} course={course} />
                    ))}
                </Grid>
                <Button variant="contained" color="error" href="/courses" size="large" startIcon = { <MoreIcon />} >
                        <Typography variant='h6' sx={{ paddingX: '5px' }}>
                            عرض المزيد
                        </Typography>
                </Button>
            </Container>
        </Box>
    )
}

export default CoursesFeatures