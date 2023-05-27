import { Box, Button, Typography, FormControl, Grid, TextField, Paper } from '@mui/material'
import React from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner.jsx'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user, isLoading, isError, isSuccess, message } = 
  useSelector(state => state.auth);

  useEffect(() => {
    if (isSuccess || user) {
      navigate('/')
    }

    if (isError) {
      toast.error(message)
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, dispatch, navigate])

  const handleChange = (e) => {
    setFormData((prevState) => ({ 
      ...prevState,
      [e.target.name]: e.target.value,
     }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    // if(password !== password_confirmation) {
    //   toast.error('كلمة المرور غير متطابقة')
    // } else {
    //   const userData = {
    //     email,
    //     password,
    //   }
    //   dispatch(register(userData))
    // }
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <Grid container spacing={2} my={'20px'} justifyContent = "center">
        <Grid item xs={12} md={6} align={'center'}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography component='h1' variant='h3'>
              <FaSignInAlt /> تسجيل دخول
            </Typography>
            <Box component='form'
            onSubmit={onSubmit}
            noValidate
            autoComplete='off'
            sx={{ mt: 1 }}>

              <FormControl
              sx={{ m: 1, width: '50%'}}>
                <TextField
                id='email'
                name='email'
                type='email'
                value={email}
                onChange={handleChange}
                required
                label='البريد الإلكتروني'
                variant='outlined'
                fullWidth/>
              </FormControl>

              <FormControl
              sx={{ m: 1, width: '50%'}}>
                <TextField
                id='password'
                name='password'
                type='password'
                value={password}
                onChange={handleChange}
                required
                variant='outlined'
                label='كلمة المرور'
                fullWidth/>
              </FormControl>

              <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}>
                إنشاء حساب
              </Button>

            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default Login