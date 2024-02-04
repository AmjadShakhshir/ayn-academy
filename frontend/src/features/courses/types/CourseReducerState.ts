import { Course } from "./Course";

export type CourseReducerState = {
    courses: Course[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string,
    message: string,
}