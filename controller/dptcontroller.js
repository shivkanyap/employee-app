const express=require('express')
const router=express.Router()
const Department=require('../model/department')


router.get('/',function(req,res){
    Department.find()
    .then(departments=>{
        res.json(departments)

    })
    .catch(err=>{
        res.json(err)
    })
})

router.post('/',function(req,res){
    const body=req.body
    const department=new Department(body) //module name
    department.save()
    .then(department=>{
        res.json(department)

    })
    .catch(err=>{
        res.json(err)
    })

})
// router.get('/id')

router.get(`/:id`,(req,res)=>{
        const id=req.params.id
        Department.findById(id)
        .then((dept)=>{
            res.json(dept)
        })
        .catch((err)=>{
            res.json(err)
        })
    })
    
// router.get('/employes',function(req,res){
    


// })
module.exports=router