export const Ok = (data:any):{success:boolean,data:any}=>{
    return {
        success:true,
        data:data
    }
}
export const Err = (data:any):{success:boolean,data:any}=>{
    return {
        success:false,
        data:data
    }
}