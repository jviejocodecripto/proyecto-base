const express = require("express")
const router = express.Router()

module.exports =  router

router.post("/add", (req, res) => {
    res.status(500).send("Not implemented ")
})

router.delete("/:network/:node", (req, res) => {
    res.status(500).send("Not implemented ")
})

router.get("/:network", (req, res) => {
    res.status(500).send("Not implemented ")
})

