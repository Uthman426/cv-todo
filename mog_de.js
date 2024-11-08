const member = require ('./router/user')
const job = require ('./router/job')
const express = require('express')
const app = express()
const {connectdb} = require('./db_connections/dbconnect') 
const path =require('path')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/member',member)
app.use('/job', job)

app.use('/',express.static(path.join(__dirname,'public')))
const url="mongodb+srv://uthmanolaleke:Q46G7kltmdOBx4ga@firstwork.odqdn.mongodb.net/?retryWrites=true&w=majority&appName=firstwork"
const startServer =async ()=>{
    try{
        await connectdb(url,()=>{
            console.log("connected to database")
        })
        app.listen(5500,console.log("your server is live"))
    }
    catch(error){
        console.log(error)
    }
}
startServer()
