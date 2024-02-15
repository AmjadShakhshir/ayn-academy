import { useEffect, useState } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';

import { courseData } from '../data/courseData';
import CoursesHeader from '../components/CoursesHeader';
import { Menu } from '../components/Menu';
import { Courses } from '../components/Courses';
import { Box } from '@mui/material';

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
        <Stack component="main" className='courses'>
            <CoursesHeader />

            <Stack component="div" className='courses-content' >
                <Box component={'div'} className='courses-container'>
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
                    <Menu setTopicSort={setTopicSort} />
                </Box>
            </Stack>
            <Courses sortedCourses={sortedCourses} /> 
        </Stack>
    );
}

export default CoursesPage;