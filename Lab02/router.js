const express = require("express");
const router = express.Router()
const fs = require("fs")
const {getCV1} = require("./Controllers/extract")
const {getCV} = require("./Controllers/CVController")
router.get("/", (req,res)=>{
    res.render("homepage")
})

router.get("/cv", getCV)

router.get("/registration", (req,res)=>{
    res.render("create_cv")
})

router.post("/registration", (req,res)=>{
    // res.send("Form submitted")
    console.log(req.body)
    fs.writeFileSync("./data/userInfo", JSON.stringify(req.body))
    const {Name, Address, email, phone} = req.body
    name = "Salman Ahsan"
    const {edus, exps} = getCV1()
    res.render("cv", {name, Name, Address, email, phone, educations: edus, experiences: exps})
})

module.exports = router;