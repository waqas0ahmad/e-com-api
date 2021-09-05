import { NextFunction, Request, Response } from "express";
import AccountRequestModel, { LoginRequestModel, SearchType } from "../../models/account-request.model";
import accountSrv from "../../services/account/accout.service";

class AccountController{
    service:accountSrv;
    constructor(){
        this.service = new  accountSrv();
    }
    get = async (req:Request,res:Response,next:NextFunction) =>{
        const result = await this.service.getUser(req.query.id,SearchType.Id);        
        res.Ok(result.data);
    }
    login = async (req:Request,res:Response,next:NextFunction)=>{
        try {
            const data = req.body as LoginRequestModel;
            const result = await this.service.login(data);
            if(result.success){
                res.Ok(result.data);
            }else{
                res.BadRequest(null,result.data);
            }
        } catch (err) {
            console.log(err);
            res.InternalServerError(err);
        }
    }
    createAccount = async (req:Request,res:Response,next:NextFunction)=>{
        try {
            const data = req.body as AccountRequestModel;
            const result = await this.service.createAccount(data);
            if(result.success){
                res.Ok(result.data,"Account created.");
            }else{
                res.BadRequest(result);
            }
        } catch (err) {
            res.InternalServerError(err);
        }
    }
    delete = async (req:Request,res:Response,next:NextFunction)=>{
        try {
            const data = Number(req.params.id);
            const result = await this.service.delete(data);
            if(result.success){
                res.Ok(result.data,"Account deleted.");
            }else{
                res.BadRequest(result);
            }
        } catch (err) {
            res.InternalServerError(err);
        }
    }
}
const ctrl  = new AccountController();
export default ctrl;