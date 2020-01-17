const express=require('express')
const router=express.Router()
const Employees=require('../model/employee')

router.get('/',(req,res)=>{
    Employees.find()
    .then(employe=>
        res.json(employe)
    )
    .catch(err=>
        res.json(err)
    )
})

router.post('/',(req,res)=>{
    const body=req.body
    const employe=new Employees(body)
    employe.save()
    .then(employe=>
        res.json(employe)
    )
    .catch(err=>
        res.json(err)
    )
})
module.exports=router