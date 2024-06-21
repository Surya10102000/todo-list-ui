import mongoose from "mongoose";
const taskSchema = mongoose.Schema({
    title : { 
        type : String,
        required : true,
    },
    description : { 
        type : String,
        default : ""
    },
    userId : { 
        type : String,
        required : true,
    },
    completed : { 
        type : Boolean , 
        default : false
    }
}, { timestamps : true })

const taskModel = mongoose.model("Task", taskSchema)

export default taskModel