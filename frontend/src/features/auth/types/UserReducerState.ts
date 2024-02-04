import { User } from "./User";

export interface UsersReducerState {
    accessToken: string,
    currentUser?: User,
    error: string,
    status: 'idle' | 'loading' | 'failed' | 'succeeded',
    isLoggedIn: boolean,
    message: string,
}