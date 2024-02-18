const express = require('express');
const router = express.Router();
const Person = require('../models/person.js'); 


//create
router.post('/person', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const savedPerson = await newPerson.save();
        console.log("Data Saved ");
        res.status(200).json(savedPerson);
    } catch (err) {
        console.log("Internal Server Error ", err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//Delete
router.delete('/person/:id',async(req,res)=>{
    try{

        const personId=req.params.id;

        const deltedElem=await Person.findByIdAndDelete(personId);
        
        if(!deltedElem) return res.status(404).json({msg:"NO person found "});

        res.status(200).json(deltedElem);
        

    }
    catch(err){

        res.status(404).json({error:"server is not live or found"})

    }
})

//Read

router.get('/person/find',async(req,res)=>{

    try{

        const result=await Person.find();
        if(!result)return res.status(404).json({msg:"not found any documents"})
        res.status(200).json(result);

    }
    catch(err){

        res.status(404).json({error:`${err}`})

    }
    
   
})

//Update
router.put('/person/:id',async (req,res)=>{
try{

    const personId=req.params.id;
    const data=req.body;
    const updatedRes=await Person.findByIdAndUpdate(personId,data);

    if(!updatedRes)res.status(404).json({msf:"NO files found"});

    res.status(200).json(updatedRes);


}
catch(err){
    res.status(404).json({erro:`${err}`})
}
})

module.exports = router;
