import { Response, response } from "express";
import { ResponseModel } from "../models/response.model";
import { LogData } from "./error-logger";

// augment the `express-serve-static-core` module
declare module "express-serve-static-core" {
  // first, declare that we are adding a method to `Response` (the interface)
  export interface Response {
    Ok<T>(Data:T,Message?:string):void;
    BadRequest<T>(Data:T,Message?:string):void;
    NotFound<T>(Data:T,Message?:string):void;
    UnAuthorized<T>(Data:T,Message?:string):void;
    InternalServerError(Data:any,Message?:string):void;  
  }
    export interface Request{      
      user?:any;
    }
}

response.InternalServerError = function (this:Response,Data:any,Message:string="Inernal Server Error") {
    var response = new ResponseModel();
    response.Status=500;
    response.Message=Message;
    response.Data=Data;    
    LogData(Data);
    this.status(200).send(response);   
}
response.NotFound = function <T>(this:Response,Data:T,Message:string="Not found") {
  var response = new ResponseModel();
  response.Status=404;
  response.Message=Message;
  response.Data=Data;    
  this.status(200).send(response);   
}
response.UnAuthorized = function <T>(this:Response,Data:T,Message:string="Un Authorized") {
  var response = new ResponseModel();
  response.Status=401;
  response.Message=Message;
  response.Data=Data;    
  this.status(200).send(response);   
}
response.BadRequest = function <T>(this:Response,Data:T,Message:string="Bad Request") {
  var response = new ResponseModel();
  response.Status=400;
  response.Message=Message;
  response.Data=Data;    
  this.status(200).send(response);   
}
response.Ok = function <T>(this:Response,Data:T,Message:string="Success") {
  var response = new ResponseModel();
  response.Status=200;
  response.Message=Message;
  response.Data=Data;    
  this.status(200).send(response);   
}