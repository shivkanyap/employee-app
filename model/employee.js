const mongoose=require('mongoose')
const Department=require('./department')
const Schema=mongoose.Schema
const EmployeeSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    department:{
        type:Schema.Types.ObjectId,
        ref:'Department'

    }
})
EmployeeSchema.post('save',function(next){
    const employe=this
    Department.findById(employe.department)
    .then(dept=>{
        console.log(dept)
        dept.employees.push({employe:employe._id})
        dept.save()
    })
    next()
    
})



// NoteSchema.post('save',function(next){
//     const note=this
//     note.tags.forEach(function(tagItem){
//         Tag.findById(tagItem.tag)
//         .then(tag=>{
//             tag.notes.push({note:note._id})
//             tag.save()
//         })
//     })
//     next()
// })

const Employees=mongoose.model('Employees',EmployeeSchema)
module.exports=
    Employees
