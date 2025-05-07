import Junschema from '../Model/JunSchema.js'
import mongoose from 'mongoose'

export const add=async(req,res)=>{
    const {name,email,phone,resume}=req.body;
    const newjun=new Junschema({
        name:name,
        email:email,
        phone:phone,
        resume:resume
    })
    try {
        await newjun.save();
        res.status(200).json({message:"Success"})
    } catch (error) {
        res.status(500).json({message:"Error"})
    }
}