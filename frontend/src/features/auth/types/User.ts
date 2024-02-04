export interface User {
    _id: string;
    name: string;
    role: string;
    email: string;
    password: string;
    avatar?: string;
}

export type AddUserRequest = Omit<User, '_id'>;

export type UpdateUserRequest = {
    _id: string;
    update: Partial<User>;
};