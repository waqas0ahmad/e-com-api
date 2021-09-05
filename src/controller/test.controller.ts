import { NextFunction, Request, Response } from "express";
import TestService from "../services/test.service";

class TestController{
    service:TestService;
    constructor(){
        this.service = new  TestService();
    }
    get = async (req:Request,res:Response,next:NextFunction) =>{
        const result = await this.service.getData();
        res.Ok(result.data);
    }
    dumpData =async (req:Request,res:Response,next:NextFunction)=>{
        const result = await this.service.dumpData();
        res.Ok(result);
    }
}
const ctrl  = new TestController();
export default ctrl;