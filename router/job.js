const express = require('express')
const router =express.Router()
const{createjob,getjob, editjob, deletejob}=require('../controllers/job')


router.post('/create',createjob)
router.route('/get/:userid').get(getjob)
router.post('/update/:job_id', editjob)
router.delete('/delete/:id',deletejob)


module.exports= router