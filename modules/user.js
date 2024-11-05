const mongoose = require('mongoose')
const bcrypt =require('bcrypt')
const JWT =require('jsonwebtoken')
const memberschema = mongoose.Schema({
    surname:{
        type:String,
        trim:true,
        //required:[true,"please provide your name"],
       // maxlength:[20,"please name cannot be more than 20"],
      //  minLenght:[3,"name cannot be less than 3"]
    },
    firstname:{
        type:String,
        trim:true,
       // required:[true,"please provide your name"],
       // maxlength:[20,"please name cannot be more than 20"],
       // minLenght:[3,"name cannot be less than 3"]
    },
    address:{
        type:String,
        trim:true,
       // required:[true,"please provide your address"],
        //minLenght:[15,"address cannot be less than 3"]
    },
    phone:{
        type:Number,
        trim:true,
       // required:[true,"please provide your phone number"],
       // maxlength:[11,"please phone number cannot be more than 20"],
        //minLenght:[10,"phone number cannot be less than 10"]
    },
    email:{
        type:String,
        trim:true,
        //required:[true,"please provide your email"],
        //maxlength:[20,"please email adresss cannot be more than 20"],
        //minLenght:[3,"email address cannot be less than 3"]
    },
    password:{
        type:String,
        trim:true,
        //required:[true,"please enter a password"],
       // maxlength:[20,"please password cannot be more than 20"],
       // minLenght:[5,"password cannot be less than 5"]
    },
    re_password:{
        type:String,
        trim:true,
       // required:[true,"please enter a password"],
       // maxlength:[20,"please password cannot be more than 20"],
       // minLenght:[5,"password cannot be less than 5"]
    },
    nin:{
        type:Number,
        trim:true,
        //required:[true,"please enter your national identification number"],
        //maxlength:[11,"please nin cannot be more than 11"],
        //minLenght:[11,"nin cannot be less than 11"]
    },
})

memberschema.pre("save", async function(){
        const salt = await bcrypt.genSalt(10)
      this.password = await bcrypt.hash(this.password, salt)
   
})

memberschema.pre('save', async function(){
    const salt = await bcrypt.genSalt(10)
    this.re_password= await bcrypt.hash(this.re_password, salt)
    
})

memberschema.methods.createJWT =async function(userdata){
          const token =JWT.sign(userdata, "hhgvgvgv", {expiresIn:'10d'})
          return token
}

memberschema.methods.comparepassword = async function(frontendpassword){
    const isMatch = await bcrypt.compare(frontendpassword, this.re_password)
    return isMatch
}

module.exports=mongoose.model('Member',memberschema)