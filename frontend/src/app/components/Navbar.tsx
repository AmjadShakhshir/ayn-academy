import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Button, MenuItem } from '@mui/material'; 
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { images } from '../constants';
import { logout, reset } from '../../features/auth/authService';
import { useNavigate } from 'react-router-dom';
import useAppDispatch from '../hooks/useAppDispatch';
import useAppSelector from '../hooks/useAppSelector';
import { useState } from 'react';

const pages = [
    { name: 'الرئيسية', path: '/' },
    { name: 'من نحن ؟', path: '/who' },
    { name: 'الدروس', path: '/courses' },
    { name: 'المدونة', path: '/blog' },
    { name: 'المنتدى', path: '/forum' },
    { name: 'اتصل بنا', path: '/contact' },
];

type PageType = {
    name: string;
    path: string;
};

function Navbar() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { currentUser } = useAppSelector((state) => state.auth);
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorElNav(event.currentTarget);
    const handleCloseNavMenu = () => setAnchorElNav(null);
    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate('/');
    };

    const renderMenuItem = (page: PageType) => (
        <MenuItem key={page.name} onClick={() => handleCloseNavMenu}>
            <Typography textAlign="center">{page.name}</Typography>
        </MenuItem>
    );

    const renderButton = (page: PageType) => (
        <Button key={page.name} onClick={()=> handleCloseNavMenu} sx={{ my: 2, fontFamily: 'sans-serif', fontWeight: 700, color: 'white', display: 'block', fontSize: '1rem' }}>
            <Link style={{ color: 'black' }} to={page.path}>{page.name}</Link>
        </Button>
    );

    return (
            <AppBar position="static">
                    <Toolbar disableGutters sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '0 5%',
                        bgcolor: '#ecfcf0'
                    }}>
                        <Box sx={{ flexGrow: 0, pl:'20px' }}>
                            <Link to="/">
                                <img src={images.logo01} style={{ width: 100, height: 50 }} alt="logo" />
                            </Link>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { md: 'flex', lg: 'none' } }}>
                            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                                <MenuIcon />
                            </IconButton>
                            <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'left' }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{ display: { md: 'block', lg: 'none' } }}>
                                {pages.map(renderMenuItem)}
                            </Menu>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }}>
                            {pages.map(renderButton)}
                        </Box>
                        <Box sx={{ flexGrow: 0, mx:'10px', display: 'flex' }}>
                            {currentUser ? (
                                <Button variant='contained' size='medium'  sx={{ mx: '10px', color:'#ffcc80' }} onClick={onLogout}>تسجيل الخروج</Button>
                            ) : (
                                <>
                                    <Button variant='contained' size='medium'  sx={{ mx: '10px', display: { xs: 'none', md: 'block' }, backgroundColor:'#ffcc80' }}><Link style={{color: 'black'}} to="/login">تسجيل الدخول</Link></Button>
                                    <Button variant='contained' size='medium' sx={{ display: { xs: 'none', md: 'block' }, backgroundColor:'#cc8a65'}} ><Link to="/register" style={{color: 'black'}}>انضم إلينا</Link></Button>
                                </>
                            )}
                        </Box>
                    </Toolbar>
            </AppBar>
    );
}

export default Navbar;