import { NextFunction,  Request,  Response } from "express";
import { UserTypes } from "../../models/account-request.model";
import { AccountResponseModel } from "../../models/response.model";
import {verify} from './../jwt/jwt.util';
export const checkAuth = function(type:UserTypes=UserTypes.User){
    return function(req:Request,res:Response,next:NextFunction){
        if(req.headers.authorization){
            try {
                const payload = verify(req.headers.authorization) as AccountResponseModel;
                console.log(payload);
                if(payload.Type == type){
                    req.user = payload;                
                    return next();
                }
            } catch (error) {
                return res.UnAuthorized(error,"UNAUTHORIZED");
            }
            
        }
        return res.UnAuthorized(null,"UNAUTHORIZED");
    }
}