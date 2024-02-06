import { Box, Button, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import { courseData } from '../data/courseData';
import CourseBanner from '../components/CourseBanner';
import CourseDetails from '../components/CourseDetails';
import CourseInstructorDetails from '../components/CourseInstructorDetails';
import CourseSide from '../components/CourseSide';

const Course = () => {
    const params = useParams();
    const { courseId } = params;
    const course = courseData.find((course) => course._id === courseId);
    
    return (
        <Box component="main" sx={{
            backgroundColor: 'lightgray',
            margin: '0 auto',
            padding: '30px 0 70px',
        }}>
            {course ? (
                <>
                    <CourseBanner course={course} />
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={7} sx={{
                            borderRadius: '20px',
                            display: 'flex',
                            margin: '15px 5% 15px 0',
                            backgroundColor: 'white',
                            justifyContent: 'space-between',
                        }}>
                            <Box component="div" sx={{
                                padding: '20px',
                                borderRadius: '20px',
                                width: '70%',
                            }}>
                                <CourseDetails course={course} />
                                <CourseInstructorDetails course={course} />
                            </Box>
                            <Box component="div" sx={{
                                padding: '20px',
                                borderRadius: '20px',
                                marginTop: '20px',
                                width: '30%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '10px',
                            }}>
                                <Typography variant="h3" component="h2">
                                    Reviews
                                </Typography>
                                <Typography variant="body1" component="p">
                                    There's no review yet
                                </Typography>
                                <Button variant="contained" color="primary">
                                    Write a review
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={2} sx={{
                            borderRadius: '20px',
                            margin: '15px 1% 15px 0',
                            backgroundColor: 'white',
                        
                        }}>
                            <CourseSide course={course} />
                        </Grid>
                    </Grid>
                    </>
                ) : (
                <p>Loading course...</p>
            )}
        </Box>
    )
}

export default Course