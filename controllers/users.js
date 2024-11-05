const Member = require('../modules/user')
const jwt = require("jsonwebtoken")
const getmember = async (req,res) => {
    try { 
        const response = await Member.find({})
        res.send(response)
        
    } catch (error) {
        console.log(error)
    }
}
const createmember=async (req,res) => {
    console.log(req.body)
   // const {rpassword} = req.body
    try {
        const response  =await Member.create({...req.body})
        const token = await response.createJWT(req.body)
        res.send({response, token})
        console.log(token)
        
    } catch (error) {
      console.log(error)  
    }
}
const memberlogin =async (req,res)=>{
     const {email,password} =req.body
     console.log(req.body)
     //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdXJuYW1lIjoiT2xhbGVrZSIsImZpcnN0bmFtZSI6IlV0aG1hbiIsImFkZHJlc3MiOiJQb3dlciBsaW5lIiwicGhvbmUiOiIzMTMxMiIsImVtYWlsIjoiampnakBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjExMTEiLCJyZV9wYXNzd29yZCI6IjExMTEiLCJuaW4iOiIxMjM0NTYiLCJpYXQiOjE3MzAyMTA3NDQsImV4cCI6MTczMTA3NDc0NH0.E4moee436tGf73Ejy4XToMUb4QAhISneq2v-j0YEdMg"
      // const userdata = jwt.verify(token,"hhgvgvgv" )
       //console.log(userdata)
       try {
      
     
     if(!email || !password){
            throw new Error('Please provide email and password')
        }

        const memberaccess=  await Member.findOne({email})
        if(!memberaccess){
            // throw new Error('Not a REGISTERED user, register now')
            res.send('Not a REGISTERED user, register now')
        }
        const isPasswordCorrect = await memberaccess.comparepassword(password)
        // console.log(isPasswordCorrect)
        
        if(!isPasswordCorrect){
        //  throw new Error('Wrong password!')
        res.send('Wrong password!')
        }
        
        res.send({userid: memberaccess._id, username:memberaccess.firstname+ ' '+ memberaccess.surname})
          
       } catch (error) {
        console.log(error)
       }
}
const comfirmpass = async (req,res) => {
    
}

module.exports ={
    getmember,
    createmember,
    memberlogin
}