import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material'

import { Course } from '../types/Course'

const CourseItem = ({course, key}: {course: Course, key: number}) => {
    return (
        <Grid item key={key} xs={12} sm={6} md={4}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
            <CardMedia
                component="div"
                sx={{
                // 16:9
                pt: '56.25%',
                }}
                image="https://source.unsplash.com/random?wallpapers"
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                    {course.title}
                </Typography>
                <Typography>
                    {course.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">View</Button>
                <Button size="small">Edit</Button>
            </CardActions>
            </Card>
        </Grid>
    )
}

export default CourseItem