import * as jwt from 'jsonwebtoken';
export const getToken = function (data:any){
    try {
        console.log("Eror:=",data);
        return jwt.sign({...data},process.env.SECRET || "");
    } catch (error) {
        throw error;
    }
}
export const verify = function (data:string){
    try {
        return jwt.verify(data,process.env.SECRET || "")
    } catch (error) {
        throw error;
    }
}