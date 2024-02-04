import { Box, Button, FormControl, Grid, TextField, Typography } from "@mui/material"
import { images } from "../constants";
import { Link } from "react-router-dom";
import { useState } from "react";
import Brands from "../containers/Brands";
import Why from "../containers/Why";
import Future from "../containers/Future";
import CoursesFeatures from "../containers/CoursesFeatures";

const Home = () => {
    const [ email, setEmail ] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(email);
    }
  return (
    <>
        <Box component="main" sx={{ flexGrow: 1,
        p: '20px 5%',
        bgcolor: 'rgba(250,204,128, .2)' }}>
            <Grid container spacing={2}
            sx={{
                display: "flex",
                alignItems: "center",
            }}>
                <Grid item xs={12} md={6}>
                    <Typography
                    component="h1"
                    fontSize={{ xs: "h2.fontSize", md: "h1.fontSize" }}
                    variant="h1"
                    gutterBottom>
                        منصة عين
                    </Typography>
                    <Typography component="h6" gutterBottom>
                        تدريبية . تربوية . تعليمية
                    </Typography>
                    <Box component="section" mb={2}>    
                        <TextField id="outlined-basic"
                        label="البريد الإلكتروني"
                        name="email"
                        value={email}
                        onChange={onChange}
                        variant="outlined"
                        sx={{ width: "70%",
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,}}
                        />
                        <FormControl>
                            <Button
                            onClick={()=> onSubmit}
                            variant="contained"
                            color="primary"
                            sx={{ p: 2 }}> 
                                {/* State attribute to pass email to register page */}
                                <Link to="/register" state= {{ email: email }}>
                                    <Typography variant="body1" color={'white'}>
                                        إشترك الآن
                                    </Typography>
                                </Link>
                            </Button>
                        </FormControl>
                    </Box>

                    <Box component="section" mb={2}
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
        </Box>
        <Brands />
        <CoursesFeatures />
        <Why />
        <Future />
    </>
  )
}

export default Home