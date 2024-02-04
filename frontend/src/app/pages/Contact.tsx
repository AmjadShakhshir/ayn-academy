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
                <img src='https://via.placeholder.com/150' alt='placeholder' />
            </Box>
        </Box>
    )
}

export default Contact