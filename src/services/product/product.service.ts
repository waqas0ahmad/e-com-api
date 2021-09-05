import Db from "../../utils/db.util";
import { Err, Ok } from "../../utils/misc.util";
export default class ProductService{
    private db:Db;
    constructor(){
        this.db = new Db();
    }
    async all(){
        try {
            const result = await this.db.executeSQL("select * from product");
            for (let i = 0; i < result.length; i++) {
                const el = result[i];
                el.images = await this.db.executeSQL("select * from `image` where p_id=?",el.id)
                el.variants = await this.db.executeSQL("select * from `varient` where p_id=?",el.id)
            }
            return Ok(result);
        } catch (error) {
            throw error;
        }
    }

}