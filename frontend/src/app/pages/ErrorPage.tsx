import { Box, Button, Typography } from '@mui/material'
import KeyboardDoubleArrowLeftIcon  from "@mui/icons-material/KeyboardDoubleArrowLeft"
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/", { replace: true });
  };
  return (
    <Box className='error'>
      <img className='error-img' src="https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061131_1280.png" alt="error" />
      <Typography>
        الصفحة التي تبحث عنها قد تمت إزالتها أو غير متاحة مؤقتًا. يرجى التحقق من عنوان URL والمحاولة مرة أخرى.
      </Typography>
      <Button
        startIcon={<KeyboardDoubleArrowLeftIcon />}
        onClick={handleClick}
        sx={{ display: "flex", margin: "0 auto" }}
      >
        للعودة للصفحة الرئيسية
      </Button>
    </Box>
  )
}

export default ErrorPage