import { Request, Response } from "express";
import User from "../models/user.model";

class UserController{
    
    signIn = function(req:Request,res:Response){
        try {
            const _user =  req.body as User;
            const files = req.files;            
            var user = new User();
            user.FirstName="Waqas";
            user.LastName = "Ahmad";   
            throw new Error(";kjskafdjfklasdjklfjsakldjflkasdjlk");
             
        } catch (error) {            
            res.InternalServerError(error);
        }
    }
}
const userCtrl  = new UserController();
export default userCtrl;