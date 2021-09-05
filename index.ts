import express, { Request,Response} from 'express';
import * as dotenv from 'dotenv';
import {renameSync, writeFileSync } from 'fs';
import * as path from 'path';
dotenv.config();
import './src/utils/res-ext';
import apiRouter  from './src/routes/index';
import bodyParser from 'body-parser';
import Multer from 'multer';
import cors from 'cors';
const multer = Multer({dest:"public/uploads"});
const app = express();
app.use(cors({origin:"*"}));
app.use(bodyParser({extended:false}));
app.use(express.static('public'));
app.post("/upoad",multer.single("file"),(req,res,next)=>{
    const file = "uploads/"+(+ new Date)+req.file?.originalname;
    renameSync("public/uploads/"+req.file?.filename,"public/"+file);
    res.Ok({
        file:file,
        originalName:req.file?.originalname,
        size:req.file?.size,
        type:req.file?.mimetype
    });
});
app.use("/api",multer.any(),apiRouter);
app.get("/api-running",(req,res)=>{
    res.Ok("Running");
})

app.get("*",(req:Request,res:Response)=>{
    res.NotFound(null);    
})

let port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log('running at http://localhost:'+port);
})