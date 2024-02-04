import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { UsersReducerState } from './types/UserReducerState'
import { AddUserRequest, User } from './types/User'
import CurrentUser from './types/CurrentUser';
import { UserCred } from './types/UserCred';
import { url } from '../../app/common';

const initialState: UsersReducerState = {
    accessToken: '',
    currentUser: undefined,
    status: 'idle',
    error: '',
    isLoggedIn: false,
    message: '',
}

// Thunk for register and login actions
export const signup = createAsyncThunk<User, AddUserRequest, { rejectValue: string }>(
    'auth/register',
    async (user, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${url}/users/signup`, user);
            return response.data;
        } catch (e) {
            const error = e as Error;
            const message = error.message;
            return rejectWithValue(message)
        }
    
    }
)

// login thunk action
export const login = createAsyncThunk<CurrentUser, UserCred, { rejectValue: string }>(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${url}/users/login`, credentials)
            const loggedInUser = response.data;
            const accessToken = loggedInUser.accessToken;
            localStorage.setItem('accessToken', accessToken);
            return { ...loggedInUser, accessToken};
        } catch (e) {
            const error = e as Error;
            const message = error.message;
            return rejectWithValue(message)
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.currentUser = undefined
            state.accessToken = ''
            state.isLoggedIn = false
            localStorage.removeItem('accessToken')
        },
        reset: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(signup.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.currentUser = action.payload;
                state.isLoggedIn = true;
                state.message = 'User registered successfully';
            })
            .addCase(signup.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })
            .addCase(login.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.currentUser = action.payload;
                state.isLoggedIn = true;
                state.accessToken = action.payload.accessToken;
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })
    },
})

const authReducer = authSlice.reducer
export const { reset, logout } = authSlice.actions
export default authReducer;