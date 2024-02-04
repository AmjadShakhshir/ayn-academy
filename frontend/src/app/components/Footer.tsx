import { Box, Typography, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { images } from "../constants";

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
            <Box component="footer" sx={{
                backgroundColor: '#f3f3f3',
                padding: 5,
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                borderTop: '2px solid #facc80',
                color: '#777',
                fontSize: '1.2rem',
                width: '100%',
            }}>
                <Box>
                    <Typography>جميع الحقوق محفوظة لموقع عين 2024</Typography>
                    <img src={images.logo} alt="logo" />
                    <nav aria-label="footer menu">
                        <List sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            {list.map((list, index) =>
                            <ListItem key={index} disablePadding sx={{ 
                                    display: 'block',
                                    textAlign: 'center',
                                    width: '100px',
                                }}>
                                <ListItemButton sx={{ textAlign: 'center'}}>
                                    <ListItemText primary={list.name} />
                                </ListItemButton>
                            </ListItem> 
                            )}
                        </List>
                    </nav>
                    <nav aria-label="social media">
                        <List sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            {socialMedia.map((socialMedia, index) =>
                            <ListItem key={index} disablePadding sx={{ 
                                    display: 'block',
                                    textAlign: 'center',
                                    width: '100px',
                                }}>
                                <ListItemButton sx={{ textAlign: 'center'}}>
                                    <ListItemIcon>
                                        {socialMedia.icon}
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