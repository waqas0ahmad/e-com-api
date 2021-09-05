import AccountRequestModel, { LoginRequestModel, SearchType } from "../../models/account-request.model";
import Db from "../../utils/db.util";
import { Err, Ok } from "../../utils/misc.util";
import * as bcrypt from 'bcrypt';
import { getToken } from "../../utils/jwt/jwt.util";
import { AccountResponseModel } from "../../models/response.model";
export default class AccountService{
    private db:Db;
    constructor(){
        this.db = new Db();
    }
    async getData(){
        try {
            const result = await this.db.executeSQL("select * from test");
            return Ok(result);
        } catch (error) {
            throw error;
        }
    }
    async login(req:LoginRequestModel){
        try {
            const users = await this.getUser(req.Username);
            if(users.success){
                const user = users.data[0] as AccountResponseModel;
                if(user.Password){
                    const result = bcrypt.compareSync(req.Password||"",user.Password);
                    if(result){
                        delete user.Password;
                        user.Token = getToken(user);
                        return Ok(user);
                    }
                }
            }
            return Err("Username or password is not valid");
        } catch (error) {
            throw error;
        }
    }
    async createAccount(req:AccountRequestModel){
        try {
            const users = await this.getUser(req.Username);
            if(users.success == true &&users.data.length>0){
                return Err("User already exists");
            }
            req.Password = bcrypt.hashSync(req.Password,10);
            let data:any[] = [req.Username,req.Password,req.DisplayName,req.FirstName,req.LastName,req.Email,req.Profile,req.PhoneNumber,req.Type];
            let query:string = "INSERT INTO `account`(username,password,displayname,first_name,last_name,email,profile,phone_number,type) values ?";
            const result = await this.db.executeSQL(query,[[data]]);
            return Ok(result);
        } catch (error) {
            throw error;
        }
    }
    async getUser(param:any,type:SearchType = SearchType.Username){
        try {            
            let query:string = "select Id, Username,`Password`,DisplayName,first_name as FirstName,last_name as LastName,Email,`Profile`,phone_number as PhoneNumber,`Type` from `account` where  ifnull(is_deleted,0)=0 ";
            if(type == SearchType.Username){
                query += " and username = ?;";
            }else{
                if(param)
                query += " and id = ?;";
            }
            const result = await this.db.executeSQL(query,[param]);
            return Ok(result);
        } catch (error) {
            throw error;
        }
    }
    async delete(req:Number){
        try {
            let query:string = "update `account` set is_deleted = b'1' where id = ?";
            const result = await this.db.executeSQL(query,[req]);
            return Ok(result);
        } catch (error) {
            throw error;
        }
    }
}