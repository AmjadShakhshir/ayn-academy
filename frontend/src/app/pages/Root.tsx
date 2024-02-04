import { CssBaseline, Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from '../containers/Header';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <>
            <CssBaseline />
            <Box>
                <Header />  
                <Outlet />
                <Footer />
                <ToastContainer />
            </Box>
        </>
)}

export default Root;