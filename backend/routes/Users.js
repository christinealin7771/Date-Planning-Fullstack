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
        res.json({error: "Passwords do not match"})
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
            res.json("Success")
        })
    }
}) 

router.post('/login', async(req, res) => {
    const {email, password} = req.body
    const user = await Users.findOne({where: {email: email}})

    if(!user){
        res.json({error: "Email Doesn't Exist"})
    }
    else {
        bcrypt.compare(password, user.password).then((match) => {
            if(!match){
                res.json({error: "Wrong Email and Password Combination"})
            }
            else{
                
                res.json({status: "Success", message: "Login Successful", data: user})

            }
        })
    }
})

module.exports = router