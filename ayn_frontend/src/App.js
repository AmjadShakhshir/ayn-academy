import React from "react";
import { createTheme, ThemeProvider, CssBaseline, Container } from '@mui/material';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./containers/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {  
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
      <Router>
        <Container maxWidth='xl'>
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </Container>
      </Router>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
