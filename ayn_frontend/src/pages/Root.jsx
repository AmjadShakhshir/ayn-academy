import React from "react";
import { createTheme, ThemeProvider, CssBaseline, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import './App.css';
import { Header } from "./containers";

export default function Root () {
    // To change the default font-family for whole app
    const theme = createTheme ({
        typography: {
        h3: { 
            fontFamily:'RecoletaBold',
        }
        },
        Container: {
        maxWidth: 'xl',
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth='xl'>
                <Header />  
                <Outlet />
            </Container>
            <ToastContainer />
        </ThemeProvider>
)}