import { combineReducers, configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/auth/authService';
import courseReducer from '../features/courses/courseService';
import usersReducer from '../features/users/usersReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    courses: courseReducer,
    users: usersReducer,
});

export const store = configureStore({
    reducer: {
        auth: authReducer,
        courses: courseReducer,
        users: usersReducer,
    },
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
