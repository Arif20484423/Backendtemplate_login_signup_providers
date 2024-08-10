import mongoose from 'mongoose'

const userverifiedSchema= new mongoose.Schema({
    email:{type:String,required:true,unique:true}
})

export const Userverified= mongoose.models?.Userverified || mongoose.model('Userverified',userverifiedSchema)