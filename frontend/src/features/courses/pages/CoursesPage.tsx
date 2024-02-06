import { useEffect, useState } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import GridViewIcon from '@mui/icons-material/GridView';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

import '../../../app/assets/scss/courses-page.scss'
import { courseData } from '../data/courseData';
import CoursesHeader from '../components/CoursesHeader';
import { Menu } from '../components/Menu';
import { Courses } from '../components/Courses';

const CoursesPage = () =>{
    const [categories, setCategories] = useState('');
    const [topicSort, setTopicSort] = useState('الكل');
    const [sortedCourses, setSortedCourses] = useState([...courseData]);

    useEffect(() => {
        if (categories === 'asc') {
            setSortedCourses([...courseData].sort());
        } else if (categories === 'desc'){
            setSortedCourses([...courseData].sort().reverse());
        } else {
            setSortedCourses([...courseData]);
        }
    }, [categories]);

    useEffect(() => {
        if (topicSort === 'الكل') {
            setSortedCourses([...courseData]);
        } else {
            setSortedCourses([...courseData].filter(course => course.category === topicSort));
        }
    }, [topicSort]);

    const handleChange = (event: SelectChangeEvent) => {
        setCategories(event.target.value);
    }   

    return (
        <Stack component="main" sx={{
            backgroundColor: 'lightgray'
        }}>
            <CoursesHeader />

            <Stack component="div" className='courses-content' >
                <Container maxWidth="md" className='courses-content-container'>
                    <MenuList className='courses-content-list'>
                        <MenuItem>
                            <ListItemIcon>
                                <GridViewIcon fontSize="small" />
                            </ListItemIcon>
                            <Typography variant="inherit" fontSize={20}>عرض شبكي</Typography>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <FormatListBulletedIcon fontSize="small" />
                            </ListItemIcon>
                            <Typography variant="inherit" fontSize={20}>عرض قائمة</Typography>
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
                            <MenuItem value={'asc'}>تصاعديا</MenuItem>
                            <MenuItem value={'desc'}>تنازليا</MenuItem>
                        </Select>
                    </FormControl>
                </Container>
            </Stack>
            <Menu setTopicSort={setTopicSort} />
            <Courses sortedCourses={sortedCourses} /> 
        </Stack>
    );
}

export default CoursesPage;