import { Box, Button, Typography, FormControl, Grid, TextField, Paper } from '@mui/material';
import { FaUser } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';

import { reset, signup } from '../../features/auth/authService';
import Spinner from '../components/Spinner';
import useAppSelector from '../hooks/useAppSelector';
import useAppDispatch from '../hooks/useAppDispatch';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });

  // This snippets to pass email from Home.jsx to Register.jsx
  // using react-router-dom hooks (useLocation)
  // 
  const location = useLocation()
  const emailForm = location.state ? location.state.email : ''

  const { name, email, password, password_confirmation } = formData

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { currentUser, status, error, message } = 
  useAppSelector(state => state.auth);

  useEffect(() => {
    if (status === 'succeeded' || currentUser) {
      navigate('/')
    }

    if (error) {
      toast.error(message)
    }

    dispatch(reset())
  }, [currentUser, error, status, message, dispatch, navigate])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({ 
      ...prevState,
      [e.target.name]: e.target.value,
      ['email']: emailForm ? emailForm : prevState['email']
    }))
  }
  
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(password !== password_confirmation) {
      toast.error('كلمة المرور غير متطابقة')
    } else {
      const userData = {
        name,
        email,
        password,
        role: 'user'
      }
      dispatch(signup(userData))
    }
  }

  if (status === 'loading') {
    return <Spinner />
  }

  return (
    <>
      <Grid container spacing={2} my={'20px'} justifyContent = "center">
        <Grid item xs={12} md={6} component='div'>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography component='h1' variant='h3'>
              <FaUser /> إنشاء حساب جديد
            </Typography>
            <Box
            component='form'
            onSubmit={onSubmit}
            noValidate
            autoComplete='off'
            sx={{ mt: 1 }}>
              <FormControl
              sx={{ m: 1, width: '50%'}}>
                <TextField
                id='name'
                name='name'
                type='text'
                value={name}
                onChange={handleChange}
                required
                variant='outlined'
                label='الاسم'
                fullWidth/>
              </FormControl>

              <FormControl
              sx={{ m: 1, width: '50%'}}>
                <TextField
                id='email'
                name='email'
                type='email'
                value={emailForm ? emailForm : email}
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

              <FormControl
              sx={{ m: 1, width: '50%'}}>
                <TextField
                id='password_confirmation'
                name='password_confirmation'
                type='password'
                value={password_confirmation}
                onChange={handleChange}
                required
                variant='outlined'
                label='تأكيد كلمة المرور'
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

export default Register