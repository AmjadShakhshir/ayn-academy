import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { images } from '../constants';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const pages = ['الرئيسية', 'من نحن؟', 'المميزات', 'الفرص', 'الدروس', 'عن الدورة'];

const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#a5d6a7',
    },
    secondary: {
        main: '#ffcc80',
    },
    warning: {
        main: '#cc8a65',
    },
  },
});

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={darkTheme}>
        <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                >
                <MenuIcon />
                </IconButton>
                <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
                >
                {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2,
                        fontFamily: 'sans-serif',
                        fontWeight: 700,
                        color: 'white',
                        display: 'block',
                        fontSize: '1rem', }}
                >
                    {page}
                </Button>
                ))}
            </Box>

            <Box sx={{ flexGrow: 0, mx:'10px' }}>
                <Button
                variant='contained'
                size='medium'
                color='secondary'
                sx={{
                    mx: '10px',
                }} >تسجيل دخول</Button>
                <Button
                variant='contained'
                size='medium'
                color='warning'>انضم إلينا</Button>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
                <img src={images.logo01} alt="logo" />
            </Box>
            </Toolbar>
        </Container>
        </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;