import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import { images } from "../constants"
import { Link } from "react-router-dom"
import { useState } from "react"
import { Brands, Why } from "../containers"

const Home = () => {
    const [ email, setEmail ] = useState('');

    const onChange = (e) => {
        setEmail(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
  return (
    <>
        <Box variant="main" sx={{ flexGrow: 1,
        p: 3,
        bgcolor: 'rgba(250,204,128, .2)' }}>
            <Grid container spacing={2}
            sx={{
                display: "flex",
                alignItems: "center",
            }}>
                <Grid item xs={12} md={6}>
                    <Typography
                    variant="h1"
                    fontSize={{ xs: "h2.fontSize", md: "h1.fontSize" }}
                    component="h1"
                    gutterBottom>
                        منصة عين
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        تدريبية . تربوية . تعليمية
                    </Typography>
                    <Box variant="section" mb={2}>    
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
                        <Button
                        onClick={onSubmit}
                        variant="contained"
                        sx={{ p: 2 }}> 
                            {/* State attribute to pass email to register page */}
                            <Link to="/register" state= {{ email: email }}>إبدأ الآن</Link>
                        </Button>
                    </Box>

                    <Box variant="section" mb={2}
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
        <Why />
    </>
  )
}

export default Home