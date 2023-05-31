import * as React from 'react';
import { AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Button,
    MenuItem,
} from '@mui/material'; 
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { images } from '../constants';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const pages = [
    {
        name: 'الرئيسية',
        path: '/',
    },{
        name: 'من نحن ؟',
        path: '/about',
    },{
        name: 'الدروس',
        path: '/courses',
    },{
        name: 'المدونة',
        path: '/blog',
    },{
        name: 'المنتدى',
        path: '/forum',
    },{
        name: 'المساعدة',
        path: '/help',
    },{
        name: 'اتصل بنا',
        path: '/contact',
    },
];

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
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 668,
      lg: 992,
      xl: 1336,
    },
  },
});

function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector(state => state.auth);


  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
    };

  return (
    <ThemeProvider theme={darkTheme}>
        <AppBar position="static">
        <Container maxWidth="100%">
            <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { md: 'flex', lg: 'none' } }}>
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
                    display: { md: 'block', lg: 'none' },
                }}
                >
                {pages.map((page) => (
                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
            <Box

            sx={{ flexGrow: 1,
                    display: { xs: 'none', lg: 'flex' } }}>
                {pages.map((page) => (
                <Button
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2,
                        fontFamily: 'sans-serif',
                        fontWeight: 700,
                        color: 'white',
                        display: 'block',
                        fontSize: '1rem', }}
                >
                    <Link to={page.path} >{page.name}</Link>
                </Button>
                ))}
            </Box>

            <Box sx={{ flexGrow: 0,
                mx:'10px',
                display: 'flex' }}>
                {user ?
                (
                <Button
                variant='contained'
                size='medium'
                color='secondary'
                sx={{
                    mx: '10px',
                }}
                onClick={onLogout}
                >
                    تسجيل الخروج
                </Button>
                ) : (
                    <>
                    <Button
                    variant='contained'
                    size='medium'
                    color='secondary'
                    sx={{
                        mx: '10px',
                        display: { xs: 'none', md: 'block' },
                    }} >
                        <Link to="/login">تسجيل الدخول</Link>
                    </Button>
                    <Button
                    variant='contained'
                    size='medium'
                    sx={{
                        display: { xs: 'none', md: 'block' },
                    }}
                    color='warning'>
                        <Link to="/register">انضم إلينا</Link>
                    </Button>
                </>
                )}
            </Box>
            <Box sx={{ flexGrow: 0}}>
               <Link to="/">
                    <img 
                    src={images.logo01}
                    style={{ width: 100, height: 50 }}
                    alt="logo" />
                </Link>
            </Box>
            </Toolbar>
        </Container>
        </AppBar>
    </ThemeProvider>
  );
}
export default Navbar;