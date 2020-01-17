const mongoose=require('mongoose')
const Schema=mongoose.Schema

const DepartmentSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    employees:[
        {
            employe:{
                type:Schema.Types.ObjectId,
                ref:'Employees'
            }
        }
    ]


    
})
const Department=mongoose.model('Department',DepartmentSchema)
module.exports= Department
