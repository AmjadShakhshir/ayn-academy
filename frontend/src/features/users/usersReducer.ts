import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { UpdateUserRequest, User } from "../auth/types/User";

const initialState: {
    users: User[],
    error: string,
    status: 'idle' | 'loading' | 'failed' | 'succeeded',
    message: string,
} = {
    users: [],
    error: '',
    status: 'idle',
    message: '',
}

export const getUsers = createAsyncThunk<User[], void, { rejectValue: string }>(
    'users/getAll',
    async(_, { rejectWithValue }) => {
        try {
            const response = await axios.get('/api/users');
            return response.data;
        } catch (e) {
            const error = e as Error;
            const message = error.message;
            return rejectWithValue(message);
        }
    }
);

export const getOneUser = createAsyncThunk<User, string, { rejectValue: string }>(
    'users/getOne',
    async(_id, { rejectWithValue }) => {
        try {
            const response = await axios.get(`/api/users/${_id}`);
            return response.data;
        } catch (e) {
            const error = e as Error;
            const message = error.message;
            return rejectWithValue(message);
        }
    }
);

export const updateUser = createAsyncThunk<User, UpdateUserRequest, { rejectValue: string }>(
    'users/update',
    async({ _id, update }, { rejectWithValue }) => {
        try {
            const response = await axios.put(`/api/users/${_id}`, update);
            return response.data;
        } catch (e) {
            const error = e as Error;
            const message = error.message;
            return rejectWithValue(message);
        }
    }
);

export const deleteUser = createAsyncThunk<User, string, { rejectValue: string }>(
    'users/delete',
    async(_id, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`/api/users/${_id}`);
            return response.data;
        } catch (e) {
            const error = e as Error;
            const message = error.message;
            return rejectWithValue(message);
        }
    }
);

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = action.payload;
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })
            .addCase(getOneUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getOneUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = [action.payload];
            })
            .addCase(getOneUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })
            .addCase(updateUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = state.users.map(user => user._id === action.payload._id ? action.payload : user);
                state.message = 'User updated successfully';
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })
            .addCase(deleteUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = state.users.filter(user => user._id !== action.payload._id);
                state.message = 'User deleted successfully';
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })
    }
});

const usersReducer = usersSlice.reducer;
export default usersReducer;