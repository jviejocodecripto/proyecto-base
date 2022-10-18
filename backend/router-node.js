const express = require("express")
const router = express.Router()

module.exports =  router

router.post("/add/:network", (req, res) => {
    res.status(500).send("Not implemented ")
})

router.delete("/:network/:node", (req, res) => {
    res.status(500).send("Not implemented ")
})

router.get("/:network/:node", (req, res) => {
    res.status(500).send("Not implemented ")
})

router.get("/:network/:node/block/:block", (req, res) => {
    res.status(500).send("Not implemented ")
})

router.get("/:network/:node/tx/:tx", (req, res) => {
    res.status(500).send("Not implemented ")
})

router.get("/:network/:node/balance/:address", (req, res) => {
    res.status(500).send("Not implemented ")
})

