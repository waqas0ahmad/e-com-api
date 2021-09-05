import { UserTypes } from "./account-request.model";

export class ResponseModel<T>{
    Status:number | undefined;
    Message:string | undefined;
    Data:T | undefined;

}


export class AccountResponseModel{
    Id:number | 0; 
    Username:string; 
    Password?:string;
    DisplayName:string; 
    FirstName:string; 
    LastName:string;
    Type:UserTypes;
    Profile:string;
    PhoneNumber:string;
    Email:string;
    Token?:string;
    constructor(){
        this.Id = 0;
        this.Username = "";
        this.Password = "";
        this.DisplayName = "";
        this.FirstName = "";
        this.LastName = "";
        this.Type = UserTypes.User;
        this.Profile = "";
        this.PhoneNumber = "";
        this.Email = "";
    }
}