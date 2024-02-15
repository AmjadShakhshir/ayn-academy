import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Root = () => {
    return (
        <Box>
            <Navbar />  
            <Outlet />
            <Footer />
            <ToastContainer />
        </Box>
)}

export default Root;