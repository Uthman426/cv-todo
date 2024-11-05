 const Job = require('../modules/job')

  const createjob = async (req, res) => {
    console.log(req.body)
     try {
        const response  =await Job.create({...req.body})
        
        res.send(response)
        
     } catch (error) {
        console.log(error)
     }
  }
  const getjob = async (req,res) =>{
   // console.log(req.params)
    try {
        const response = await Job.find({createdBy:req.params.userid})
        res.send(response)

    } catch (error) {
        console.error
    }
  }
  const editjob = async(req,res) =>{
    const jobid = req.params.job_id
    console.log(req.params.job_id)
    const{company,position,status}=req.body
    try { const response= await Job.findOneAndUpdate({
          _id:jobid},
         {
          company:company,
          position:position,
          status:status
        },
        {new:true,runValidators:true},
      )
      res.send(response)
      
    } catch (error) {
      console.log(error)
    }

  }
   const deletejob = async(req,res)=>{
    const userid =req.params.id
    try { const response = await Job.findOneAndDelete({
      _id:userid
    })
    res.send(response)
      
    } catch (error) {
      console.log(error)
    }
   }
  module.exports ={
    createjob,
    getjob,
    editjob,
    deletejob
  }

