import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import CourseForm from '../../features/courses/components/CourseForm';
import Spinner from "../components/Spinner";
import { getCourses, reset } from '../../features/courses/courseService';
import CourseItem from '../../features/courses/components/CourseItem';
import useAppSelector from '../hooks/useAppSelector';
import useAppDispatch from '../hooks/useAppDispatch';

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { currentUser } = useAppSelector(state => state.auth)
  const { courses, status, error, message } = useAppSelector((state) => 
  state.courses); 

  useEffect(() => {
    if (error){
      console.log(message)
    }

    if (!currentUser) {
      navigate('/login')
    }

    dispatch(getCourses());

    return ()=> {
      dispatch(reset())
    }
  }, [currentUser, navigate, error, message, dispatch])

  if (status === 'loading') {
    return <Spinner />
  }
  
  return (
    <>
      <Box component="section">
          <Typography
          component="h2"
          color="textPrimary"
          gutterBottom>
            مرحبا { currentUser && currentUser.name }
          </Typography>
          <Typography
          component="h5"
          color="textSecondary"
          paragraph>
            لوحة التحكم
          </Typography>  
      </Box>
      <Box component="section">
        <CourseForm />
      </Box>
      <Box component="section">
        { courses.length > 0 ? (
          <Box component="section">
            { courses.map((course, index) => // you should pass courses to map it in the CourseItem component
              <CourseItem key={index} course={course}  />
              )}
          </Box>
        ) : (
          <Typography component="h3">
            You don't have any courses
          </Typography>
        )}
      </Box>
    </>
  )
}

export default Dashboard