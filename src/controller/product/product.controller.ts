import { NextFunction, Request, Response } from "express";
import AccountRequestModel, { LoginRequestModel, SearchType } from "../../models/account-request.model";
import ProductService from "../../services/product/product.service";

class ProductController{
    service:ProductService;
    constructor(){
        this.service = new  ProductService();
    }
    get = async (req:Request,res:Response,next:NextFunction) =>{
        const result = await this.service.all();        
        res.Ok(result.data);
    }
}
const ctrl  = new ProductController();
export default ctrl;