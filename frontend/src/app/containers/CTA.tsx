import { Box, Container, Typography } from "@mui/material"

const Cta = () => {
    return (
        <Box component={'div'} className="cta">
            <Container maxWidth="xl">
                <Box component={'div'} className="cta-main">
                    <Typography className="cta-title" variant='h3'>
                        سجل اليوم و تصفح عدد لا نهائي من الدورات المميزة.
                    </Typography>
                    <Typography className="cta-subtitle" variant='body2'>
                        سارع في طلب الإنضمام اليوم والتحق بدوراتنا.
                    </Typography>
                </Box>
            </Container>
                <button className="cta-btn">
                    سجل اليوم
                </button>
        </Box>
    )
}

export default Cta