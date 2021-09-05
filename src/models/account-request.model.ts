export default class AccountRequestModel{
    Id:number | 0; 
    Username:string; 
    Password:string;
    DisplayName:string; 
    FirstName:string; 
    LastName:string;
    Type:UserTypes;
    Profile:string;
    PhoneNumber:string;
    Email:string;
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
export class LoginRequestModel{
    Username:string | undefined;
    Password:string | undefined;
}
export enum UserTypes{
    User,
    Vendor,
    Admin,
    SuperAdmin
}
export enum SearchType{
    Id,
    Username
}