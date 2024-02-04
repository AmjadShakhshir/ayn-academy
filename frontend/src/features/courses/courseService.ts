import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { CourseReducerState } from './types/CourseReducerState';
import { AddCourseRequest, Course, updateCourseRequest } from './types/Course';
import axios from 'axios';

const initialState: CourseReducerState = {
    courses: [],
    error: '',
    status: 'idle',
    message: '',
};

// Thunk for create course action
export const createCourse = createAsyncThunk<Course, AddCourseRequest, { rejectValue: string }>(
    'courses/create',
    async (courseData, { rejectWithValue }) => {
        try {
            const response = await axios.post('/api/courses', courseData);
            return response.data;
        } catch (e) {
            const error = e as Error;
            const message = error.message;
            return rejectWithValue(message);
        }
    }
);

// get user courses
export const getCourses = createAsyncThunk<Course[], void, { rejectValue: string }>(
    'courses/getAll',
    async(_, { rejectWithValue }) => {
        try {
            const response = await axios.get('/api/courses');
            return response.data;
        } catch (e) {
            const error = e as Error;
            const message = error.message;
            return rejectWithValue(message);
        }
    
})

export const getOneCourse = createAsyncThunk<Course, string, { rejectValue: string }>(
    'courses/getOne',
    async(_id, { rejectWithValue }) => {
        try {
            const response = await axios.get(`/api/courses/${_id}`);
            return response.data;
        } catch (e) {
            const error = e as Error;
            const message = error.message;
            return rejectWithValue(message);
        }
    
})

export const updateCourse = createAsyncThunk<Course, updateCourseRequest, { rejectValue: string }>(
    'courses/update',
    async({ _id, update }, { rejectWithValue }) => {
        try {
            const response = await axios.put(`/api/courses/${_id}`, update);
            return response.data;
        } catch (e) {
            const error = e as Error;
            const message = error.message;
            return rejectWithValue(message);
        }
    
})

// Delete courses
export const deleteCourse = createAsyncThunk<Course, string, { rejectValue: string }>(
    'courses/delete',
    async(_id, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`/api/courses/${_id}`);
            return response.data;
        } catch (e) {
            const error = e as Error;
            const message = error.message;
            return rejectWithValue(message);
        }
    
})

export const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        reset: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createCourse.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createCourse.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.courses.push(action.payload);
            })
            .addCase(createCourse.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })
            .addCase(getCourses.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getCourses.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.courses = action.payload;
            })
            .addCase(getCourses.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })
            .addCase(getOneCourse.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getOneCourse.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.courses = [action.payload];
            })
            .addCase(getOneCourse.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })
            .addCase(deleteCourse.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteCourse.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.courses = state.courses.filter((course: Course) => course._id !== action.payload._id);
                state.message = 'Course deleted successfully';
            })
            .addCase(deleteCourse.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })
            .addCase(updateCourse.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateCourse.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const index = state.courses.findIndex((course: Course) => course._id === action.payload._id);
                state.courses[index] = action.payload;
                state.message = 'Course updated successfully';
            })
            .addCase(updateCourse.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })
    },
});

export const { reset } = courseSlice.actions;
export default courseSlice.reducer;
