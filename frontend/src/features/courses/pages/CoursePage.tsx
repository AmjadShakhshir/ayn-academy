import { Avatar, Box, Rating, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import { courseData } from '../data/courseData';

const Course = () => {
    const params = useParams();
    const { courseId } = params;
    const course = courseData.find((course) => course._id === courseId);
    
    return (
        <Box component="main" sx={{
            backgroundColor: 'lightgray',
            padding: '30px 0 70px',
        }}>
            <Box component="div" sx={{
                display: 'flex',
                marginX: '10%',
                padding: '20px',
                height: '300px'
            }}>
                <img src={course?.image} alt={course?.title} style={{width: '300px'}} />
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

            <Box component="div" sx={{
                display: 'flex',
                flexDirection: 'column',
                marginX: '10%',
                padding: '50px',
                gap: '20px',
                backgroundColor: 'white'
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

            <Box component="div" sx={{
                display: 'flex',
                flexDirection: 'column',
                marginX: '10%',
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
        </Box>
    )
}

export default Course