const Web3 = require("web3")
const web3 = new Web3("http://localhost:9587")

web3.eth.getBalance("0x9041142ec77b2f07032493Bf5e870Ae1D065c6F4")
.then(console.log)