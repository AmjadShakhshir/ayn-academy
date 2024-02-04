export type Course = {
    _id: string,
    title: string,
    description: string,
    published: boolean,
    instructor: string,
    userId: string,
    image: string,
    category: string,
    price: number,
}

export type AddCourseRequest = Omit<Course, '_id'>;

export type updateCourseRequest = {
    _id: string,
    update: Partial<Course> 
}