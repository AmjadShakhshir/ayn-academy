import express from 'express';

import usersController from '../controllers/users';
import { validate } from '../middlewares/validate';
import { updateUserSchema, userSchema } from '../schemas/userSchema';
import { emailChecker } from '../middlewares/emailChecker';
import { checkAuth } from '../middlewares/checkAuth';
import { checkRoles } from '../middlewares/checkRoles';
import { ROLE } from '../utils/role';
import { checkPermission } from '../middlewares/checkPermission';


const usersRouter = express.Router();

usersRouter.get('/', usersController.getAllUsers);
usersRouter.get('/:userId', usersController.getSingleUser);
usersRouter.post(
    '/admin',
    validate(userSchema),
    checkAuth,
    checkRoles(ROLE.ADMIN),
    checkPermission("CREATE"),
    emailChecker,
    usersController.createUser);
usersRouter.put('/:userId',validate(updateUserSchema), emailChecker,usersController.updateUser);
usersRouter.delete('/:userId', usersController.deleteUser);
usersRouter.post("/signup", emailChecker, usersController.signup);
usersRouter.post("/login", usersController.login);

export default usersRouter;