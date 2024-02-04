import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaSignInAlt } from 'react-icons/fa';
import { Box,
  Button,
  Typography,
  FormControl,
  Grid,
  TextField,
  Paper } from '@mui/material';

import { login, reset } from '../../features/auth/authService.ts';
import Spinner from '../components/Spinner.tsx'
import useAppSelector from '../hooks/useAppSelector.ts';
import useAppDispatch from '../hooks/useAppDispatch.ts';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData

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
      dispatch(reset())
    }
  }, [currentUser, error, status, message, dispatch, navigate])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({ 
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const userData = {
      email,
      password,
    }
    dispatch(login(userData))
  }

  if (status === 'loading') {
    return <Spinner />
  }

  return (
  <Grid container spacing={2} my={'40px'} justifyContent = "center">
    <Grid item xs={12} md={6}>
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
  )
}

export default Login