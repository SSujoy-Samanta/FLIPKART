import express from "express";
import Connection from "./database/init/db.js";
import DefaultData from "./database/init/defaultData.js";
import router from "./routes/routes.js";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from'dotenv';


const app=express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(express.urlencoded({extended:true}));
app.use('/',router);

Connection();
app.listen(8080,()=>{
    console.log("Listing port no 8080");
})

DefaultData();