const Web3 = require("web3")
const web3 = new Web3("http://192.168.56.102:9726")

web3.eth.getBalance("0x704765a908962e25626f2bea8cdf96c84dedaa0b")
.then(console.log)

web3.eth.getBalance("0x9041142ec77b2f07032493Bf5e870Ae1D065c6F4")
.then(console.log)