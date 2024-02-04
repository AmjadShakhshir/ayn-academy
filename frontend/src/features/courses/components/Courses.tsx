import { Container, Grid } from "@mui/material";
import CourseItem from "./CourseItem";
import { Course } from "../types/Course";

export const Courses = ({ sortedCourses }: { sortedCourses: Course[]}) => (
    <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={4}>
            {sortedCourses.map((course: Course, index: number) => (
                <CourseItem key={index} course={course} />
            ))}
        </Grid>
    </Container>
);