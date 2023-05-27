import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import { images } from "../constants"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <Box variant="main" sx={{ flexGrow: 1,
    p: 3,
    bgcolor: 'rgba(250,204,128, .2)' }}>
        <Grid container spacing={2}
        sx={{
            display: "flex",
            alignItems: "center",
        }}>
            <Grid item xs={12} md={6}>
                <Typography variant="h1" component="h1" gutterBottom>
                    منصة عين
                </Typography>
                <Typography variant="h6" gutterBottom>
                    تدريبية . تربوية . تعليمية
                </Typography>
                <Box variant="section" mb={2}>    
                    <TextField id="outlined-basic"
                    label="البريد الإلكتروني"
                    variant="outlined"
                    sx={{ width: "70%",
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,}}
                    />
                    <Button
                    variant="contained"
                    sx={{ p: 2 }}> 
                        <Link to="/register">إبدأ الآن</Link>
                    </Button>
                </Box>

                <Box variant="section" mb={2}
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}>
                    <img
                    src={images.people}
                    alt="placeholder" />
                    <Typography variant='subtitle2' gutterBottom>
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
  )
}

export default Home