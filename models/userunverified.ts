import mongoose from 'mongoose'

const userunverifiedSchema= new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    otp:{type:String,required:true},
    validdate:{type:Date,required:true},
})

export const Userunverified= mongoose.models?.Userunverified || mongoose.model('Userunverified',userunverifiedSchema)