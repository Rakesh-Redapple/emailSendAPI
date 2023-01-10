const express= require('express');
const dotenv=require('dotenv');
dotenv.config({path:'./.env'});
const sendEmail=require('./controller/sendEmail');
const app=express();
const port=process.env.PORT||2000;
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/api/v1/sendEmail',sendEmail);

const start= async ()=>{
    try{
        app.listen(port,()=>{
            console.log(`Server is running on port:${port}`);
        })
    }catch(err){
        console.log(err);
    }
}

start();
