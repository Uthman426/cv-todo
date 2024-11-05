const express = require('express')
const router =express.Router()
const {getmember,createmember, memberlogin}=require("../controllers/users")
const { paystackPayment}=require('../controllers/paystack')


router.route('/get').get(getmember),
router.post('/create',createmember),
router.post('/login',memberlogin),
router.post('/paystack',paystackPayment)



module.exports= router