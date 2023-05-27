import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Box, Typography } from '@material-ui/core'
import CourseForm from '../components/CourseForm';

const Dashboard = () => {
  const navigate = useNavigate()
  const { user } = useSelector(state => state.auth)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  
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
    </>
  )
}

export default Dashboard