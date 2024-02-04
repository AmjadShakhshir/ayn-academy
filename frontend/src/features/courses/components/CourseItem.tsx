import { Grid, Card, CardMedia, CardContent, Typography, Box, Avatar, Rating } from '@mui/material'

import { Course } from '../types/Course'
import { Link } from 'react-router-dom'

const CourseItem = ({course, key}: {course: Course, key: number}) => {
    return (
        <Grid item key={key} xs={12} sm={6} md={4}>
            <Link to={`/courses/${course._id}`} style={{textDecoration: 'none'}}>
                <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                <CardMedia
                    component="div"
                    sx={{
                    // 16:9
                    pt: '56.25%',
                    }}
                    image={course.image}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Box component='div' sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <Typography gutterBottom variant="body2" component="h2" sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                        }}>
                        <Avatar alt={course.instructor} src={course.avatar} />
                        {course.instructor}
                        </Typography>
                        <Typography gutterBottom variant="body2" component="h2" sx={{
                            border: '1px solid #ccc',
                            padding: '12px 10px',
                            textAlign: 'center',
                            borderRadius: '50%',
                            backgroundColor: '#ffb14c',
                        }}>
                            {course.price} €
                        </Typography>
                    </Box>
                    <Typography gutterBottom variant="h5" component="h2">
                        {course.title}
                    </Typography>
                    <Typography>
                        {course.description}
                    </Typography>
                </CardContent>
                <CardContent sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between'
                }}>
                    <Rating name="half-rating" defaultValue={3.5} />
                    4.5 (23)
                </CardContent>
                </Card>
            </Link>
        </Grid>
    )
}

export default CourseItem