import { Box, Typography, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { images } from "../constants";
import { Link } from "react-router-dom";

const list = [{
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
}];

const socialMedia = [{
    name: 'فيسبوك',
    path: '/facebook',
    icon: <FacebookIcon />,
},{
    name: 'تويتر',
    path: '/twitter',
    icon: <TwitterIcon />,
},{
    name: 'انستغرام',
    path: '/instagram',
    icon: <InstagramIcon />,
},{
    name: 'لينكد إن',
    path: '/linkedin',
    icon: <LinkedInIcon />,
}];

const Footer = () => {
    return (
            <Box component="footer" className="footer">
                <Box className="footer1">
                    <Typography variant="h3" className="footer1-headline1">
                        اكتشاف كيفية التوقع والتكيف مع أحدث الاتجاهات والرقمية
                    </Typography>
                    <Typography variant="body2" className="footer1-headline2">جميع الحقوق محفوظة لموقع عين 2024</Typography>
                    <img src={images.logo} alt="logo" />
                    <nav aria-label="footer menu">
                        <List className="footer-list">
                            {list.map((list, index) =>
                            <ListItem key={index} disablePadding sx={{ 
                                    display: 'block',
                                    textAlign: 'center',
                                    width: '100px',
                                }}>
                                <ListItemButton sx={{ textAlign: 'center'}}>
                                    <Link to={list.path} className="footer-link">
                                        <ListItemText primary={list.name} />
                                    </Link>
                                </ListItemButton>
                            </ListItem> 
                            )}
                        </List>
                    </nav>
                    <nav aria-label="social media">
                        <List className="footer-social">
                            {socialMedia.map((socialMedia, index) =>
                            <ListItem key={index} disablePadding sx={{ 
                                    display: 'block',
                                    textAlign: 'center',
                                    width: '100px',
                                }}>
                                <ListItemButton sx={{ textAlign: 'center'}}>
                                    <ListItemIcon>
                                        <Typography variant="h6" className="footer-social-icon">
                                            {socialMedia.icon}
                                        </Typography>
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem> 
                            )}
                        </List>
                    </nav>
                </Box>
            </Box>
    )
}

export default Footer