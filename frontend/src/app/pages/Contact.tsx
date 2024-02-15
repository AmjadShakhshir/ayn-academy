import { Box, Typography, FormControl, TextField } from "@mui/material";

const Contact = () => {
    return (
        <Box component='div' className="contact">
            <Box className='contact-content'>
                <FormControl>
                    <Typography variant='h3' className="contact-title">تواصل معنا</Typography>
                    <Typography variant='body1' className="contact-body">
                        للتواصل معنا يمكنكم مراسلتنا عبر البريد الالكتروني
                    </Typography>
                    <TextField
                        id="email"
                        label="البريد الالكتروني"
                        variant="outlined"
                        sx={{ my: 2 }}
                        className="contact-input-email"
                    />
                    <TextField
                        id="message"
                        label="الرسالة"
                        variant="outlined"
                        multiline
                        rows={4}
                        className="contact-input-message"
                    />
                    <button className="contact-btn">
                        إرسال
                    </button>
                </FormControl>
            </Box>
            <Box component={'div'} className="contact-img">
                <img src='https://i.pinimg.com/564x/76/cd/fe/76cdfe8dae763ecdf14c8ec1f32fc905.jpg' alt='placeholder' />
            </Box>
        </Box>
    )
}

export default Contact