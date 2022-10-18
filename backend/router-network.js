const express = require("express")
const router = express.Router()

module.exports =  router

router.post("/create", (req, res) => {
    res.status(500).send("Not implemented create")
})

router.delete("/:network", (req, res) => {
    res.status(500).send("Not implemented create")
})

router.get("/:network", (req, res) => {
    res.status(500).send("Not implemented /")
})

