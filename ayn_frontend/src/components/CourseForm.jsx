import { Box, Button, FormControl, Grid, TextField } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createCourse } from "../features/courses/courseSlice";

const CourseForm = () => {
    const [courseForm, setCourseForm] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        image: '',
    })

    const {name, description, price, category, image} = courseForm
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
            name,
            description,
            price,
            category,
            image
        }
        dispatch(createCourse(courseData))
        navigate('/dashboard')
    }
  return (
    <Grid container sx={{
        margin: '5px',
        padding: '5px',
    }}>
        <Box
            component='form'
            onSubmit={onSubmit}
            noValidate
            autoComplete='off'
            sx={{ m: 1, p: 1 }} >
            <Grid item xs={12}>
            <FormControl variant="outlined">
                <TextField
                id="outlined-basic"
                label="اسم الدورة"
                variant="outlined"
                type="text"
                name="name"
                value={name}
                onChange={onChange}
                />
            </FormControl>
            </Grid>
            <Grid item xs={12}>
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
            </Grid>
            <Grid item xs={12}>
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
            </Grid>
            <Grid item xs={12}>
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
            </Grid>
            <Grid item xs={12}>
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
            </Grid>
        <Button
        type='submit'
        variant="contained"
        color="primary">
            اضافة
        </Button>
        </Box>  
    </Grid>
  )
}

export default CourseForm