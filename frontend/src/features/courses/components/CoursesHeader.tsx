import { Stack, Container, Typography, Breadcrumbs, Link } from '@mui/material'

const CoursesHeader = () => {
  return (
    <Stack
        component="div"
        className='courses-header'
    >
        <Container maxWidth="sm" className='courses-header-content'>
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="white"
                gutterBottom
            >
                دروس
            </Typography>
            <Breadcrumbs aria-label="breadcrumb">
                <Link className='links' underline="hover" color="white" href="/">
                    الرئيسية
                </Link>
                <Link
                    className='links'
                    underline="hover"
                    color="white"
                    href="/courses"
                >
                    الدروس
                </Link>
            </Breadcrumbs>
        </Container>
    </Stack>
  )
}

export default CoursesHeader