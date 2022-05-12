const express = require("express")

const app = express()

const porta = process.env.PORT || 3030 


module.exports = {app, porta}