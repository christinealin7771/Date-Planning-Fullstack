const express = require('express')
const router = express.Router()
const {Users} = require("../models") 
const bcrypt = require("bcrypt")


router.get("/", async (req,res) => {
    const allUsers = await Users.findAll()
    res.json(allUsers)
})

router.post("/signup", async(req, res) => {
    const{fullName, email, dateOfBirth, password, confirmPassword} = req.body
    if(password !== confirmPassword){
        res.json({status: "failed", message: "Passwords don't match", data: null})
    }
    else {
        bcrypt.hash(password, 10).then((hash) => {
            Users.create({
                fullName: fullName,
                email: email,
                dateOfBirth: dateOfBirth,
                password: hash,
                confirmPassword: hash,
            })
            res.json({status: "Success", message: "Signup Successful", data: {fullName: fullName, email: email}})
        })
    }
}) 

router.post('/login', async(req, res) => {
    const {email, password} = req.body
    const user = await Users.findOne({where: {email: email}})

    if(!user){
        res.json({status: "failed", message: "Email doesn't exist", data: null})
    }
    else {
        bcrypt.compare(password, user.password).then((match) => {
            if(!match){
                res.json({status: "failed", message: "Wrong email and password", data: null})
            }
            else{
                
                res.json({status: "Success", message: "Login Successful", data: user})

            }
        })
    }
})

module.exports = router