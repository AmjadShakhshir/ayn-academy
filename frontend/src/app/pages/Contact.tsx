import { Box, Typography, FormControl, Button, TextField } from "@mui/material";

import '../assets/scss/contact.scss';

const Contact = () => {
    return (
        <Box component='div' className="contact-form">
            <Box className='contact-content'>
                <FormControl>
                    <Typography variant='h3'>تواصل معنا</Typography>
                    <Typography variant='body1'>
                        للتواصل معنا يمكنكم مراسلتنا عبر البريد الالكتروني
                    </Typography>
                    <TextField
                        id="email"
                        label="البريد الالكتروني"
                        variant="outlined"
                        sx={{ my: 2 }}
                    />
                    <TextField
                        id="message"
                        label="الرسالة"
                        variant="outlined"
                        multiline
                        rows={4}
                    />
                    <Button variant="contained" className="contact-btn">
                        إرسال
                    </Button>
                </FormControl>
            </Box>
            <Box>
                <img src='https://i.pinimg.com/564x/76/cd/fe/76cdfe8dae763ecdf14c8ec1f32fc905.jpg' alt='placeholder' />
            </Box>
        </Box>
    )
}

export default Contact