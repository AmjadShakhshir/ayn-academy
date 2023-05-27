import { Box, Button, FormControl, TextField } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createCourse } from "../features/courses/courseSlice";

const CourseForm = () => {
    const [courseForm, setCourseForm] = useState({
        courseName: '',
        description: '',
        price: '',
        category: '',
        image: '',
    })

    const {courseName, description, price, category, image} = courseForm
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onChange = (e) => {
        setCourseForm((prevState) =>({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const courseData = {
            courseName,
            description,
            price,
            category,
            image
        }
        dispatch(createCourse(courseData))
        navigate('/dashboard')
    }
  return (
    <Box variant="section">
        <Box
            component='form'
            onSubmit={onSubmit}
            noValidate
            autoComplete='off'
            sx={{ mt: 1 }} >
            <FormControl variant="outlined">
                <TextField
                id="outlined-basic"
                label="اسم الدورة"
                variant="outlined"
                type="text"
                name="courseName"
                value={courseName}
                onChange={onChange}
                />
            </FormControl>
            <FormControl variant="outlined">
                <TextField
                name="description"
                type="text"
                id="outlined-basic"
                label="شرح الدرس"
                variant="outlined"
                value={description}
                onChange={onChange}
                />
            </FormControl>
            <FormControl variant="outlined">
                <TextField
                id="outlined-basic"
                type="number"
                name="price"
                label="السعر"
                variant="outlined"
                value={price}
                onChange={onChange}
                />
            </FormControl>
            <FormControl variant="outlined">
                <TextField
                name="category"
                type="text"
                id="outlined-basic"
                label="التصنيف"
                variant="outlined"
                value={category}
                onChange={onChange}
                />
            </FormControl>
            <FormControl variant="outlined">
                <TextField
                name="image"
                type="text"
                id="outlined-basic"
                label="الصورة"
                variant="outlined"
                value={image}
                onChange={onChange}
                />
            </FormControl> 
        <Button
        type='submit'
        variant="contained"
        color="primary">
            اضافة
        </Button>
        </Box>  
    </Box>
  )
}

export default CourseForm