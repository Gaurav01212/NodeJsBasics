



const db=require('./db.js')
const express=require ('express')
require('dotenv').config();


const app=express()
const personRouter=require('./routers/PersonRounter.js')


const bodyParser =require('body-parser');
app.use(bodyParser.json());


app.get('/',function(req,res){
    res.send('welcome to may hotel! How can i help you')
})

app.use('/',personRouter);

const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log("Server is runnig on port 3000")
})


