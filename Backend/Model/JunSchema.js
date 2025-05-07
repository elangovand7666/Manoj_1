import mongoose from "mongoose"

const JunSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    resume:{
        type:String,
        required:true
    }
})

export default mongoose.model("Junschema",JunSchema)