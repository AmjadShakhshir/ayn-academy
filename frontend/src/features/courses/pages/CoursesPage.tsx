import React from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import GridViewIcon from '@mui/icons-material/GridView';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

import '../../../app/assets/scss/courses-page.scss'
import CourseItem from '../components/CourseItem';
import { courseData } from '../data/courseData';

const topics = ['الكل','علم نفس', 'تكنولوجيا', 'أدب'];

const CoursesPage = () =>{
    const [categories, setCategories] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setCategories(event.target.value as string);
    };
    return (
        <Stack component="main" sx={{
            bgcolor: 'white'
        }}>
            <Stack
            component="div"
            className='courses-header'
            >
                <Container maxWidth="sm" className='courses-header-content'>
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="white"
                        gutterBottom
                        >
                        دروس
                    </Typography>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link className='links' underline="hover" color="white" href="/">
                            الرئيسية
                        </Link>
                        <Link
                            className='links'
                            underline="hover"
                            color="white"
                            href="/courses"
                        >
                            الدروس
                        </Link>
                    </Breadcrumbs>
                </Container>
            </Stack>

            <Stack component="div" className='courses-content'>
                <Container maxWidth="md" className='courses-content-container'>
                    <MenuList className='courses-content-list'>
                        <MenuItem>
                            <ListItemIcon>
                                <GridViewIcon fontSize="small" />
                            </ListItemIcon>
                            <Typography variant="inherit">عرض شبكي</Typography>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <FormatListBulletedIcon fontSize="small" />
                            </ListItemIcon>
                            <Typography variant="inherit">عرض قائمة</Typography>
                        </MenuItem>
                    </MenuList> 

                    <FormControl className='courses-categories'>
                        <InputLabel id="demo-simple-select-label">تصنيف</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={categories}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>الاحدث</MenuItem>
                            <MenuItem value={20}>الأقدم</MenuItem>
                            <MenuItem value={30}>الأرخص</MenuItem>
                        </Select>
                    </FormControl>
                </Container>
            </Stack>
            <Stack component={'div'}>
                <MenuList sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    borderRadius: '10px',
                    gap: 2,
                    pt: 2
                }}>
                    {topics.map((topic, index) => (
                        <MenuItem key={index}>{topic}</MenuItem>
                    ))}
                </MenuList>
            </Stack>
            <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
                {courseData.map((course, index) => (
                    <CourseItem key={index} course={course} />
                ))}
            </Grid>
            </Container>
        </Stack>
    );
}

export default CoursesPage;