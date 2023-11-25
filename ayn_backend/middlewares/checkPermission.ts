import { NextFunction, Response } from 'express';

import { WithAuthRequest } from '../types/Auth';
import { ApiError } from './errors/ApiError';
import { Permission } from '../utils/permission';

export const checkPermission = (...permissions: Permission[]) => {
    return (req: WithAuthRequest, res: Response, next: NextFunction) => {
        const user = req.decodedUser;
        const hasMatchedPermission = user && permissions.filter(perm => user.permissions.includes(perm)).length === permissions.length;
        console.log(hasMatchedPermission);
        if (!hasMatchedPermission) {
            next(ApiError.forbidden("You do not have access"));
            return;
        }
        next();
    };
};