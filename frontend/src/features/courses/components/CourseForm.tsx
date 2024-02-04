import { Box, Button, FormControl, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCourse } from "../courseService";
import { AddCourseRequest } from "../types/Course";
import useAppDispatch from "../../../app/hooks/useAppDispatch";

const CourseForm = () => {
    const [courseForm, setCourseForm] = useState({
        title: '',
        description: '',
        price: 0,
        category: '',
        image: '',
        instructor: '615d2e3f6b3e9e5b6d4f0b2c',
        userId: '615d2e3f6b3e9e5b6d4f0b2c',
        published: true
    })

    const {title, description, price, category, image, userId, instructor } = courseForm
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCourseForm((prevState) =>({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const courseData: AddCourseRequest = {
            title,
            description,
            price,
            category,
            image,
            instructor: '615d2e3f6b3e9e5b6d4f0b2c',
            userId: '615d2e3f6b3e9e5b6d4f0b2c',
            published: true
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
                name="title"
                value={title}
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
            <Grid item xs={12}>
                <FormControl variant="outlined">
                    <TextField
                    name="instructor"
                    type="text"
                    id="outlined-basic"
                    label="المدرب"
                    variant="outlined"
                    value={instructor}
                    onChange={onChange}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControl variant="outlined">
                    <TextField
                    name="userId"
                    type="text"
                    id="outlined-basic"
                    label="المستخدم"
                    variant="outlined"
                    value={userId}
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