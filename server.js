



const db=require('./db.js')
const express=require ('express')


const app=express()
const personRouter=require('./routers/PersonRounter.js')


const bodyParser =require('body-parser');
app.use(bodyParser.json());


app.get('/',function(req,res){
    res.send('welcome to may hotel! How can i help you')
})

app.use('/',personRouter);



app.listen(3000,()=>{
    console.log("Server is runnig on port 3000")
})


