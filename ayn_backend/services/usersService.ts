import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import UserRepo from "../models/UserModel";
import RoleRepo from "../models/RoleModel";
import { User, UserUpdate } from "../types/User";

async function findAll() {
    const users = await UserRepo.find().exec();
    return users;
}

async function findOne(index: string) {
    const id = new mongoose.Types.ObjectId(index);
    const user = await UserRepo.findById(id);
    return user;
}

async function createUser(user: User) {
    const newUser = new UserRepo(user);
    await newUser.save();
    return newUser;
}

async function updateUser(index: string, user: UserUpdate) {
    const updatedUser = await UserRepo.findOneAndUpdate(
        { _id: index },
        user,
        { new: true }
    );
    return updatedUser;
}

async function deleteUser(index: string) {
    const deletedUser = await UserRepo.findOneAndDelete({ _id: index });
    return deletedUser;
}

async function signUp (name: string, email: string, password: string, roleId: string){
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = new UserRepo({ 
        name,
        email,
        password: hashedPassword,
        roleId
    });
    await user.save();
    const newUser = { name, email };
    return newUser;
}

async function logIn (email: string, password: string){
    const checkUser = await UserRepo.findOne({ email: email  });
    if (!checkUser) {
        return {
            message: "User not found",
            status: 404,
            accessToken: null
        }
    }

    const checkPassword = bcrypt.compareSync(password, checkUser.password);
    if (!checkPassword) {
        return {
            message: "Wrong password",
            status: 401,
            accessToken: null
        }
    }

    const checkRole = await RoleRepo.findById({ _id: checkUser.roleId });
    if (!checkRole) {
        return {
            message: "Role not found",
            status: 404,
            accessToken: null
        }
    }

    const payload = {
        email: checkUser.email,
        role: checkRole.name,
        permissions: checkRole.permissions
    };

    const accessToken = jwt.sign(payload, process.env.JWT_SECRET as string, { 
        expiresIn: "1h"
    });
    const loggedInUser = {...payload, accessToken}
    return loggedInUser;
}

export default {
    findAll,
    findOne,
    createUser,
    updateUser,
    deleteUser,
    signUp,
    logIn
};