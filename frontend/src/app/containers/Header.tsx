import { Box, Container, Grid, Typography, TextField, FormControl } from '@mui/material'
import { Link } from 'react-router-dom'
import { images } from '../constants'
import { useState } from 'react'

const Header = () => {
  const [ email, setEmail ] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(email);
    }
  return (
    <Box component="main" className="home gradient-bg" sx={{ flexGrow: 1}}>
        <Container maxWidth="xl">
            <Grid container spacing={3}
            sx={{
                display: "flex",
                alignItems: "center",
                padding: { xs: 2, md: 4},
            }}>
                <Grid item xs={12} md={6}>
                    <Typography
                    component="h1"
                    className='header-title'
                    fontSize={{ xs: "h2.fontSize", md: "h1.fontSize" }}
                    variant="h1"
                    gutterBottom>
                        منصة عين
                    </Typography>
                    <Typography className='header-subtitle' component="h6" gutterBottom>
                        تدريبية . تربوية . تعليمية
                    </Typography>
                    <Box component="section" mb={2}>    
                        <TextField id="outlined-basic"
                        label="البريد الإلكتروني"
                        name="email"
                        value={email}
                        onChange={onChange}
                        variant="outlined"
                        color='error'
                        sx={{ width: "70%",
                        backgroundColor: "white",
                        borderRadius: 3,
                        borderTopLeftRadius: 5,
                        borderBottomLeftRadius: 5,}}
                        />
                        <FormControl>
                            <button
                            onClick={onSubmit}
                            className='btn-primary'> 
                                {/* State attribute to pass email to register page */}
                                <Link to="/register" state= {{ email: email }}>
                                    <Typography variant="body1" color={'white'}>
                                        إشترك الآن
                                    </Typography>
                                </Link>
                            </button>
                        </FormControl>
                    </Box>

                    <Box component="section" mb={2}
                    className='header-people'
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row"},
                        alignItems: { xs: "flex-start", md: "center"},
                    }}>
                        <img
                        src={images.people}
                        alt="placeholder" />
                        <Typography variant='subtitle2' gutterBottom
                        sx={{
                            mt: { xs: 2, md: 0},
                        }}>
                            ١٦٠٠ شخص قاموا بطلب الإشتراك في برامجنا في آخر ٢٤ ساعة.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img
                    style={{ width: "100%" }}
                    src={images.intro}
                    alt="placeholder" />
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

export default Header