
import Db from "../utils/db.util";
import { Err, Ok } from "../utils/misc.util";
import {data}  from './data';
export default class TestService{
    private db:Db;
    constructor(){
        this.db = new Db();
    }
    async getData(){
        try {
            const result = await this.db.executeSQL("select * from test");
            return Ok(result);
        } catch (error) {
            return Err(error);
        }
    }
    async dumpData(){
        for (let i = 0; i < data.length; i++) {            
            for (let j = 0; j < data[i].variants.length; j++) {
                const el = data[i].variants[j];                
                let query = "INSERT INTO `varient`(`color`,`size`,`sku`,`p_id`)VALUES(?,?,?,?)"; 
                let _d=[el.color,el.size,el.sku,i+1];
                try {                
                    const result = await this.db.executeSQL(query,_d);
                } catch (error) {
                    console.log(error);
                }
            }
                
        }
    }
}