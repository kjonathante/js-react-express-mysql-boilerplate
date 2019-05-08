const express = require('express')
const router = express.Router()
// const usersController = require("../controllers/users")

router.get("/", (req,res)=> res.json({message: 'notes'}))
module.exports = router;