import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Box, Typography } from '@material-ui/core'
import CourseForm from '../components/CourseForm';
import Spinner from "../components/Spinner";
import { getCourses, reset } from '../features/courses/courseSlice';
import CourseItem from '../components/CourseItem';

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector(state => state.auth)
  const { courses, isLoading, isError, message } = useSelector((state) => 
  state.courses); 

  useEffect(() => {
    if (isError){
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getCourses());

    return ()=> {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }
  
  return (
    <>
      <Box variant="section">
          <Typography
          variant="h2"
          color="textPrimary"
          gutterBottom>
            مرحبا { user && user.name }
          </Typography>
          <Typography
          variant="h5"
          color="textSecondary"
          paragraph>
            لوحة التحكم
          </Typography>  
      </Box>
      <Box variant="section">
        <CourseForm />
      </Box>
      <Box variant="section">
        { courses.length > 0 ? (
          <Box variant="section">
            { courses.map((course) =>
              <CourseItem key={course._id} course={course} />
              )}
          </Box>
        ) : (
          <Typography variant="h3">
            You don't have any courses
          </Typography>
        )}
      </Box>
    </>
  )
}

export default Dashboard